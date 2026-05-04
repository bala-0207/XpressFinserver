'use client'

import type {
  AnchorHTMLAttributes,
  CSSProperties,
  MouseEvent as ReactMouseEvent,
} from 'react'
import styles from './apply-button.module.css'

// -----------------------------------------------------------------------------
// ApplyLinkButton — animated <a> link with the same letter dance, hover wave,
// and plane takeoff animation as the form's SubmitButton, but adapted for
// scroll-to-anchor navigation use.
//
// Differences from SubmitButton:
//   - Renders <a> not <button> (semantic for in-page navigation)
//   - Default text "Apply Now", sent text "Let's Go" (instead of "Sent")
//   - Default variant is "gold" (matches existing brand CTAs)
//   - NOT full-width by default (lives inside flex layouts)
//   - Auto-blurs ~1.8s after click so the button visually resets when the
//     user scrolls back. Without this it would stay stuck in "Let's Go" state.
// -----------------------------------------------------------------------------

export interface ApplyLinkButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** href to scroll to (e.g. "#lead-form"). */
  href: string
  /** Default visible text. Defaults to "Apply Now". */
  text?: string
  /** Text shown briefly during the click animation. Defaults to "Let's Go". */
  sentText?: string
  /** Colour palette. "gold" matches the existing site CTAs. */
  variant?: 'gold' | 'primary'
  /** Size preset. lg = hero (64px), sm = navbar (44px). */
  size?: 'lg' | 'sm'
  /** Accessible label. Falls back to `text`. */
  ariaLabel?: string
}

function letterize(text: string) {
  return Array.from(text).map((ch, i) => (
    <span key={i} style={{ ['--i' as string]: i } as CSSProperties}>
      {ch === ' ' ? '\u00A0' : ch}
    </span>
  ))
}

export function ApplyLinkButton({
  href,
  text = 'Apply Now',
  sentText = "Let's Go",
  variant = 'gold',
  size = 'lg',
  ariaLabel,
  className,
  onClick,
  ...props
}: ApplyLinkButtonProps) {
  const handleClick = (e: ReactMouseEvent<HTMLAnchorElement>) => {
    onClick?.(e)
    // Cache the element reference now — by the time setTimeout fires,
    // React may have nulled `e.currentTarget`.
    const target = e.currentTarget
    setTimeout(() => {
      try {
        target.blur()
      } catch {
        /* element may have been unmounted; ignore */
      }
    }, 1800)
  }

  const variantClass = variant === 'gold' ? styles.buttonGold : ''
  const sizeClass = size === 'sm' ? styles.buttonSmall : ''

  return (
    <a
      href={href}
      aria-label={ariaLabel ?? text}
      onClick={handleClick}
      className={`${styles.button}${variantClass ? ` ${variantClass}` : ''}${sizeClass ? ` ${sizeClass}` : ''}${className ? ` ${className}` : ''}`}
      {...props}
    >
      {/* DEFAULT STATE: plane icon + text letters */}
      <div className={`${styles.state} ${styles.stateDefault}`} aria-hidden="true">
        <span className={styles.outline} />
        <span className={styles.icon}>
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

      {/* SENT/GOING STATE: check icon + sent text (revealed on :focus) */}
      <div className={`${styles.state} ${styles.stateSent}`} aria-hidden="true">
        <span className={styles.icon}>
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
    </a>
  )
}
