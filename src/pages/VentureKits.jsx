import { useState } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Package, Clock } from 'lucide-react'

const PRIMARY_BTN_CLIP = 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)'

function KickerRule({ label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
      <div style={{ width: '40px', height: '1px', background: '#7b79ff', flexShrink: 0 }} />
      <span style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#9c9cd1' }}>
        {label}
      </span>
    </div>
  )
}

const inputStyle = {
  border: '1.5px solid #ddd6fe',
  borderRadius: '8px',
  padding: '12px 16px',
  fontSize: '15px',
  width: '100%',
  fontFamily: "'DM Sans', sans-serif",
  color: '#1a1333',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
}

function FormInput({ label, ...props }) {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ marginBottom: '16px' }}>
      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#5555a2', marginBottom: '6px' }}>
        {label}
      </label>
      <input
        {...props}
        style={{ ...inputStyle, borderColor: focused ? '#7b79ff' : '#ddd6fe', boxShadow: focused ? '0 0 0 3px rgba(123,121,255,0.12)' : 'none' }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  )
}

function FormTextarea({ label, ...props }) {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ marginBottom: '16px' }}>
      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#5555a2', marginBottom: '6px' }}>
        {label}
      </label>
      <textarea
        {...props}
        style={{ ...inputStyle, resize: 'vertical', borderColor: focused ? '#7b79ff' : '#ddd6fe', boxShadow: focused ? '0 0 0 3px rgba(123,121,255,0.12)' : 'none' }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  )
}

