'use client'

import type { ButtonHTMLAttributes, CSSProperties } from 'react'
import styles from './apply-button.module.css'

// -----------------------------------------------------------------------------
// SubmitButton — animated submit button with letter dance, hover wave, plane
// takeoff and a "Sent ✓" reveal on focus/click.
//
// Behaviour notes:
//   - The takeoff animation is driven by the native :focus state. When the
//     user clicks the button, focus is applied → animation plays.
//   - The actual form submission still happens through onClick / form submit
//     handler in the parent. This component does not control success/error.
//   - For accessibility, the multiple letter-spans are aria-hidden; we expose
//     an accessible label via aria-label.
// -----------------------------------------------------------------------------

export interface SubmitButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Default text shown on the button. */
  text?: string
  /** Text shown after click (during the takeoff animation). */
  sentText?: string
  /** Accessible label read by screen readers. Falls back to `text`. */
  ariaLabel?: string
}

/** Wrap each character in a <span> with a `--i` CSS variable for stagger. */
function letterize(text: string) {
  return Array.from(text).map((ch, i) => (
    <span key={i} style={{ ['--i' as string]: i } as CSSProperties}>
      {ch === ' ' ? '\u00A0' : ch}
    </span>
  ))
}

export function SubmitButton({
  text = 'Get Instant Quote',
  sentText = 'Sent',
  ariaLabel,
  className,
  type = 'submit',
  ...props
}: SubmitButtonProps) {
  return (
    <button
      type={type}
      aria-label={ariaLabel ?? text}
      className={`${styles.button} ${styles.buttonFullWidth}${className ? ` ${className}` : ''}`}
      {...props}
    >
      {/* DEFAULT STATE: plane icon + text letters */}
      <div className={`${styles.state} ${styles.stateDefault}`} aria-hidden="true">
        <span className={styles.outline} />
        <span className={styles.icon}>
          {/* Paper-plane icon (lucide Send geometry) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
          </svg>
        </span>
        <p>{letterize(text)}</p>
      </div>

      {/* SENT STATE: check icon + "Sent" letters (revealed on :focus) */}
      <div className={`${styles.state} ${styles.stateSent}`} aria-hidden="true">
        <span className={styles.icon}>
          {/* Checkmark */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
        <p>{letterize(sentText)}</p>
      </div>
    </button>
  )
}
