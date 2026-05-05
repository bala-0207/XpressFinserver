'use client'

import { useState } from 'react'
import { LOAN_TYPES } from '@/lib/constants'
import { INDIAN_STATES, getCitiesForState } from '@/lib/indian-locations'
import { AlertCircle } from 'lucide-react'
import { SubmitButton } from '@/components/apply-button'

interface FormState {
  loanType: string
  // Personal-only fields
  companyName: string
  monthlyIncome: string
  // Business-only field
  businessName: string
  // Common
  loanAmount: string
  firstName: string
  lastName: string
  email: string
  phone: string
  state: string
  city: string
  // Honeypot — must stay empty for real users.
  website: string
}

const EMPTY_FORM: FormState = {
  loanType: '',
  companyName: '',
  monthlyIncome: '',
  businessName: '',
  loanAmount: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  state: '',
  city: '',
  website: '',
}

export function LeadForm() {
  const [formData, setFormData] = useState<FormState>(EMPTY_FORM)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const next = {
      ...formData,
      [e.target.name]: e.target.value,
    }
    // When loan type switches, clear fields that don't apply to the new type.
    // This prevents stale data from leaking into the wrong submission.
    if (e.target.name === 'loanType') {
      if (e.target.value === 'personal') {
        next.businessName = ''
      } else if (e.target.value === 'business') {
        next.companyName = ''
        next.monthlyIncome = ''
      } else {
        // No type selected — clear all loan-type-specific fields.
        next.businessName = ''
        next.companyName = ''
        next.monthlyIncome = ''
      }
    }
    // When state changes, clear the city so the user picks one valid for the
    // newly-selected state.
    if (e.target.name === 'state') {
      next.city = ''
    }
    setFormData(next)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (loading) return
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const json = await res.json().catch(() => ({}))

      if (!res.ok || !json.ok) {
        setError(
          json.error ||
            'Could not submit right now. Please try again or call us.'
        )
        setLoading(false)
        return
      }

      setSubmitted(true)
      setLoading(false)

      // Reset back to empty after a few seconds so the form is reusable.
      setTimeout(() => {
        setSubmitted(false)
        setFormData(EMPTY_FORM)
      }, 5000)
    } catch (err) {
      console.error('Lead submit error:', err)
      setError('Network error. Please check your connection and try again.')
      setLoading(false)
    }
  }

  const isPersonal = formData.loanType === 'personal'
  const isBusiness = formData.loanType === 'business'
  const availableCities = formData.state ? getCitiesForState(formData.state) : []

  return (
    <section id="lead-form" className="py-20 md:py-32 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Get Your Quote Today
          </h2>
          <p className="text-lg text-muted-foreground">
            Fill out the form below and we&apos;ll match you with the best banks
            &amp; NBFCs for your need.
          </p>
        </div>

        <div className="bg-muted rounded-xl p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                Application Received!
              </h3>
              <p className="text-muted-foreground">
                We&apos;ll review your information and connect you with suitable
                lenders shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Honeypot field — visually hidden, real users won't fill it. */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '-10000px',
                  width: '1px',
                  height: '1px',
                  overflow: 'hidden',
                }}
              >
                <label htmlFor="website-confirm">
                  Website (leave blank)
                </label>
                <input
                  type="text"
                  id="website-confirm"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              {/* Loan Type */}
              <div>
                <label htmlFor="loanType" className="block text-sm font-medium text-foreground mb-2">
                  Loan Type <span className="text-secondary">*</span>
                </label>
                <select
                  id="loanType"
                  name="loanType"
                  value={formData.loanType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select loan type</option>
                  {LOAN_TYPES.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* PERSONAL-ONLY: Company Name + Monthly Income (side-by-side) */}
              {isPersonal && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-foreground mb-2">
                      Company Name <span className="text-secondary">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      placeholder="Where you currently work"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="monthlyIncome" className="block text-sm font-medium text-foreground mb-2">
                      Monthly Income <span className="text-secondary">*</span>
                    </label>
                    <input
                      type="text"
                      id="monthlyIncome"
                      name="monthlyIncome"
                      value={formData.monthlyIncome}
                      onChange={handleChange}
                      required
                      placeholder="e.g., ₹50,000"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              {/* BUSINESS-ONLY: Business Name + Loan Amount (side-by-side)
                  PERSONAL: only Loan Amount, full width
                  No selection yet: only Loan Amount, full width */}
              <div className={isBusiness ? 'grid md:grid-cols-2 gap-6' : ''}>
                {isBusiness && (
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-foreground mb-2">
                      Business Name <span className="text-secondary">*</span>
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      required
                      placeholder="Your Business Name"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                )}
                <div>
                  <label htmlFor="loanAmount" className="block text-sm font-medium text-foreground mb-2">
                    Loan Amount Needed <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="text"
                    id="loanAmount"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleChange}
                    required
                    placeholder="e.g., ₹5,00,000"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              {/* Name fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Your first name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Your last name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              {/* Contact fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              {/* State + City (cascading) */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-foreground mb-2">
                    State <span className="text-secondary">*</span>
                  </label>
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select your state</option>
                    {INDIAN_STATES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-foreground mb-2">
                    City <span className="text-secondary">*</span>
                  </label>
                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    disabled={!formData.state}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:bg-muted disabled:cursor-not-allowed disabled:text-muted-foreground"
                  >
                    <option value="">
                      {formData.state ? 'Select your city' : 'Select a state first'}
                    </option>
                    {availableCities.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Error banner */}
              {error && (
                <div role="alert" className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800">
                  <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-medium">{error}</p>
                </div>
              )}

              <SubmitButton
                text={loading ? 'Submitting...' : 'Get Instant Quote'}
                sentText="Sent"
                disabled={loading}
                ariaLabel="Submit your loan inquiry"
              />

              <p className="text-center text-xs text-muted-foreground">
                ✓ Your information is secure and will never be shared with third parties.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
