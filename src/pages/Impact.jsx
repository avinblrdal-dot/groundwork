import { motion } from 'framer-motion'
import { X } from 'lucide-react'

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

const goals = [
  '80%+ reflection card completion rate across all distributed kits',
  '3+ teenagers earn real money through the inaugural Earning Track cohort',
  '1+ partner institution requests a second kit order',
  '1 documented outcome in a participant\'s own words',
]

const notCounted = ['Volunteer Hours', 'Kits Assembled', 'Funds Raised in Isolation', 'Attendance']

export default function Impact() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: '120px', paddingBottom: '80px', background: 'radial-gradient(ellipse 80% 50% at 20% 0%, rgba(123,121,255,0.13) 0%, transparent 55%), linear-gradient(180deg, #f5f3ff 0%, white 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="px-6 md:px-12">
          <motion.div {...fadeUp()}>
            <KickerRule label="Our Philosophy" />
            <h1>We Measure What Matters</h1>
            <p style={{ fontSize: '18px', color: '#3d3a52', marginTop: '16px' }}>
              Activity metrics measure effort. Groundwork measures outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ background: 'white', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="px-6 md:px-12">
          {/* How We Define Success */}
          <motion.div {...fadeUp(0.1)} style={{ marginBottom: '80px' }}>
            <KickerRule label="Defining Success" />
            <h2 style={{ marginBottom: '40px' }}>How We Define Success</h2>
            <div style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {[
                {
                  heading: 'Outcomes Over Activity.',
                  body: "We don't count volunteer hours, kits assembled, or attendance. We count kits that changed how a kid thinks and participants who got paid.",
                },
                {
                  heading: 'The Kit-to-Paycheck Pipeline.',
                  body: 'A reflection card completed with genuine surprise is a success. A teenager holding a paid invoice is a success. Everything else is infrastructure.',
                },
                {
                  heading: 'Real Money is the Only Real Metric.',
                  body: "Until a client pays a participant, the Earning Track hasn't worked. That standard makes the program harder to run and the outcomes impossible to fake.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.heading}
                  {...fadeUp(i * 0.1)}
                  style={{ paddingLeft: '24px', borderLeft: '3px solid #7b79ff' }}
                >
                  <h3 style={{ marginBottom: '8px' }}>{item.heading}</h3>
                  <p style={{ margin: 0 }}>{item.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Year 1 Goals */}
          <motion.div {...fadeUp(0.1)} style={{ marginBottom: '80px' }}>
            <KickerRule label="Year 1" />
            <h2 style={{ marginBottom: '32px' }}>Year 1 Goals</h2>
            <div className="gw-card" style={{ background: 'linear-gradient(135deg, #5555a2 0%, #2d1b69 100%)', borderRadius: '20px', padding: '48px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '220px', height: '220px', background: 'radial-gradient(circle, rgba(123,121,255,0.35) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: '-30px', left: '-30px', width: '160px', height: '160px', background: 'radial-gradient(circle, rgba(182,131,214,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <div style={{ display: 'grid', gap: '24px', position: 'relative', zIndex: 1 }} className="grid-cols-1 md:grid-cols-2">
                {goals.map((goal, i) => (
                  <div
                    key={goal}
                    style={{ background: 'rgba(0,0,0,0.15)', borderRadius: '12px', padding: '28px', borderTop: '3px solid #7b79ff', position: 'relative', overflow: 'hidden' }}
                  >
                    {/* Ghost numeral */}
                    <div style={{ position: 'absolute', top: '-12px', right: '-4px', fontSize: '80px', fontWeight: 800, color: 'rgba(221,214,254,0.06)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>
                      0{i + 1}
                    </div>
                    <p style={{ color: '#ddd6fe', fontSize: '15px', position: 'relative', zIndex: 1 }}>{goal}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* What We Don't Count */}
          <motion.div {...fadeUp(0.1)}>
            <KickerRule label="What We Ignore" />
            <h2 style={{ marginBottom: '32px' }}>What We Don't Track</h2>
            <div style={{ display: 'grid', gap: '16px' }} className="grid-cols-2 md:grid-cols-4">
              {notCounted.map(item => (
                <div key={item} style={{ textAlign: 'center', background: '#fff5f5', border: '1px solid #fecaca', borderRadius: '14px', padding: '28px 16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                    <X size={18} color="#ef4444" strokeWidth={2.5} />
                  </div>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: '#3d3a52', margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '13px', color: '#5555a2', fontStyle: 'italic', textAlign: 'center', marginTop: '20px' }}>
              These measure effort, not outcomes.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
