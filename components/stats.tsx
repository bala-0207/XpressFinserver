'use client'

import { useEffect, useState } from 'react'
import { STATS } from '@/lib/constants'

function StatCounter({ target, prefix = '', suffix = '', formatted = false }: { target: number; prefix?: string; suffix?: string; formatted?: boolean }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.querySelector(`[data-stat-target="${target}"]`)
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [target])

  useEffect(() => {
    if (!isVisible) return

    let current = 0
    const increment = target / 100
    const interval = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(interval)
      } else {
        setCount(Math.floor(current))
      }
    }, 20)

    return () => clearInterval(interval)
  }, [isVisible, target])

  const displayValue = formatted
    ? `${prefix}${(count / 1000000000).toFixed(1)}B${suffix}`
    : `${prefix}${count.toLocaleString()}${suffix}`

  return <span>{displayValue}</span>
}

export function Stats() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-r from-primary via-blue-700 to-blue-900 text-white overflow-hidden">
      {/* Glossy overlays */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat) => (
            <div 
              key={stat.label} 
              className="group text-center p-6 md:p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:border-white/40"
              data-stat-target={stat.value}
            >
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-3 group-hover:scale-110 transition-transform duration-300">
                <StatCounter
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  formatted={stat.formatted}
                />
              </div>
              <p className="text-blue-100 text-sm md:text-base font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
