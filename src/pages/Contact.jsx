import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Mail, MapPin, Send, Check } from 'lucide-react'

function TikTokIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-2.59-2.59c.27 0 .53.04.78.12v-3.2a5.78 5.78 0 1 0 4.9 5.71V8.99a7.3 7.3 0 0 0 4.26 1.36V7.25a4.28 4.28 0 0 1-3.2-1.43z" />
    </svg>
  )
}

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function KickerRule({ label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
      <div style={{ width: '40px', height: '1px', background: '#7b79ff', flexShrink: 0 }} />
      <span style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#9c9cd1' }}>
        {label}
      </span>
    </div>
  )
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const shouldReduce = useReducedMotion()
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' })
  const [touched, setTouched] = useState({})
  const [sent, setSent] = useState(false)

  const errors = {
    firstName: form.firstName.trim() ? '' : 'Please enter your name',
    email: !form.email.trim() ? 'Please enter your email' : (EMAIL_RE.test(form.email.trim()) ? '' : 'Enter a valid email address'),
    message: form.message.trim() ? '' : 'Please enter a message',
  }
  const isValid = !errors.firstName && !errors.email && !errors.message

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const blur = (k) => () => setTouched((t) => ({ ...t, [k]: true }))
  const showErr = (k) => touched[k] && errors[k]

  const handleSubmit = (e) => {
    e.preventDefault()
    setTouched({ firstName: true, email: true, message: true })
    if (!isValid) return
    const subject = `Groundwork inquiry — ${form.firstName} ${form.lastName}`.trim()
    const body =
      `Name: ${form.firstName} ${form.lastName}\n` +
      `Email: ${form.email}\n` +
      (form.phone ? `Phone: ${form.phone}\n` : '') +
      `\n${form.message}\n`
    window.location.href = `mailto:contact@groundworkinitiative.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const fade = (delay = 0) =>
    shouldReduce
      ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
      : { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, ease: 'easeOut', delay } }

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(170deg, #06041a 0%, #0d0926 55%, #0a0720 100%)',
        paddingTop: '128px',
        paddingBottom: '110px',
        minHeight: '100vh',
      }}
    >
      {/* Aurora glow rising from the bottom */}
      <div style={{ position: 'absolute', left: '50%', bottom: '-30%', transform: 'translateX(-50%)', width: '120%', height: '70%', background: 'radial-gradient(ellipse 50% 60% at 50% 100%, rgba(123,121,255,0.45) 0%, rgba(91,107,214,0.22) 38%, transparent 70%)', filter: 'blur(20px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '55%', height: '70%', background: 'radial-gradient(ellipse 60% 60% at 60% 30%, rgba(182,131,214,0.18) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }} className="px-6 md:px-12">
        <div style={{ display: 'grid', gap: '56px', alignItems: 'center' }} className="grid-cols-1 md:grid-cols-2">

          {/* LEFT — pitch + direct contact */}
          <motion.div {...fade()}>
            <KickerRule label="Let's Talk" />
            <h1 style={{ color: '#ffffff', maxWidth: '460px' }}>
              Ready to build opportunity{' '}
              <span style={{ background: 'linear-gradient(125deg, #a78bfa 0%, #c9a8ff 55%, #e8d2ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                together?
              </span>
            </h1>
            <p style={{ fontSize: '18px', color: 'rgba(221,214,254,0.72)', marginTop: '20px', maxWidth: '440px', lineHeight: 1.7 }}>
              Whether you're a school, hospital, partner, or future volunteer — tell us what you have in mind and we'll get back to you.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '36px' }}>
              <a href="mailto:contact@groundworkinitiative.com" className="gw-glass-pill">
                <Mail size={16} strokeWidth={1.75} /> contact@groundworkinitiative.com
              </a>
              <span className="gw-glass-pill" style={{ cursor: 'default' }}>
                <MapPin size={16} strokeWidth={1.75} /> Frisco, Texas
              </span>
            </div>

            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              <a className="gw-social-btn" href="https://www.instagram.com/groundwork.foundation/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon size={18} />
              </a>
              <a className="gw-social-btn" href="https://tiktok.com/@groundwork.foundation" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <TikTokIcon size={18} />
              </a>
            </div>

            <p style={{ fontSize: '13px', color: 'rgba(221,214,254,0.45)', marginTop: '28px' }}>
              501(c)(3) in formation · We respond to every message.
            </p>
          </motion.div>

          {/* RIGHT — glass contact form */}
          <motion.div {...fade(0.15)}>
            <form
              onSubmit={handleSubmit}
              noValidate
              style={{
                background: 'rgba(255,255,255,0.045)',
                backdropFilter: 'blur(22px)',
                WebkitBackdropFilter: 'blur(22px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '22px',
                padding: '36px',
                boxShadow: '0 30px 80px rgba(0,0,0,0.35)',
              }}
            >
              <div style={{ display: 'grid', gap: '18px', gridTemplateColumns: '1fr 1fr' }}>
                <div>
                  <label htmlFor="firstName" style={labelStyle}>First Name <span style={{ color: '#b683d6' }}>*</span></label>
                  <input id="firstName" name="firstName" className="gw-field" type="text" autoComplete="given-name"
                    value={form.firstName} onChange={set('firstName')} onBlur={blur('firstName')}
                    aria-invalid={!!showErr('firstName')} placeholder="Jane" />
                  {showErr('firstName') && <p style={errStyle}>{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" style={labelStyle}>Last Name</label>
                  <input id="lastName" name="lastName" className="gw-field" type="text" autoComplete="family-name"
                    value={form.lastName} onChange={set('lastName')} placeholder="Doe" />
                </div>
              </div>

              <div style={{ marginTop: '18px' }}>
                <label htmlFor="email" style={labelStyle}>E-mail <span style={{ color: '#b683d6' }}>*</span></label>
                <input id="email" name="email" className="gw-field" type="email" autoComplete="email"
                  value={form.email} onChange={set('email')} onBlur={blur('email')}
                  aria-invalid={!!showErr('email')} placeholder="you@example.com" />
                {showErr('email') && <p style={errStyle}>{errors.email}</p>}
              </div>

              <div style={{ marginTop: '18px' }}>
                <label htmlFor="phone" style={labelStyle}>Phone</label>
                <input id="phone" name="phone" className="gw-field" type="tel" autoComplete="tel"
                  value={form.phone} onChange={set('phone')} placeholder="Optional" />
              </div>

              <div style={{ marginTop: '18px' }}>
                <label htmlFor="message" style={labelStyle}>Message <span style={{ color: '#b683d6' }}>*</span></label>
                <textarea id="message" name="message" className="gw-field" rows={4}
                  value={form.message} onChange={set('message')} onBlur={blur('message')}
                  aria-invalid={!!showErr('message')} placeholder="Tell us how you'd like to get involved…"
                  style={{ minHeight: '120px', resize: 'vertical' }} />
                {showErr('message') && <p style={errStyle}>{errors.message}</p>}
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  marginTop: '26px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  background: 'linear-gradient(135deg, #7b79ff 0%, #9460e8 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '100px',
                  padding: '15px 28px',
                  fontWeight: 700,
                  fontSize: '15px',
                  fontFamily: 'inherit',
                  cursor: 'pointer',
                  boxShadow: '0 0 30px rgba(123,121,255,0.5)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 45px rgba(123,121,255,0.8)' }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(123,121,255,0.5)' }}
              >
                <Send size={16} strokeWidth={2} /> Send Message
              </button>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '18px', padding: '14px 16px', borderRadius: '12px', background: 'rgba(123,121,255,0.12)', border: '1px solid rgba(123,121,255,0.35)' }}
                >
                  <Check size={18} color="#a78bfa" strokeWidth={2.5} />
                  <p style={{ fontSize: '14px', color: '#ddd6fe', margin: 0 }}>
                    Your message is ready in your email app — hit send and we'll reply soon.
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const labelStyle = {
  display: 'block',
  fontSize: '13px',
  fontWeight: 600,
  color: 'rgba(221,214,254,0.85)',
  marginBottom: '8px',
}

const errStyle = {
  fontSize: '12px',
  color: '#ef6a8c',
  marginTop: '6px',
  marginBottom: 0,
}
