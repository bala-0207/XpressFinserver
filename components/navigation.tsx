'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ApplyLinkButton } from '@/components/apply-link-button'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Lenders', href: '#lenders' },
    { label: 'Branches', href: '#locations' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-white/20 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-700 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
              <span className="text-white font-bold text-lg">X</span>
            </div>
            <span className="font-bold text-primary text-lg hidden sm:inline">XpressFinserve</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
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

          {/* CTA Button */}
          <div className="hidden md:block">
            <ApplyLinkButton href="#lead-form" text="Apply Now" sentText="Let's Go" size="sm" />
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-white/20 bg-white/50 backdrop-blur-md">
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
            <div className="mt-4 px-2">
              <ApplyLinkButton
                href="#lead-form"
                text="Apply Now"
                sentText="Let's Go"
                size="sm"
                onClick={() => setIsOpen(false)}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
