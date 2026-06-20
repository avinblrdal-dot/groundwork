import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Programs', to: '/programs' },
  { label: 'Founders', to: '/founders' },
  { label: 'Impact', to: '/impact' },
  { label: 'Partner', to: '/partner' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: '72px',
        background: 'rgba(9,7,26,0.82)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(123,121,255,0.14)',
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
  )
}
