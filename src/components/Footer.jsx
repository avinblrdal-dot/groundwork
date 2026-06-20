import { Link } from 'react-router-dom'

const exploreLinks = [
  { label: 'Home', to: '/' },
  { label: 'Programs', to: '/programs' },
  { label: 'Founders', to: '/founders' },
  { label: 'Impact', to: '/impact' },
  { label: 'Partner With Us', to: '/partner' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#1a1333', color: 'white', borderTop: '4px solid #7b79ff' }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
        className="px-6 md:px-12 py-12 md:py-16"
      >
        {/* Top 3 columns */}
        <div
          style={{ display: 'grid', gap: '48px', marginBottom: '48px' }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {/* Column 1 — Brand */}
          <div>
            <img
              src="/groundwork-fulllogo.png"
              alt="Groundwork"
              style={{
                maxHeight: '36px',
                display: 'block',
                filter: 'brightness(0) invert(1)',
              }}
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'block'
              }}
            />
            <span
              style={{
                display: 'none',
                fontSize: '20px',
                fontWeight: 800,
                color: 'white',
              }}
            >
              Groundwork
            </span>
            <p
              style={{
                fontSize: '14px',
                color: '#ddd6fe',
                marginTop: '16px',
                lineHeight: 1.6,
              }}
            >
              Building Opportunity From the Ground Up.
            </p>
            <p style={{ fontSize: '14px', color: '#ddd6fe', marginTop: '8px' }}>
              Frisco, Texas
            </p>
            <p style={{ fontSize: '13px', color: '#ddd6fe', marginTop: '4px' }}>
              501(c)(3) in formation
            </p>
          </div>

          {/* Column 2 — Explore */}
          <div>
            <p
              style={{
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: '#ddd6fe',
                fontWeight: 600,
                marginBottom: '16px',
              }}
            >
              Explore
            </p>
            {exploreLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  display: 'block',
                  fontSize: '14px',
                  color: '#ddd6fe',
                  textDecoration: 'none',
                  marginBottom: '10px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#ddd6fe')}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Column 3 — Connect */}
          <div>
            <p
              style={{
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: '#ddd6fe',
                fontWeight: 600,
                marginBottom: '16px',
              }}
            >
              Connect
            </p>
            {[
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/groundwork.foundation/',
                text: '@groundwork.foundation',
              },
              {
                label: 'TikTok',
                href: 'https://tiktok.com/@groundwork.foundation',
                text: '@groundwork.foundation',
              },
              {
                label: 'Email',
                href: 'mailto:help.groundwork@gmail.com',
                text: 'help.groundwork@gmail.com',
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  fontSize: '14px',
                  color: '#ddd6fe',
                  textDecoration: 'none',
                  marginBottom: '10px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#ddd6fe')}
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <p style={{ fontSize: '13px', color: 'rgba(221,214,254,0.6)' }}>
            © 2025 Groundwork. All rights reserved.
          </p>
          <p style={{ fontSize: '13px', color: 'rgba(221,214,254,0.6)' }}>
            A student-led nonprofit.
          </p>
        </div>
      </div>
    </footer>
  )
}
