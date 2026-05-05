import { Resend } from 'resend'

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------
export interface LeadData {
  loanType: 'personal' | 'business'
  // Personal-only (empty string for Business leads)
  companyName: string
  monthlyIncome: string
  // Business-only (empty string for Personal leads)
  businessName: string
  // Common
  loanAmount: string
  firstName: string
  lastName: string
  email: string
  phone: string
  state: string
  city: string
}

// -----------------------------------------------------------------------------
// Config (env-driven; never hardcode keys/emails)
// -----------------------------------------------------------------------------
const FROM_EMAIL =
  process.env.LEAD_FROM_EMAIL ||
  'XpressFinserve Leads <onboarding@resend.dev>'

const TO_EMAIL =
  process.env.LEAD_TO_EMAIL || 'silambarasan@xpressfinserve.com'

// -----------------------------------------------------------------------------
// HTML escape — prevents anything submitted by users from breaking the email
// -----------------------------------------------------------------------------
function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

// -----------------------------------------------------------------------------
// Build a nicely-formatted HTML email body
// -----------------------------------------------------------------------------
function buildEmailHtml(data: LeadData, submittedAt: string): string {
  const fullName = `${data.firstName} ${data.lastName}`.trim()
  const loanTypeLabel = data.loanType === 'personal' ? 'Personal' : 'Business'

  const row = (label: string, value: string, isLink?: 'email' | 'tel') => {
    const safeValue = escapeHtml(value)
    const cellContent =
      isLink === 'email'
        ? `<a href="mailto:${safeValue}" style="color: #1e40af; text-decoration: none;">${safeValue}</a>`
        : isLink === 'tel'
        ? `<a href="tel:${safeValue}" style="color: #1e40af; text-decoration: none;">${safeValue}</a>`
        : safeValue
    return `
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; width: 35%;">${label}</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #111827;">${cellContent}</td>
      </tr>`
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>New Lead</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #1a1a1a; background: #f9fafb;">

  <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); color: white; padding: 28px; border-radius: 12px 12px 0 0;">
    <h1 style="margin: 0; font-size: 22px; font-weight: 700;">New ${loanTypeLabel} Loan Lead</h1>
    <p style="margin: 8px 0 0; opacity: 0.9; font-size: 14px;">Submitted via the Get Your Quote form on xpressfinserve.com</p>
  </div>

  <div style="background: white; border: 1px solid #e5e7eb; border-top: none; padding: 28px; border-radius: 0 0 12px 12px;">
    <table style="width: 100%; border-collapse: collapse;">
      ${row('Loan Type', loanTypeLabel)}
      ${data.businessName ? row('Business Name', data.businessName) : ''}
      ${data.companyName ? row('Company Name', data.companyName) : ''}
      ${data.monthlyIncome ? row('Monthly Income', data.monthlyIncome) : ''}
      ${row('Loan Amount', data.loanAmount)}
      ${row('Name', fullName)}
      ${row('Email', data.email, 'email')}
      ${row('Phone', data.phone, 'tel')}
      ${row('State', data.state)}
      ${row('City', data.city)}
    </table>

    <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
      <a href="mailto:${escapeHtml(data.email)}?subject=Re:%20Your%20loan%20inquiry%20with%20XpressFinserve"
         style="display: inline-block; background: #f59e0b; color: #1e40af; padding: 12px 22px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px;">
        Reply to ${escapeHtml(data.firstName)} &rarr;
      </a>
      <a href="tel:${escapeHtml(data.phone)}"
         style="display: inline-block; margin-left: 8px; background: #1e40af; color: white; padding: 12px 22px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px;">
        Call ${escapeHtml(data.phone)}
      </a>
    </div>
  </div>

  <p style="margin: 16px 0 0; font-size: 12px; color: #9ca3af; text-align: center;">
    Submitted: ${escapeHtml(submittedAt)} IST
  </p>
</body>
</html>`
}

// -----------------------------------------------------------------------------
// Plain-text fallback (for clients that don't render HTML)
// -----------------------------------------------------------------------------
function buildEmailText(data: LeadData, submittedAt: string): string {
  const fullName = `${data.firstName} ${data.lastName}`.trim()
  const loanTypeLabel = data.loanType === 'personal' ? 'Personal' : 'Business'

  return [
    `New ${loanTypeLabel} Loan Lead`,
    `Submitted via xpressfinserve.com Get Your Quote form`,
    ``,
    `Loan Type:    ${loanTypeLabel}`,
    data.businessName ? `Business Name: ${data.businessName}` : '',
    data.companyName ? `Company Name:  ${data.companyName}` : '',
    data.monthlyIncome ? `Monthly Income:${data.monthlyIncome}` : '',
    `Loan Amount:  ${data.loanAmount}`,
    `Name:         ${fullName}`,
    `Email:        ${data.email}`,
    `Phone:        ${data.phone}`,
    `State:        ${data.state}`,
    `City:         ${data.city}`,
    ``,
    `Submitted:    ${submittedAt} IST`,
  ]
    .filter(Boolean)
    .join('\n')
}

// -----------------------------------------------------------------------------
// Main: send the lead email
// Throws if the API key is missing or Resend returns an error.
// -----------------------------------------------------------------------------
export async function sendLeadEmail(data: LeadData) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error(
      'RESEND_API_KEY is not configured. Add it to .env.local and restart the dev server.'
    )
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const fullName = `${data.firstName} ${data.lastName}`.trim()
  const loanTypeLabel = data.loanType === 'personal' ? 'Personal' : 'Business'
  const subject = `[XpressFinserve] New ${loanTypeLabel} loan lead — ${fullName} (${data.city}, ${data.state})`

  // Format submitted timestamp in IST
  const submittedAt = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  const result = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: data.email,
    subject,
    html: buildEmailHtml(data, submittedAt),
    text: buildEmailText(data, submittedAt),
  })

  if (result.error) {
    throw new Error(
      `Resend send failed: ${result.error.name || 'unknown'} — ${result.error.message || JSON.stringify(result.error)}`
    )
  }

  return result.data
}
