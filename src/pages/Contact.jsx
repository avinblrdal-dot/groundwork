import { motion } from 'framer-motion'

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

const contactRows = [
  {
    label: 'EMAIL',
    content: <a href="mailto:help.groundwork@gmail.com" style={{ color: '#7b79ff', textDecoration: 'none', fontSize: '15px' }}>help.groundwork@gmail.com</a>,
  },
  {
    label: 'INSTAGRAM',
    content: <a href="https://www.instagram.com/groundwork.foundation/" target="_blank" rel="noopener noreferrer" style={{ color: '#7b79ff', textDecoration: 'none', fontSize: '15px' }}>@groundwork.foundation</a>,
  },
  {
    label: 'TIKTOK',
    content: <a href="https://tiktok.com/@groundwork.foundation" target="_blank" rel="noopener noreferrer" style={{ color: '#7b79ff', textDecoration: 'none', fontSize: '15px' }}>@groundwork.foundation</a>,
  },
  {
    label: 'LOCATION',
    content: <span style={{ fontSize: '15px', color: '#3d3a52' }}>Frisco, Texas</span>,
  },
  {
    label: 'STATUS',
    content: <span style={{ fontSize: '15px', color: '#3d3a52' }}>501(c)(3) in formation</span>,
  },
]

export default function Contact() {
  return (
    <section
      style={{
        paddingTop: '120px',
        paddingBottom: '120px',
        background: 'radial-gradient(ellipse 80% 50% at 20% 0%, rgba(123,121,255,0.13) 0%, transparent 55%), linear-gradient(180deg, #f5f3ff 0%, white 100%)',
        minHeight: '80vh',
      }}
    >
      <div
        style={{ maxWidth: '560px', margin: '0 auto', padding: '0 24px' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <KickerRule label="Let's Talk" />
          <h1>Get in Touch</h1>
          <p style={{ fontSize: '18px', color: '#3d3a52', marginTop: '16px' }}>
            We're based in Frisco, Texas and respond to every email.
          </p>

          <div
            className="gw-card"
            style={{
              background: 'white',
              border: '1px solid #ddd6fe',
              borderRadius: '16px',
              padding: '40px',
              marginTop: '40px',
            }}
          >
            {contactRows.map((row, i) => (
              <div
                key={row.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px 0',
                  borderBottom: i < contactRows.length - 1 ? '1px solid #ddd6fe' : 'none',
                }}
              >
                <p
                  style={{
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: '#5555a2',
                    fontWeight: 600,
                    minWidth: '90px',
                    flexShrink: 0,
                    margin: 0,
                  }}
                >
                  {row.label}
                </p>
                {row.content}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
