import { motion } from 'framer-motion'
import { Building2, Handshake, Globe } from 'lucide-react'

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

const partnerCards = [
  {
    icon: Building2,
    title: 'Schools & Hospitals',
    body: 'We distribute VentureKits directly into Title I classrooms and pediatric wards through institutional partnerships. No cost to participants or families.',
    btnLabel: 'Get in Touch',
    href: 'mailto:help.groundwork@gmail.com?subject=School%2FHospital%20Partnership%20Inquiry',
  },
  {
    icon: Handshake,
    title: 'Corporate Partners',
    body: 'Support kit production, cohort funding, or chapter expansion. Partnership structures are flexible and built around your CSR priorities and reporting requirements.',
    btnLabel: 'Get in Touch',
    href: 'mailto:help.groundwork@gmail.com?subject=Corporate%20Partnership%20Inquiry',
  },
  {
    icon: Globe,
    title: 'Start a Chapter',
    body: "Student founders in new cities handle local kit assembly, distribution, and cohort recruitment under Groundwork's curriculum and brand standards.",
    btnLabel: 'Apply',
    href: 'mailto:help.groundwork@gmail.com?subject=Chapter%20Application',
  },
]

const roles = [
  {
    title: 'Chapter Founder',
    body: "Launch and run a Groundwork chapter in your city. You'll recruit participants, run cohorts, and own your local impact numbers.",
  },
  {
    title: 'Cohort Mentor',
    body: 'Guide a group of 4–6 teenagers through the 8-week Earning Track. No business degree required — just the willingness to show up and push.',
  },
  {
    title: 'Operations & Growth',
    body: "Help build Groundwork's curriculum, outreach, fundraising, or brand. Remote-friendly. Real responsibility.",
  },
]

export default function Partner() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: '120px', paddingBottom: '80px', background: 'radial-gradient(ellipse 80% 50% at 20% 0%, rgba(123,121,255,0.13) 0%, transparent 55%), linear-gradient(180deg, #f5f3ff 0%, white 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="px-6 md:px-12">
          <motion.div {...fadeUp()}>
            <KickerRule label="Get Involved" />
            <h1>Bring Groundwork to Your Community</h1>
            <p style={{ fontSize: '18px', color: '#3d3a52', marginTop: '16px', maxWidth: '580px' }}>
              We partner with schools, hospitals, corporations, and student leaders to get
              VentureKits distributed and Earning Track cohorts running.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ background: 'white', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="px-6 md:px-12">
          {/* Partner cards */}
          <KickerRule label="Partnership Types" />
          <div style={{ display: 'grid', gap: '24px', marginBottom: '80px' }} className="grid-cols-1 md:grid-cols-3">
            {partnerCards.map((card, i) => (
              <motion.div
                key={card.title}
                {...fadeUp(i * 0.1)}
                className="gw-card" style={{ background: 'white', border: '1px solid #ddd6fe', borderRadius: '16px', padding: '40px' }}
              >
                <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(221,214,254,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <card.icon size={22} color="#5555a2" strokeWidth={1.5} />
                </div>
                <h3 style={{ marginBottom: '12px' }}>{card.title}</h3>
                <p>{card.body}</p>
                <a
                  href={card.href}
                  style={{
                    display: 'inline-block',
                    border: '1.5px solid #5555a2',
                    color: '#5555a2',
                    background: 'transparent',
                    borderRadius: '4px',
                    padding: '12px 24px',
                    fontWeight: 600,
                    fontSize: '15px',
                    textDecoration: 'none',
                    marginTop: '20px',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.background = 'rgba(85,85,162,0.04)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  {card.btnLabel}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Join the Team */}
          <motion.div {...fadeUp(0.1)}>
            <KickerRule label="Join the Team" />
            <h2 style={{ textAlign: 'center', marginBottom: '12px' }}>Join the Team</h2>
            <p style={{ fontSize: '16px', color: '#3d3a52', maxWidth: '560px', margin: '0 auto 40px', textAlign: 'center' }}>
              Groundwork runs on student leaders. Whether you want to mentor, run a chapter, or
              help build the organization — there's a role for you.
            </p>
            <div style={{ display: 'grid', gap: '24px', marginBottom: '40px', position: 'relative' }} className="grid-cols-1 md:grid-cols-3">
              <div style={{ position: 'absolute', top: '-24px', right: '10%', width: '8px', height: '8px', borderRadius: '50%', background: '#7b79ff', opacity: 0.4, pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: '-16px', left: '20%', width: '6px', height: '6px', borderRadius: '50%', background: '#b683d6', opacity: 0.5, pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', top: '30%', right: '-8px', width: '10px', height: '10px', borderRadius: '50%', background: '#9c9cd1', opacity: 0.35, pointerEvents: 'none' }} />
              {roles.map((role, i) => (
                <motion.div
                  key={role.title}
                  {...fadeUp(i * 0.1)}
                  style={{ background: '#f5f3ff', borderLeft: '3px solid #7b79ff', borderRadius: '12px', padding: '28px' }}
                >
                  <h3 style={{ marginBottom: '10px' }}>{role.title}</h3>
                  <p>{role.body}</p>
                </motion.div>
              ))}
            </div>
            <div style={{ textAlign: 'center' }}>
              <a
                href="mailto:help.groundwork@gmail.com?subject=Leadership%2FVolunteer%20Application"
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
                Apply to Get Involved
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
