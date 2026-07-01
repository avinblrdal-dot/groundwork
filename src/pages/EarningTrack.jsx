import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Users, DollarSign } from 'lucide-react'

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

const fadeUp = (delay = 0) => ({
  initial: { y: 32, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
  viewport: { once: true },
})

const stages = [
  {
    num: '01',
    name: 'Find Your Niche',
    weeks: 'Weeks 1–2',
    body: "Identify the specific intersection of your skills, interests, and a real market. Vague ideas get pushed back until there's something concrete enough that a real person would pay for it.",
    gate: 'Gate: Offer defined with a clear deliverable, customer type, and real price.',
  },
  {
    num: '02',
    name: 'Find Your Prospect',
    weeks: 'Weeks 2–3',
    body: 'Map your network. Identify who to approach first using the warm-to-cold rule — always start with people who already trust you. At least one real prospect conversation must happen before advancing.',
    gate: 'Gate: One real conversation with a real potential client completed.',
  },
  {
    num: '03',
    name: 'Pitch & Close',
    weeks: 'Weeks 4–6',
    body: 'Learn to ask for the business directly and handle real objections. Make real pitches to real people — not just practice runs. Group role-play creates the accountability a solo participant never has.',
    gate: 'Gate: At least one real pitch made to a real person.',
  },
  {
    num: '04',
    name: 'Deliver & Get Paid',
    weeks: 'Weeks 6–8',
    body: 'Complete the work. Manage the client relationship. Collect payment and ask for a referral. AI is used to accelerate delivery — writing, design, research, content — but the client relationship stays human.',
    gate: 'Gate: Payment received.',
  },
]

export default function EarningTrack() {
  const [code, setCode] = useState('')
  const [error, setError] = useState(false)

  function handleUnlock() {
    const val = code.trim().toUpperCase()
    if (val === 'GROUNDWORK2025') {
      window.location.href = 'https://groundwork-learn-launch.base44.app'
    } else {
      setError(true)
    }
  }

  function handleCodeChange(e) {
    setCode(e.target.value)
    if (error) setError(false)
  }

  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: '120px',
          paddingBottom: '80px',
          background: 'radial-gradient(ellipse at top, #f5f3ff 0%, white 60%)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="px-6 md:px-12">
          <motion.div {...fadeUp()}>
            <KickerRule label="Program 02" />
            <h1>
              8 weeks. Real clients.{' '}
              <span style={{ background: 'linear-gradient(135deg, #7b79ff 0%, #b683d6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Real money.
              </span>
            </h1>
            <p style={{ fontSize: '18px', color: '#3d3a52', marginTop: '16px', maxWidth: '540px' }}>
              A cohort that takes a teenager from a vague idea to a paid invoice. The exit
              requirement is non-negotiable.
            </p>
          </motion.div>

          {/* Feature row */}
          <motion.div
            {...fadeUp(0.15)}
            style={{ display: 'flex', gap: '32px', marginTop: '40px', flexWrap: 'wrap' }}
          >
            {[
              { icon: Calendar, label: '8 weeks, fixed schedule' },
              { icon: Users, label: 'Cohorts of 4–6' },
              { icon: DollarSign, label: 'Exit: real money received' },
            ].map(f => (
              <div key={f.label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(221,214,254,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <f.icon size={16} color="#5555a2" strokeWidth={1.5} />
                </div>
                <span style={{ fontSize: '14px', color: '#3d3a52', fontWeight: 500 }}>{f.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section style={{ background: 'white', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="px-6 md:px-12">

          {/* Four Stages */}
          <KickerRule label="The Journey" />
          <h2 style={{ marginBottom: '32px' }}>The Four Stages</h2>
          <div style={{ display: 'grid', gap: '24px', marginBottom: '64px' }} className="grid-cols-1 md:grid-cols-2">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.num}
                {...fadeUp(i * 0.1)}
                className="gw-card"
                style={{
                  background: 'white',
                  border: '1px solid #ddd6fe',
                  borderTop: '3px solid #7b79ff',
                  borderRadius: '16px',
                  padding: '40px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Ghost numeral */}
                <div style={{
                  position: 'absolute',
                  top: '-16px',
                  right: '-8px',
                  fontSize: '120px',
                  fontWeight: 800,
                  color: 'rgba(221,214,254,0.25)',
                  lineHeight: 1,
                  userSelect: 'none',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}>
                  {stage.num}
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <p style={{ fontSize: '12px', color: '#5555a2', marginBottom: '4px' }}>{stage.weeks}</p>
                  <h3 style={{ marginBottom: '12px' }}>{stage.name}</h3>
                  <p>{stage.body}</p>
                  <div style={{ marginTop: '16px', borderTop: '1px solid #ddd6fe', paddingTop: '12px' }}>
                    <p style={{ fontSize: '12px', color: '#5555a2' }}>{stage.gate}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* AI Integration callout */}
          <motion.div
            {...fadeUp(0.1)}
            style={{
              background: '#f5f3ff',
              borderLeft: '4px solid #7b79ff',
              borderRadius: '12px',
              padding: '32px 40px',
              margin: '0 0 64px',
            }}
          >
            <h3 style={{ marginBottom: '12px' }}>AI as a Professional Tool</h3>
            <p>
              Participants use AI throughout the program the way a working professional would —
              for research, outreach drafts, pitch preparation, and delivery. The client
              relationship itself — the conversation, the ask, the close — stays entirely human.
            </p>
          </motion.div>

          {/* Exit requirement */}
          <motion.div
            {...fadeUp(0.1)}
            style={{
              background: 'linear-gradient(135deg, #5555a2 0%, #2d1b69 100%)',
              borderRadius: '14px',
              padding: '48px',
              textAlign: 'center',
              marginBottom: '64px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(123,121,255,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <p style={{ color: 'white', fontSize: '24px', fontWeight: 700, lineHeight: 1.4, position: 'relative', zIndex: 1 }}>
              Real money received from a real client for real work.
            </p>
            <p style={{ color: 'rgba(221,214,254,0.8)', fontSize: '16px', marginTop: '12px', position: 'relative', zIndex: 1 }}>
              No certificate. No participation trophy. The track is complete when payment changes hands.
            </p>
          </motion.div>

          {/* Apply section */}
          <motion.div
            {...fadeUp(0.1)}
            style={{ textAlign: 'center', padding: '64px 0', borderTop: '1px solid #ddd6fe' }}
          >
            <KickerRule label="Join a Cohort" />
            <h2>Want In the Next Cohort?</h2>
            <p style={{ fontSize: '16px', color: '#3d3a52', maxWidth: '480px', margin: '16px auto' }}>
              Cohorts are small and filled by application. Email us with your name and what you'd
              like to try selling.
            </p>
            <a
              href="mailto:contact@groundworkinitiative.com?subject=Earning%20Track%20Application"
              style={{
                display: 'inline-block',
                position: 'relative',
                overflow: 'hidden',
                marginTop: '24px',
                background: 'linear-gradient(135deg, #7b79ff 0%, #9b79ff 100%)',
                color: 'white',
                clipPath: PRIMARY_BTN_CLIP,
                padding: '14px 28px',
                fontWeight: 700,
                fontSize: '19px',
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(123,121,255,0.45)',
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
              Apply for Next Cohort
            </a>
          </motion.div>
        </div>
      </section>

      {/* Course access section */}
      <section
        style={{ background: '#f5f3ff', borderTop: '1px solid #ddd6fe', paddingTop: '80px', paddingBottom: '80px' }}
        className="px-6 md:px-12"
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <KickerRule label="Already Enrolled" />
          <h2 style={{ textAlign: 'center' }}>Access the Course Portal</h2>
          <p style={{ fontSize: '16px', color: '#3d3a52', textAlign: 'center', maxWidth: '440px', margin: '12px auto 0' }}>
            Already in a cohort? Enter your access code to unlock course materials.
          </p>

          <div style={{ background: 'white', border: '1px solid #ddd6fe', borderRadius: '16px', padding: '40px 48px', maxWidth: '440px', margin: '32px auto 0', boxShadow: '0 4px 24px rgba(85,85,162,0.08)' }}>
            <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.18em', color: '#5555a2', fontWeight: 600, marginBottom: '10px' }}>
              ACCESS CODE
            </p>
            <input
              type="text"
              value={code}
              onChange={handleCodeChange}
              placeholder="ENTER CODE"
              style={{
                width: '100%',
                padding: '14px 18px',
                border: `1.5px solid ${error ? '#ef4444' : '#ddd6fe'}`,
                borderRadius: '8px',
                fontSize: '16px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontFamily: "'DM Sans', sans-serif",
                color: '#1a1333',
                outline: 'none',
                transition: 'border-color 0.2s, box-shadow 0.2s',
                boxShadow: error ? '0 0 0 3px rgba(239,68,68,0.12)' : 'none',
              }}
              onFocus={e => {
                if (!error) e.target.style.boxShadow = '0 0 0 3px rgba(123,121,255,0.12)'
                if (!error) e.target.style.borderColor = '#7b79ff'
              }}
              onBlur={e => {
                if (!error) e.target.style.boxShadow = 'none'
                if (!error) e.target.style.borderColor = '#ddd6fe'
              }}
              onKeyDown={e => e.key === 'Enter' && handleUnlock()}
            />
            <button
              onClick={handleUnlock}
              style={{
                display: 'block',
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                marginTop: '14px',
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
              Unlock Course
            </button>
            {error && (
              <p style={{ color: '#ef4444', fontSize: '13px', textAlign: 'center', marginTop: '10px' }}>
                Incorrect code. Check with your mentor and try again.
              </p>
            )}
          </div>
          <p style={{ fontSize: '13px', color: '#5555a2', textAlign: 'center', marginTop: '20px' }}>
            Don't have a code yet? You'll receive it after your first Mentor Meeting.
          </p>
        </div>
      </section>
    </>
  )
}
