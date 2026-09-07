import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Programs', to: '/programs' },
  { label: 'Founders', to: '/founders' },
  { label: 'Impact', to: '/impact' },
  { label: 'Partner', to: '/partner' },
  { label: 'Contact', to: '/contact' },
]

const BAR_H = 72
// Ignore sub-pixel/momentum jitter when reading scroll direction.
const DIR_THRESHOLD = 6

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState(false)
  // Shown because you're at the top of the page or scrolling up; hidden on the way down.
  const [revealed, setRevealed] = useState(true)
  // True only while the bar still sits over a page's dark full-bleed hero.
  const [overHero, setOverHero] = useState(true)
  const lastY = useRef(0)

  useEffect(() => {
    // Pages without a [data-hero] section have light content right under the bar,
    // so it goes solid from the very top.
    const heroDepth = () => {
      const hero = document.querySelector('[data-hero]')
      return hero ? hero.offsetTop + hero.offsetHeight - BAR_H : 0
    }

    const sync = () => {
      const y = window.scrollY
      setOverHero(y < heroDepth())
      if (y <= BAR_H) setRevealed(true)
      else if (y < lastY.current - DIR_THRESHOLD) setRevealed(true)
      else if (y > lastY.current + DIR_THRESHOLD) setRevealed(false)
      if (Math.abs(y - lastY.current) > DIR_THRESHOLD || y <= BAR_H) lastY.current = y
    }

    lastY.current = window.scrollY
    sync()
    window.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', sync)
    return () => {
      window.removeEventListener('scroll', sync)
      window.removeEventListener('resize', sync)
    }
  }, [pathname])

  // Retracts on the way down; hovering the top edge or scrolling up brings it back.
  const retracted = !revealed && !hovered && !open

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        // Shrunk to a thin strip while retracted so it only catches the top-edge hover
        // instead of swallowing clicks on the page underneath.
        height: retracted ? '14px' : `${BAR_H}px`,
      }}
    >
    <header
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: `${BAR_H}px`,
        transform: retracted ? 'translateY(-100%)' : 'translateY(0)',
        // Transparent glass over the hero; solid everywhere else.
        background: overHero ? 'rgba(9,7,26,0.82)' : '#141033',
        backdropFilter: overHero ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: overHero ? 'blur(16px)' : 'none',
        borderBottom: `1px solid ${overHero ? 'rgba(123,121,255,0.14)' : 'rgba(123,121,255,0.22)'}`,
        boxShadow: overHero ? 'none' : '0 10px 30px rgba(0,0,0,0.45)',
        transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        className="px-6 md:px-12"
      >
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0, lineHeight: 0 }}>
          <img
            src="/groundwork-fulllogo.png"
            alt="Groundwork"
            style={{ height: '36px', width: 'auto', display: 'block', verticalAlign: 'middle' }}
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
          <span
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '8px',
              fontSize: '20px',
              fontWeight: 800,
              color: '#a78bfa',
            }}
          >
            Groundwork
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex" style={{ gap: '32px', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              style={({ isActive }) => ({
                fontSize: '14px',
                fontWeight: isActive ? 600 : 500,
                color: isActive ? '#a78bfa' : 'rgba(221,214,254,0.72)',
                textDecoration: 'none',
                transition: 'color 0.2s',
                padding: '4px 0',
              })}
              onMouseEnter={(e) => { if (!e.currentTarget.classList.contains('active')) e.currentTarget.style.color = '#a78bfa' }}
              onMouseLeave={(e) => { if (!e.currentTarget.classList.contains('active')) e.currentTarget.style.color = 'rgba(221,214,254,0.72)' }}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex" style={{ alignItems: 'center' }}>
          <Link
            to="/partner"
            style={{
              background: 'linear-gradient(135deg, #7b79ff 0%, #9b79ff 100%)',
              color: 'white',
              clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
              padding: '11px 24px',
              fontWeight: 700,
              fontSize: '14px',
              textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(123,121,255,0.45)',
              transition: 'all 0.25s ease',
              display: 'inline-block',
              position: 'relative',
              overflow: 'hidden',
              animation: 'pulseGlow 3s ease-in-out infinite',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = '0 12px 36px rgba(123,121,255,0.7)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(123,121,255,0.45)'
            }}
          >
            <span className="btn-shimmer-inner" />
            Partner With Us
          </Link>
        </div>

        {/* Mobile hamburger — 44px touch target */}
        <button
          className="flex md:hidden"
          onClick={() => setOpen(!open)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '10px',
            color: 'rgba(221,214,254,0.85)',
          }}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 12h18" strokeLinecap="round" />
                <path d="M3 6h18" strokeLinecap="round" />
                <path d="M3 18h18" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              background: 'rgba(9,7,26,0.96)',
              padding: '24px',
              borderBottom: '1px solid rgba(123,121,255,0.14)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            }}
            className="md:hidden"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                style={({ isActive }) => ({
                  display: 'block',
                  padding: '14px 0',
                  fontSize: '15px',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#a78bfa' : 'rgba(221,214,254,0.75)',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(123,121,255,0.12)',
                })}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/partner"
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                position: 'relative',
                overflow: 'hidden',
                marginTop: '16px',
                background: 'linear-gradient(135deg, #7b79ff 0%, #9b79ff 100%)',
                color: 'white',
                clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
                padding: '11px 24px',
                fontWeight: 700,
                fontSize: '14px',
                textDecoration: 'none',
                textAlign: 'center',
                boxShadow: '0 8px 24px rgba(123,121,255,0.45)',
              }}
            >
              <span className="btn-shimmer-inner" />
              Partner With Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </div>
  )
}
