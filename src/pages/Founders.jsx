import { motion } from 'framer-motion'

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

const founders = [
  { name: 'Avin Agrawal', photo: '/founder-avin.jpg', initials: 'AA', quote: "I grew up assuming everyone heard the same dinner-table conversations about money, risk, and building something from nothing. They don't. The first time I watched a kid realize they could actually sell something they made, it clicked for me — that spark isn't rare, the access to it is. Groundwork exists to put that access in the hands of the kids who'd never otherwise get it." },
  { name: 'Ishaan Thakur', photo: '/founder-ishaan.jpg', initials: 'IT', quote: "Every program I'd seen taught kids about business and then sent them home with a worksheet and a certificate. None of them ended with a kid actually getting paid. We built Groundwork around the only proof that really matters — real money, earned by a real teenager doing real work. If they don't get paid, we haven't done our job yet." },
]

export default function Founders() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: '120px', paddingBottom: '80px', background: 'radial-gradient(ellipse 80% 50% at 20% 0%, rgba(123,121,255,0.13) 0%, transparent 55%), linear-gradient(180deg, #f5f3ff 0%, white 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="px-6 md:px-12">
          <motion.div {...fadeUp()}>
            <KickerRule label="The People Behind It" />
            <h1>Meet the Founders</h1>
            <p style={{ fontSize: '18px', color: '#3d3a52', marginTop: '16px' }}>
              Groundwork was built by two students who saw the gap firsthand.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ background: 'white', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="px-6 md:px-12">
          {/* Founder photos */}
          <div style={{ display: 'grid', gap: '48px', justifyItems: 'center', marginBottom: '80px' }} className="grid-cols-1 md:grid-cols-2">
            {founders.map((founder, i) => (
              <motion.div key={founder.name} {...fadeUp(i * 0.15)} style={{ textAlign: 'center' }}>
                {/* Gradient ring photo */}
                <div style={{ position: 'relative', display: 'inline-block', marginBottom: '16px' }}>
                  <div style={{ width: '200px', height: '200px', borderRadius: '50%', background: 'linear-gradient(135deg, #7b79ff, #b683d6, #5555a2)', padding: '3px', display: 'inline-block' }}>
                    <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', background: '#ddd6fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img
                        src={founder.photo}
                        alt={founder.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={e => {
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'flex'
                        }}
                      />
                      <span style={{ display: 'none', fontSize: '36px', fontWeight: 700, color: '#9c9cd1', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        {founder.initials}
                      </span>
                    </div>
                  </div>
                  {/* Floating role badge */}
                  <div style={{ position: 'absolute', bottom: '-4px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #7b79ff, #5555a2)', borderRadius: '20px', padding: '4px 14px', whiteSpace: 'nowrap', boxShadow: '0 4px 12px rgba(123,121,255,0.4)' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'white', letterSpacing: '0.05em' }}>Co-Founder</span>
                  </div>
                </div>
                <h2 style={{ marginBottom: '4px', marginTop: '12px' }}>{founder.name}</h2>
                <p style={{ fontSize: '15px', color: '#5555a2' }}>Co-Founder, Groundwork</p>
              </motion.div>
            ))}
          </div>

          {/* Why We Started */}
          <KickerRule label="In Their Words" />
          <h2 style={{ marginBottom: '32px' }}>Why We Started This</h2>
          <div style={{ display: 'grid', gap: '24px', marginBottom: '64px' }} className="grid-cols-1 md:grid-cols-2">
            {founders.map((founder, i) => (
              <motion.div
                key={founder.name}
                {...fadeUp(i * 0.15)}
                className="gw-card" style={{ background: '#f5f3ff', borderLeft: '4px solid #7b79ff', borderRadius: '12px', padding: '32px 40px' }}
              >
                <p style={{ fontSize: '17px', fontStyle: 'italic', color: '#3d3a52', lineHeight: 1.8 }}>
                  {founder.quote}
                </p>
                <p style={{ fontSize: '14px', fontWeight: 700, color: '#1a1333', marginTop: '16px' }}>
                  — {founder.name}
                </p>
              </motion.div>
            ))}
          </div>

          {/* What We're Building Toward */}
          <KickerRule label="What's Next" />
          <motion.div
            {...fadeUp(0.1)}
            style={{ background: '#f5f3ff', borderRadius: '16px', padding: '48px' }}
          >
            <h2 style={{ marginBottom: '16px' }}>What We're Building Toward</h2>
            <p style={{ maxWidth: '640px' }}>
              Avin and Ishaan are currently focused on securing Groundwork's first named school and
              hospital partners in the Dallas-Fort Worth area, launching the inaugural Earning Track
              cohort, and completing the 501(c)(3) filing process. If you want to support them
              directly — reach out.
            </p>
            <a
              href="mailto:contact@groundworkinitiative.com"
              style={{
                display: 'inline-block',
                position: 'relative',
                overflow: 'hidden',
                marginTop: '24px',
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
              Reach Out
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
