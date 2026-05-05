'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Lenders', href: '#lenders' },
    { label: 'Instant Loans', href: '#instant-loans' },
    { label: 'Branches', href: '#locations' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-white/20 shadow-lg">
      {/*
        3-section layout:
          [Logo]  ──flex-1──  [Menu items, centered]  ──flex-1──  [Apply Now, right]
        Logo sits flush to screen left, Apply Now sits flush to content right.
        Menu floats centered between them.
      */}
      <div className="flex items-center h-16 pr-4 sm:pr-6 lg:pr-8">
        {/* LEFT — Logo (flush to screen edge) */}
        <a
          href="#"
          aria-label={`${COMPANY.name} — home`}
          className="flex items-center group pl-2 sm:pl-3 shrink-0"
        >
          <Image
            src="/Logo.png"
            alt={`${COMPANY.name} logo`}
            width={250}
            height={60}
            sizes="250px"
            priority
            className="h-[60px] w-auto object-contain origin-left scale-[2.5] group-hover:scale-[2.55] transition-transform duration-300"
          />
        </a>

        {/* CENTER — Desktop menu items */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors text-sm font-semibold relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-yellow-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Mobile spacer (replaces the centered menu on small screens) */}
        <div className="flex-1 md:hidden" />

        {/* RIGHT — CTA + mobile toggle */}
        <div className="flex items-center gap-2 shrink-0">
          {/* CTA Button (desktop only) */}
          <div className="hidden md:block">
            <a
              href="#lead-form"
              className="bg-gradient-to-r from-secondary to-yellow-400 text-primary px-6 py-2.5 rounded-lg font-bold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary hover:bg-primary/10 p-2 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (drops down below the nav) */}
      {isOpen && (
        <div className="md:hidden pb-4 border-t border-white/20 bg-white/50 backdrop-blur-md px-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-3 px-2 text-foreground hover:text-primary hover:bg-primary/5 transition-all rounded-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#lead-form"
            className="block mt-4 bg-gradient-to-r from-secondary to-yellow-400 text-primary px-6 py-2.5 rounded-lg font-bold text-center hover:shadow-lg transition-all"
            onClick={() => setIsOpen(false)}
          >
            Apply Now
          </a>
        </div>
      )}
    </nav>
  )
}