const fadeUp = (delay = 0) => ({
  initial: { y: 32, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
  viewport: { once: true },
})

const features = [
  { icon: ShieldCheck, title: 'No Expertise Needed', body: 'Teachers and volunteers facilitate from a one-page guide included in every box.' },
  { icon: Package, title: 'Fully Self-Contained', body: 'Everything needed is inside the box. No additional materials required.' },
  { icon: Clock, title: 'Under One Hour', body: 'Fits a class period, a hospital visit, or a single sitting anywhere.' },
]

export default function VentureKits() {
  const [form, setForm] = useState({
    name: '', email: '', org: '', role: '', qty: '', kits: [], notes: '',
  })

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setForm(prev => ({ ...prev, kits: checked ? [...prev.kits, value] : prev.kits.filter(k => k !== value) }))
    } else {
      setForm(prev => ({ ...prev, [name]: value }))
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent('VentureKits Order Request')
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nOrganization: ${form.org}\nRole: ${form.role}\nNumber of Kits: ${form.qty}\nKits Requested: ${form.kits.join(', ')}\n\nNotes:\n${form.notes}`)
    window.location.href = `mailto:contact@groundworkinitiative.com?subject=${subject}&body=${body}`
  }

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: '120px', paddingBottom: '80px', background: 'radial-gradient(ellipse at top, #f5f3ff 0%, white 60%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="px-6 md:px-12">
          <motion.div {...fadeUp()}>
            <KickerRule label="Program 01" />
            <h1>One kit. One concept. One hour.</h1>
            <p style={{ fontSize: '18px', color: '#3d3a52', marginTop: '16px', maxWidth: '560px' }}>
              Self-contained activity boxes that deliver business fundamentals anywhere — no WiFi,
              no expertise, no barriers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features row */}
      <section style={{ background: 'white', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="px-6 md:px-12">
          <motion.div
            {...fadeUp(0.1)}
            style={{ background: '#f5f3ff', borderRadius: '16px', padding: '48px', marginBottom: '64px', display: 'grid', gap: '32px' }}
            className="grid-cols-1 md:grid-cols-3"
          >
            {features.map(f => (
              <div key={f.title} style={{ textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(221,214,254,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <f.icon size={22} color="#5555a2" strokeWidth={1.5} />
                </div>
                <h3 style={{ marginBottom: '8px' }}>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </motion.div>

          {/* The Kits section */}
          <KickerRule label="What's Inside" />
          <h2 style={{ marginBottom: '32px' }}>The Kits</h2>
          <div style={{ display: 'grid', gap: '24px', marginBottom: '64px' }} className="grid-cols-1 md:grid-cols-2">
            {/* Kit 1 */}
            <motion.div
              {...fadeUp(0.1)}
              className="gw-card"
              style={{ background: 'white', border: '1px solid #ddd6fe', borderTop: '3px solid #7b79ff', borderRadius: '16px', padding: '40px' }}
            >
              <span style={{ display: 'inline-block', background: '#ddd6fe', color: '#5555a2', fontSize: '11px', borderRadius: '20px', padding: '4px 12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
                BUSINESS THINKING
              </span>
              <h3 style={{ marginBottom: '8px' }}>The Lemonade Kit</h3>
              <p style={{ fontSize: '14px', fontWeight: 700, color: '#7b79ff', marginBottom: '12px' }}>Pricing · Value · Profit Margin</p>
              <p>
                Kids run a simulated buying and selling game using cards and play currency. They
                leave understanding why things cost what they cost and how a business actually
                makes money.
              </p>
            </motion.div>

            {/* Kit 2 */}
            <motion.div
              {...fadeUp(0.15)}
              className="gw-card"
              style={{ background: 'white', border: '1px solid #ddd6fe', borderTop: '3px solid #b683d6', borderRadius: '16px', padding: '40px' }}
            >
              <span style={{ display: 'inline-block', background: 'rgba(182,131,214,0.15)', color: '#b683d6', fontSize: '11px', borderRadius: '20px', padding: '4px 12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
                ENTREPRENEURSHIP
              </span>
              <h3 style={{ marginBottom: '8px' }}>The Business Maker</h3>
              <p style={{ fontSize: '14px', fontWeight: 700, color: '#b683d6', marginBottom: '12px' }}>Problem · Idea · Business</p>
              <p style={{ marginBottom: '16px' }}>
                Every business idea in this kit starts with one question — what problem do I care
                about? Kids choose from five Problem Cards, pick the one closest to their experience,
                and build from there. No business experience needed. No math. Just a real problem
                and a booklet to start writing.
              </p>
              <div style={{ background: '#f5f3ff', borderLeft: '3px solid #7b79ff', borderRadius: '8px', padding: '20px 24px' }}>
                <p style={{ fontSize: '14px', fontWeight: 700, color: '#1a1333', marginBottom: '8px' }}>Step 1 — Pick Your Problem</p>
                <p style={{ fontSize: '14px', color: '#3d3a52' }}>
                  Spread the 5 Problem Cards out. Read each one. Pick the problem that feels most
                  personal — one you've seen in your community or that affects someone you know.
                  Then open the Business Maker Booklet and write down the issue and your business
                  name. The best businesses are built by people who genuinely care about what
                  they're solving.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Reflection card callout */}
          <motion.div
            {...fadeUp(0.1)}
            style={{ background: '#f5f3ff', borderLeft: '4px solid #7b79ff', borderRadius: '12px', padding: '32px 40px', margin: '0 0 64px' }}
          >
            <h3 style={{ marginBottom: '12px' }}>Every Kit Ends With a Reflection Card.</h3>
            <p>
              That's the primary outcome metric — not how many boxes shipped, but whether the kid
              who opened one had a thought they wouldn't have had otherwise.
            </p>
          </motion.div>

          {/* Order form */}
          <motion.div {...fadeUp(0.1)}>
            <KickerRule label="Request Kits" />
            <h2 style={{ marginBottom: '12px' }}>Order Kits for Your Group</h2>
            <p style={{ fontSize: '16px', color: '#3d3a52', marginBottom: '40px' }}>
              Tell us about your school, hospital, or community group. We'll be in touch within a
              few days.
            </p>
            <form onSubmit={handleSubmit} style={{ maxWidth: '640px' }}>
              <FormInput label="Your name" type="text" name="name" required value={form.name} onChange={handleChange} />
              <FormInput label="Email address" type="email" name="email" required value={form.email} onChange={handleChange} />
              <FormInput label="Organization name" type="text" name="org" required value={form.org} onChange={handleChange} />
              <FormInput label="Your role" type="text" name="role" required value={form.role} onChange={handleChange} />
              <FormInput label="Number of kits" type="number" name="qty" min="1" required value={form.qty} onChange={handleChange} />

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#5555a2', marginBottom: '10px' }}>
                  Which kits?
                </label>
                {['The Lemonade Kit', 'The Business Maker', 'Both kits'].map(kit => (
                  <label key={kit} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', cursor: 'pointer', fontSize: '15px', color: '#3d3a52' }}>
                    <input type="checkbox" value={kit} checked={form.kits.includes(kit)} onChange={handleChange} style={{ width: '16px', height: '16px', accentColor: '#7b79ff' }} />
                    {kit}
                  </label>
                ))}
              </div>

              <FormTextarea label="Additional notes" name="notes" rows={4} value={form.notes} onChange={handleChange} />

              <button
                type="submit"
                style={{
                  display: 'block',
                  position: 'relative',
                  overflow: 'hidden',
                  width: '100%',
                  background: 'linear-gradient(135deg, #7b79ff 0%, #9b79ff 100%)',
                  color: 'white',
                  border: 'none',
                  clipPath: PRIMARY_BTN_CLIP,
                  padding: '14px 28px',
                  fontWeight: 700,
                  fontSize: '19px',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(123,121,255,0.45)',
                  fontFamily: "'DM Sans', sans-serif",
                  transition: 'all 0.25s ease',
                  animation: 'pulseGlow 3s ease-in-out infinite',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = '0 12px 36px rgba(123,121,255,0.7)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(123,121,255,0.45)'
                }}
              >
                <span className="btn-shimmer-inner" />
                Send Order Request
              </button>
              <p style={{ fontSize: '13px', color: '#5555a2', textAlign: 'center', marginTop: '16px' }}>
                Kits are provided at no cost to participants or families through our partner institutions.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  )
}
