import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendLeadEmail, type LeadData } from '@/lib/email'

// -----------------------------------------------------------------------------
// Validation schema. Server-side guard regardless of what the client sends.
// -----------------------------------------------------------------------------
const LeadSchema = z.object({
  loanType: z.enum(['personal', 'business']),
  // Personal-only fields (validated conditionally below)
  companyName: z.string().max(200).optional().default(''),
  monthlyIncome: z.string().max(50).optional().default(''),
  // Business-only field
  businessName: z.string().max(200).optional().default(''),
  // Common fields
  loanAmount: z.string().min(1, 'Loan amount required').max(50),
  firstName: z.string().min(1, 'First name required').max(100),
  lastName: z.string().min(1, 'Last name required').max(100),
  email: z.string().email('Valid email required'),
  phone: z.string().min(7, 'Phone too short').max(20),
  state: z.string().min(1, 'State required').max(100),
  city: z.string().min(1, 'City required').max(100),
  // Honeypot — real users leave this empty; bots tend to fill every field.
  website: z.string().optional(),
})

// -----------------------------------------------------------------------------
// POST /api/lead
// -----------------------------------------------------------------------------
export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid JSON body.' },
      { status: 400 }
    )
  }

  const parsed = LeadSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Please check your form fields.',
        details: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    )
  }

  const data = parsed.data

  // Honeypot check — bots fill the hidden field, real users don't see it.
  // Silently succeed so the bot doesn't retry.
  if (data.website && data.website.trim().length > 0) {
    return NextResponse.json({ ok: true })
  }

  // Conditional required fields based on loan type.
  if (data.loanType === 'business' && !data.businessName.trim()) {
    return NextResponse.json(
      { ok: false, error: 'Business name is required for business loans.' },
      { status: 400 }
    )
  }
  if (data.loanType === 'personal') {
    if (!data.companyName.trim()) {
      return NextResponse.json(
        { ok: false, error: 'Company name is required for personal loans.' },
        { status: 400 }
      )
    }
    if (!data.monthlyIncome.trim()) {
      return NextResponse.json(
        { ok: false, error: 'Monthly income is required for personal loans.' },
        { status: 400 }
      )
    }
  }

  // Build the lead payload. Clear fields that don't apply to the chosen loan
  // type — defence-in-depth against stale values reaching the email.
  const leadData: LeadData = {
    loanType: data.loanType,
    businessName: data.loanType === 'business' ? data.businessName : '',
    companyName: data.loanType === 'personal' ? data.companyName : '',
    monthlyIncome: data.loanType === 'personal' ? data.monthlyIncome : '',
    loanAmount: data.loanAmount,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone,
    state: data.state,
    city: data.city,
  }

  try {
    await sendLeadEmail(leadData)
    return NextResponse.json({ ok: true })
  } catch (err) {
    // Log full error server-side; return generic message to the client.
    console.error('[/api/lead] email send failed:', err)
    return NextResponse.json(
      {
        ok: false,
        error:
          'Could not submit right now. Please try again in a moment, or call us directly.',
      },
      { status: 500 }
    )
  }
}
