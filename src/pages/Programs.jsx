import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Package, Users, DollarSign, ShieldCheck, Clock, Calendar, ArrowRight } from 'lucide-react'

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

function IconWrap({ children, dark = false }) {
  return (
    <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: dark ? 'rgba(255,255,255,0.12)' : 'rgba(221,214,254,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      {children}
    </div>
  )
}

const fadeUp = (delay = 0) => ({
  initial: { y: 32, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
  viewport: { once: true },
})

const pipelineSteps = [
  { num: '01', icon: Package, label: 'Open a VentureKit', sub: "Where there's a need" },
  { num: '02', icon: Users, label: 'Join the Earning Track', sub: "Where there's readiness" },
  { num: '03', icon: DollarSign, label: 'Earn Your First Paycheck', sub: 'The only finish line that counts' },
]

export default function Programs() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: '120px', paddingBottom: '80px', background: 'radial-gradient(ellipse 80% 50% at 20% 0%, rgba(123,121,255,0.13) 0%, transparent 55%), linear-gradient(180deg, #f5f3ff 0%, white 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="px-6 md:px-12">
          <motion.div {...fadeUp()}>
            <KickerRule label="How It Works" />
            <h1>
              From First Concept to{' '}
              <span style={{ background: 'linear-gradient(135deg, #7b79ff 0%, #b683d6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                First Paycheck.
              </span>
            </h1>
            <p style={{ fontSize: '18px', color: '#3d3a52', marginTop: '16px', maxWidth: '560px' }}>
              Two programs. One mission. No kid left at the starting line.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pipeline strip */}
      <section style={{ paddingBottom: '80px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="px-6 md:px-12">
          <motion.div
            {...fadeUp(0.1)}
            style={{ background: 'rgba(221,214,254,0.3)', borderRadius: '16px', padding: '48px', marginBottom: '64px' }}
          >
            <KickerRule label="The Pipeline" />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: 0, flexWrap: 'wrap' }}>
              {pipelineSteps.map((step, i) => (
                <>
                  <div
                    key={step.label}
                    style={{ textAlign: 'center', flex: '1', minWidth: '160px', padding: '0 8px', position: 'relative', overflow: 'hidden' }}
                  >
                    {/* Ghost numeral */}
                    <div style={{
                      position: 'absolute', top: '-8px', right: '8px',
                      fontSize: '80px', fontWeight: 800,
                      color: 'rgba(221,214,254,0.45)',
                      lineHeight: 1, userSelect: 'none', pointerEvents: 'none', zIndex: 0,
                    }}>
                      {step.num}
                    </div>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(123,121,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                        <step.icon size={22} color="#5555a2" strokeWidth={1.5} />
                      </div>
                      <p style={{ fontSize: '16px', fontWeight: 700, color: '#1a1333', marginTop: '0' }}>{step.label}</p>
                      <p style={{ fontSize: '13px', color: '#5555a2', marginTop: '6px' }}>{step.sub}</p>
                    </div>
                  </div>
                  {i < 2 && (
                    <div
                      key={`arrow-${i}`}
                      style={{ alignSelf: 'center', color: '#7b79ff', fontSize: '28px', flexShrink: 0, padding: '0 8px' }}
                      className="hidden md:block"
                    >
                      →
                    </div>
                  )}
                </>
              ))}
            </div>
            <p style={{ textAlign: 'center', fontSize: '14px', color: '#5555a2', fontStyle: 'italic', marginTop: '32px' }}>
              A kid can do one and never the other. Both programs matter entirely on their own terms.
            </p>
          </motion.div>

          {/* VentureKits card */}
          <motion.div
            {...fadeUp(0.15)}
            className="gw-card grid-cols-1 md:grid-cols-2"
            style={{ borderRadius: '20px', overflow: 'hidden', marginBottom: '32px', display: 'grid' }}
          >
            <div style={{ background: 'white', padding: '48px' }}>
              <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.18em', color: '#5555a2', fontWeight: 600, marginBottom: '16px' }}>
                PROGRAM 01 · WHERE THERE'S A NEED
              </p>
              <h2 style={{ marginBottom: '20px' }}>VentureKits</h2>
              <p>
                Self-contained activity boxes that drop business fundamentals into any classroom
                or hospital ward. No WiFi. No facilitator expertise required. Completable in under
                an hour. Designed for the environments where this kind of exposure simply doesn't
                exist yet.
              </p>
              {[
                { icon: ShieldCheck, text: 'No expertise needed' },
                { icon: Package, text: 'Ships with facilitator guide' },
                { icon: Clock, text: 'Under one hour per kit' },
              ].map(f => (
                <div key={f.text} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '12px', fontSize: '14px', color: '#3d3a52' }}>
                  <IconWrap><f.icon size={14} color="#5555a2" strokeWidth={1.5} /></IconWrap>
                  <span>{f.text}</span>
                </div>
              ))}
              <div style={{ marginTop: '32px' }}>
                <Link
                  to="/programs/venturekits"
                  style={{
                    display: 'inline-block',
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, #7b79ff 0%, #9b79ff 100%)',
                    color: 'white',
                    clipPath: PRIMARY_BTN_CLIP,
                    padding: '13px 30px',
                    fontWeight: 700,
                    fontSize: '15px',
                    cursor: 'pointer',
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
                  Explore Kits & Order
                </Link>
              </div>
            </div>

            <div style={{ background: '#f5f3ff', padding: '48px' }}>
              <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.18em', color: '#5555a2', fontWeight: 600, marginBottom: '24px' }}>
                THE TWO KITS
              </p>
              <div>
                <p style={{ fontSize: '16px', fontWeight: 700, color: '#1a1333' }}>The Lemonade Kit</p>
                <p style={{ fontSize: '13px', color: '#5555a2', marginTop: '4px' }}>Pricing, value, and profit margin</p>
              </div>
              <div style={{ borderTop: '1px solid #ddd6fe', margin: '16px 0' }} />
              <div>
                <p style={{ fontSize: '16px', fontWeight: 700, color: '#1a1333' }}>The Business Maker</p>
                <p style={{ fontSize: '13px', color: '#5555a2', marginTop: '4px' }}>Problem-first business thinking</p>
              </div>
            </div>
          </motion.div>

          {/* Earning Track card */}
          <motion.div
            {...fadeUp(0.2)}
            className="gw-card grid-cols-1 md:grid-cols-2"
            style={{ borderRadius: '20px', overflow: 'hidden', display: 'grid' }}
          >
            <div style={{ background: 'linear-gradient(150deg, #5555a2 0%, #1e1854 100%)', padding: '48px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(123,121,255,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.18em', color: '#7b79ff', fontWeight: 600, marginBottom: '16px' }}>
                PROGRAM 02 · WHERE THERE'S READINESS
              </p>
              <h2 style={{ marginBottom: '20px', color: 'white' }}>The Earning Track</h2>
              <p style={{ color: 'rgba(221,214,254,0.85)' }}>
                An 8-week structured cohort for teenagers who are ready to earn. Participants find
                a real client, deliver real work, and collect real payment — using AI as a
                professional tool throughout. Cohorts run in groups of 4–6 with one mentor. There
                is no certificate. The program ends when money changes hands.
              </p>
              {[
                { icon: Calendar, text: '8 weeks, fixed schedule' },
                { icon: Users, text: 'Cohorts of 4–6' },
                { icon: DollarSign, text: 'Exit requirement: real money received' },
              ].map(f => (
                <div key={f.text} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '12px', fontSize: '14px', color: 'white' }}>
                  <IconWrap dark><f.icon size={14} color="white" strokeWidth={1.5} /></IconWrap>
                  <span>{f.text}</span>
                </div>
              ))}
              <div style={{ marginTop: '32px' }}>
                <Link
                  to="/programs/earning-track"
                  style={{
                    display: 'inline-block',
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, #7b79ff 0%, #9b79ff 100%)',
                    color: 'white',
                    clipPath: PRIMARY_BTN_CLIP,
                    padding: '13px 30px',
                    fontWeight: 700,
                    fontSize: '15px',
                    cursor: 'pointer',
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
                  See the 8-Week Journey
                </Link>
              </div>
            </div>

            <div style={{ position: 'relative', background: 'linear-gradient(150deg, #3a3480 0%, #1a1333 100%)', padding: '48px' }}>
              <div style={{ position: 'absolute', bottom: '-30px', left: '-30px', width: '160px', height: '160px', background: 'radial-gradient(circle, rgba(182,131,214,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.18em', color: '#7b79ff', fontWeight: 600, marginBottom: '24px' }}>
                  THE FOUR STAGES
                </p>
                {[
                  { num: '01', name: 'Find Your Niche', desc: 'Identify the intersection of your skills, interests, and a real market.' },
                  { num: '02', name: 'Find Your Prospect', desc: 'Start warm. Move cold.' },
                  { num: '03', name: 'Pitch & Close', desc: 'Ask directly. Handle objections.' },
                  { num: '04', name: 'Deliver & Get Paid', desc: 'Real work. Real invoice. Real money.' },
                ].map((stage, i) => (
                  <div
                    key={stage.num}
                    style={{ padding: '16px 0', borderTop: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none', position: 'relative', overflow: 'hidden' }}
                  >
                    <div style={{ position: 'absolute', top: '-4px', right: '-4px', fontSize: '56px', fontWeight: 800, color: 'rgba(221,214,254,0.08)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>
                      {stage.num}
                    </div>
                    <p style={{ fontSize: '12px', fontWeight: 700, color: '#7b79ff', margin: 0 }}>{stage.num}</p>
                    <p style={{ fontSize: '15px', fontWeight: 700, color: 'white', margin: '2px 0 4px' }}>{stage.name}</p>
                    <p style={{ fontSize: '13px', color: '#ddd6fe', margin: 0 }}>{stage.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <p style={{ textAlign: 'center', marginTop: '48px', fontSize: '15px', color: '#5555a2', fontStyle: 'italic' }}>
            VentureKits is Session 1. The Earning Track is Sessions 2 through 8. The first
            paycheck is the finish line.
          </p>
        </div>
      </section>
    </>
  )
}
