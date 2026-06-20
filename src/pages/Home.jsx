import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useInView, useReducedMotion } from 'framer-motion'
import { Package, Target, Building2, HeartPulse, ArrowRight } from 'lucide-react'

const PRIMARY_BTN_CLIP = 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)'

function IconBox({ icon: Icon, color = '#7b79ff', bg = 'rgba(221,214,254,0.3)', size = 20 }) {
  return (
    <div style={{
      width: '48px', height: '48px', borderRadius: '10px',
      background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
    }}>
      <Icon size={size} color={color} strokeWidth={1.5} />
    </div>
  )
}

function KickerRule({ label, center = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', justifyContent: center ? 'center' : 'flex-start' }}>
      <div style={{ width: '40px', height: '1px', background: '#7b79ff', flexShrink: 0 }} />
      <span style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#9c9cd1' }}>
        {label}
      </span>
      {center && <div style={{ width: '40px', height: '1px', background: '#7b79ff', flexShrink: 0 }} />}
    </div>
  )
}

function AngledDivider({ from, to }) {
  return (
    <div style={{ background: from, lineHeight: 0 }}>
      <svg viewBox="0 0 1440 72" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '72px' }}>
        <polygon points="0,72 1440,0 1440,72" fill={to} />
      </svg>
    </div>
  )
}

function BtnPrimary({ to, children, style: extraStyle = {} }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      to={to}
      style={{
        display: 'inline-block',
        position: 'relative',
        overflow: 'hidden',
        background: hovered
          ? 'linear-gradient(135deg, #6360e8 0%, #8860e8 100%)'
          : 'linear-gradient(135deg, #7b79ff 0%, #9b79ff 100%)',
        color: 'white',
        clipPath: PRIMARY_BTN_CLIP,
        padding: '13px 30px',
        fontWeight: 700,
        fontSize: '15px',
        textDecoration: 'none',
        boxShadow: hovered
          ? '0 12px 36px rgba(123,121,255,0.7), 0 0 50px rgba(182,131,214,0.25)'
          : '0 8px 24px rgba(123,121,255,0.45), 0 2px 8px rgba(123,121,255,0.3)',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'all 0.25s ease',
        animation: 'pulseGlow 3s ease-in-out infinite',
        cursor: 'pointer',
        ...extraStyle,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="btn-shimmer-inner" />
      {children}
    </Link>
  )
}

function BtnOutlined({ to, children, dark = false, style: extraStyle = {} }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      to={to}
      style={{
        display: 'inline-block',
        border: dark ? '1.5px solid rgba(221,214,254,0.38)' : '1.5px solid #5555a2',
        color: dark ? 'rgba(221,214,254,0.92)' : '#5555a2',
        background: hovered
          ? (dark ? 'rgba(221,214,254,0.08)' : 'rgba(85,85,162,0.06)')
          : 'transparent',
        borderRadius: '4px',
        padding: '13px 30px',
        fontWeight: 600,
        fontSize: '15px',
        textDecoration: 'none',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'all 0.25s ease',
        cursor: 'pointer',
        ...extraStyle,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Link>
  )
}


const steps = [
  { label: 'Exposure', sub: 'See it exist' },
  { label: 'Skills', sub: 'Learn the moves' },
  { label: 'Confidence', sub: 'Believe you can' },
  { label: 'Pitch', sub: 'Make the ask' },
  { label: 'Paycheck', sub: 'Get paid for real' },
]

const marqueeItems = [
  'VentureKits', 'Real Money', '8-Week Earning Track',
  'Title I Schools', 'Pediatric Wards', 'No Barriers',
  'First Paycheck', 'Real Clients', 'AI as a Tool',
  'Cohorts of 4–6', 'Frisco, Texas', 'No Certificate — Just Results',
]

const programStats = [
  { num: '8', unit: 'weeks', label: 'Earning Track cohort' },
  { num: '4–6', unit: 'kids', label: 'per cohort, max' },
  { num: '<1', unit: 'hour', label: 'per VentureKit session' },
  { num: '$0', unit: 'cost', label: 'to participants & families' },
]

function HeroBtnPrimary({ to, children }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      to={to}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        position: 'relative', overflow: 'hidden',
        background: hovered ? 'linear-gradient(135deg, #6360e8 0%, #7e5ce0 100%)' : 'linear-gradient(135deg, #7b79ff 0%, #9460e8 100%)',
        color: 'white', borderRadius: '100px',
        padding: '15px 34px', fontWeight: 700, fontSize: '15px',
        textDecoration: 'none',
        boxShadow: hovered ? '0 0 55px rgba(123,121,255,0.9), 0 0 110px rgba(123,121,255,0.4)' : '0 0 35px rgba(123,121,255,0.65), 0 0 70px rgba(123,121,255,0.28)',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'all 0.25s ease', cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="btn-shimmer-inner" />
      {children}
    </Link>
  )
}

function HeroBtnSecondary({ to, children }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      to={to}
      style={{
        display: 'inline-flex', alignItems: 'center',
        background: hovered ? 'rgba(221,214,254,0.1)' : 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(221,214,254,0.25)',
        color: 'rgba(221,214,254,0.92)', borderRadius: '100px',
        padding: '15px 34px', fontWeight: 600, fontSize: '15px',
        textDecoration: 'none',
        backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'all 0.25s ease', cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Link>
  )
}

function MarqueeStrip() {
  const doubled = [...marqueeItems, ...marqueeItems]
  return (
    <div style={{ background: '#1a1333', overflow: 'hidden', position: 'relative', borderTop: '1px solid rgba(123,121,255,0.15)', borderBottom: '1px solid rgba(123,121,255,0.15)' }}>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(to right, #1a1333, transparent)', zIndex: 1, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(to left, #1a1333, transparent)', zIndex: 1, pointerEvents: 'none' }} />
      <div style={{ display: 'flex', alignItems: 'center', animation: 'marquee 32s linear infinite', whiteSpace: 'nowrap', padding: '18px 0' }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '20px', paddingRight: '20px' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(221,214,254,0.65)', letterSpacing: '0.06em' }}>
              {item}
            </span>
            <span style={{ color: '#7b79ff', fontSize: '10px' }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

function TwoGapsSection() {
  const sectionRef = useRef(null)
  const svgRef = useRef(null)
  const [activeStep, setActiveStep] = useState(0)
  const isSvgInView = useInView(svgRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.75', 'end 0.25'],
  })

  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      setActiveStep(Math.min(steps.length, Math.floor(v * steps.length)))
    })
  }, [scrollYProgress])

  return (
    <section
      ref={sectionRef}
      id="two-gaps"
      style={{ position: 'relative', overflow: 'hidden', background: 'white', paddingTop: '96px', paddingBottom: '96px' }}
    >
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(123,121,255,0.07) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none', zIndex: 0 }} />

      <div ref={svgRef} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 'min(500px, 70vw)', pointerEvents: 'none', zIndex: 0 }}>
        <motion.svg viewBox="0 0 360 400" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}
          initial={{ opacity: 0 }} animate={isSvgInView ? { opacity: 0.1 } : { opacity: 0 }} transition={{ duration: 0.5 }}>
          <defs>
            <linearGradient id="tgGrad1" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#ddd6fe" /><stop offset="100%" stopColor="#9c9cd1" />
            </linearGradient>
            <linearGradient id="tgGrad2" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#9c9cd1" /><stop offset="100%" stopColor="#7b79ff" />
            </linearGradient>
            <linearGradient id="tgGrad3" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#7b79ff" /><stop offset="100%" stopColor="#5555a2" />
            </linearGradient>
          </defs>
          <path d="M 30 370 A 150 50 0 0 0 330 370" fill="none" stroke="#5555a2" strokeWidth="2" opacity="0.5" />
          {[
            { x: 20, y: 290, h: 80, grad: 'url(#tgGrad1)', delay: 0 },
            { x: 100, y: 230, h: 140, grad: 'url(#tgGrad2)', delay: 0.1 },
            { x: 180, y: 160, h: 210, grad: 'url(#tgGrad2)', delay: 0.2 },
            { x: 260, y: 80, h: 290, grad: 'url(#tgGrad3)', delay: 0.3 },
          ].map((b, i) => (
            <motion.rect key={i} x={b.x} y={b.y} width="60" height={b.h} fill={b.grad} rx="4"
              initial={{ scaleY: 0 }}
              animate={isSvgInView ? { scaleY: 1 } : { scaleY: 0 }}
              style={{ originX: `${b.x + 30}px`, originY: '370px' }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: b.delay }}
            />
          ))}
        </motion.svg>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }} className="px-6 md:px-12">
        <div style={{ marginBottom: '64px' }}>
          <KickerRule label="The Problem We Solve" />
          <h2>
            Two Gaps.{' '}
            <span style={{ background: 'linear-gradient(135deg, #5555a2 0%, #7b79ff 60%, #b683d6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>
              One Solution.
            </span>
          </h2>
          <p style={{ fontSize: '18px', color: '#3d3a52', marginTop: '12px' }}>
            The opportunity gap isn't just about access — it's about exposure and outcomes.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '64px' }} className="grid-cols-1 md:grid-cols-[160px_1fr]">
          {/* Sticky step timeline */}
          <div className="hidden md:block">
            <div style={{ position: 'sticky', top: 'calc(50vh - 150px)' }}>
              {steps.map((step, i) => {
                const isActive = i < activeStep
                return (
                  <div key={step.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '4px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ width: '14px', height: '14px', borderRadius: '50%', border: '2px solid', background: isActive ? '#7b79ff' : 'white', borderColor: isActive ? '#5555a2' : '#ddd6fe', transition: 'background 0.3s, border-color 0.3s', flexShrink: 0, boxShadow: isActive ? '0 0 0 4px rgba(123,121,255,0.15)' : 'none' }} />
                      {i < steps.length - 1 && (
                        <div style={{ width: '2px', height: '40px', marginTop: '4px', background: isActive ? 'linear-gradient(to bottom, #7b79ff, #5555a2)' : '#ddd6fe', transition: 'background 0.3s' }} />
                      )}
                    </div>
                    <div style={{ paddingBottom: '16px' }}>
                      <p style={{ fontSize: isActive ? '15px' : '12px', fontWeight: isActive ? 700 : 400, color: isActive ? '#1a1333' : '#9c9cd1', transition: 'font-size 0.3s, color 0.3s', margin: 0, lineHeight: 1.3 }}>{step.label}</p>
                      <p style={{ fontSize: '11px', color: '#9c9cd1', opacity: isActive ? 1 : 0.5, transition: 'opacity 0.3s', margin: 0 }}>{step.sub}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Gap cards with stacked depth */}
          <div>
            {/* Gap Card 01 */}
            <motion.div
              initial={{ y: 32, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }} viewport={{ once: true, margin: '-100px' }}
              style={{ position: 'relative', marginBottom: '32px' }}
            >
              <div style={{ position: 'absolute', inset: 0, background: '#ddd6fe', borderRadius: '20px', transform: 'translate(8px, 8px)', zIndex: 0 }} />
              <div className="gw-card" style={{ background: 'white', border: '1px solid #ddd6fe', borderTop: '3px solid #7b79ff', borderRadius: '20px', padding: '40px', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
                <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.18em', color: '#5555a2', fontWeight: 600, marginBottom: '16px' }}>GAP 01 — EXPOSURE</p>
                <h3 style={{ marginBottom: '16px' }}>Some kids grow up surrounded by business conversations. Others never encounter that world at all.</h3>
                <p>Before many kids ever step into a classroom business lesson, they've already overheard pricing decisions, watched negotiations happen, and been in rooms where deals get made. That informal exposure builds a mental model no curriculum fully replicates. Kids in underserved schools — and kids spending weeks in hospital beds — often never get that window.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '20px' }}>
                  {['Business Vocabulary', 'Early Exposure', 'Access to Opportunity'].map(tag => (
                    <span key={tag} style={{ background: '#ddd6fe', color: '#5555a2', fontSize: '12px', borderRadius: '20px', padding: '4px 12px', fontWeight: 500 }}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Gap Card 02 */}
            <motion.div
              initial={{ y: 32, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }} viewport={{ once: true, margin: '-100px' }}
              style={{ position: 'relative', marginBottom: '48px' }}
            >
              <div style={{ position: 'absolute', inset: 0, background: '#ddd6fe', borderRadius: '20px', transform: 'translate(8px, 8px)', zIndex: 0 }} />
              <div className="gw-card" style={{ background: 'white', border: '1px solid #ddd6fe', borderTop: '3px solid #5555a2', borderRadius: '20px', padding: '40px', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
                <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.18em', color: '#5555a2', fontWeight: 600, marginBottom: '16px' }}>GAP 02 — OUTCOMES</p>
                <h3 style={{ marginBottom: '16px' }}>Every existing program teaches theory. None of them teach kids to actually get paid.</h3>
                <p>STEM programs teach coding. Financial literacy programs teach saving. Entrepreneurship programs teach business plans nobody buys. Not one of them teaches the single skill that produces real income: finding a real person who needs something, making an offer, and collecting payment. That's the gap Groundwork is built around.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '20px' }}>
                  {['Real Transactions', 'Income Creation', 'Client Skills'].map(tag => (
                    <span key={tag} style={{ background: '#ddd6fe', color: '#5555a2', fontSize: '12px', borderRadius: '20px', padding: '4px 12px', fontWeight: 500 }}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Callout bar */}
            <div style={{ background: 'linear-gradient(135deg, #5555a2 0%, #2d1b69 100%)', borderRadius: '16px', padding: '32px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px', flexWrap: 'wrap', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(123,121,255,0.3) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <p style={{ color: 'white', fontSize: '20px', fontWeight: 700, maxWidth: '560px', lineHeight: 1.4, margin: 0, position: 'relative', zIndex: 1 }}>
                Groundwork solves both gaps under one roof — building the foundation with hands-on kits, then turning that foundation into real income.
              </p>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <BtnPrimary to="/programs">See How It Works</BtnPrimary>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Deterministic pseudo-random so the starfield is stable across renders
function rand(n) {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453
  return x - Math.floor(x)
}

// Scatter ~160 stars in a disc, denser toward the core (sqrt distribution)
const GALAXY_STARS = Array.from({ length: 160 }, (_, i) => {
  const ang = rand(i) * Math.PI * 2
  const radius = 40 + Math.sqrt(rand(i + 50)) * 470
  return {
    cx: 500 + Math.cos(ang) * radius,
    cy: 500 + Math.sin(ang) * radius,
    r: 0.5 + rand(i + 100) * 1.9,
    op: 0.18 + rand(i + 150) * 0.55,
    twinkle: rand(i + 200) > 0.62,
    dur: (2 + rand(i + 250) * 3.6).toFixed(2),
    delay: (rand(i + 300) * 4.5).toFixed(2),
  }
})

function GalaxyHero() {
  const shouldReduce = useReducedMotion()
  const C = 500
  const ring = (dur, dir = 1) =>
    shouldReduce ? {} : { animate: { rotate: 360 * dir }, transition: { duration: dur, repeat: Infinity, ease: 'linear' } }
  const o = { originX: '500px', originY: '500px' }
  const pulse = (dur, delay = 0) =>
    shouldReduce ? {} : { animate: { opacity: [0.1, 0.22, 0.1], scale: [1, 1.09, 1] }, transition: { duration: dur, repeat: Infinity, ease: 'easeInOut', delay } }

  return (
    <div style={{ position: 'absolute', top: '46%', left: '50%', transform: 'translate(-50%, -50%)', width: 'min(1600px, 168vw)', pointerEvents: 'none', zIndex: 0 }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut', delay: 0.1 }}
        style={{ position: 'relative', width: '100%' }}
      >
        {/* Tilted galactic disc */}
        <div style={{ position: 'relative', width: '100%', paddingBottom: '100%', transform: 'perspective(1300px) rotateX(64deg)' }}>
          <svg viewBox="0 0 1000 1000" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} aria-hidden="true">
            <defs>
              <radialGradient id="galCore" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#cdc4ff" stopOpacity="0.42" />
                <stop offset="34%" stopColor="#7b79ff" stopOpacity="0.22" />
                <stop offset="68%" stopColor="#5555a2" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#7b79ff" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="galRing" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="50%" stopColor="#8b89ff" />
                <stop offset="100%" stopColor="#b683d6" />
              </linearGradient>
              <linearGradient id="cometTail" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="100%" stopColor="#e8d2ff" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient id="cometTail2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#e8d2ff" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="neb1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7b79ff" /><stop offset="100%" stopColor="#7b79ff" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="neb2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#b683d6" /><stop offset="100%" stopColor="#b683d6" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="neb3" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#5b6bd6" /><stop offset="100%" stopColor="#5b6bd6" stopOpacity="0" />
              </radialGradient>
              <filter id="galGlow" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="5" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <filter id="nebBlur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="22" />
              </filter>
            </defs>

            {/* Nebula gas clouds */}
            <motion.ellipse cx="372" cy="430" rx="280" ry="190" fill="url(#neb1)" filter="url(#nebBlur)" style={{ originX: '372px', originY: '430px' }} {...pulse(11)} />
            <motion.ellipse cx="640" cy="560" rx="240" ry="170" fill="url(#neb2)" filter="url(#nebBlur)" style={{ originX: '640px', originY: '560px' }} {...pulse(13, 2.5)} />
            <motion.ellipse cx="560" cy="360" rx="220" ry="150" fill="url(#neb3)" filter="url(#nebBlur)" style={{ originX: '560px', originY: '360px' }} {...pulse(15, 5)} />

            {/* Ambient core glow */}
            <circle cx={C} cy={C} r="490" fill="url(#galCore)" />

            {/* Drifting starfield */}
            <motion.g style={o} {...ring(240)}>
              {GALAXY_STARS.map((s, i) => (
                <circle
                  key={i}
                  cx={s.cx} cy={s.cy} r={s.r}
                  fill="#eae4ff"
                  style={
                    s.twinkle && !shouldReduce
                      ? { animation: `gwTwinkle ${s.dur}s ease-in-out ${s.delay}s infinite` }
                      : { opacity: s.op }
                  }
                />
              ))}
            </motion.g>

          </svg>
        </div>

      </motion.div>
    </div>
  )
}

const LOGO_MASK = {
  WebkitMaskImage: 'url(/groundwork-gmark.png)',
  maskImage: 'url(/groundwork-gmark.png)',
  WebkitMaskSize: 'contain',
  maskSize: 'contain',
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
  WebkitMaskPosition: 'center',
  maskPosition: 'center',
}

const ORBIT_SPARKLES = [
  { a: 25, dur: 18, top: '2%', size: 13 },
  { a: 160, dur: 25, top: '7%', size: 9 },
  { a: 272, dur: 21, top: '4%', size: 11 },
]

function HeroLogo() {
  const shouldReduce = useReducedMotion()
  return (
    <div style={{ position: 'absolute', top: '53%', left: '50%', transform: 'translate(-50%, -50%)', width: 'min(560px, 60vw)', aspectRatio: '1 / 1', pointerEvents: 'none', zIndex: 0 }}>

      {/* Breathing aura glow */}
      <motion.div
        animate={shouldReduce ? {} : { scale: [1, 1.16, 1], opacity: [0.32, 0.58, 0.32] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', inset: '-10%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(123,121,255,0.55) 0%, rgba(182,131,214,0.2) 42%, transparent 68%)', filter: 'blur(24px)' }}
      />

      {/* Pulsing halo rings */}
      {!shouldReduce && [0, 1, 2].map(i => (
        <motion.div
          key={`halo-${i}`}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1.55, opacity: [0, 0.4, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, delay: i * 1.6, ease: 'easeOut' }}
          style={{ position: 'absolute', top: '50%', left: '50%', width: '56%', height: '56%', marginLeft: '-28%', marginTop: '-28%', borderRadius: '50%', border: '1px solid rgba(167,139,250,0.5)' }}
        />
      ))}

      {/* Gradient-tinted logo silhouette (masked) */}
      <motion.div
        animate={shouldReduce ? {} : { opacity: [0.18, 0.28, 0.18], scale: [1, 1.035, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, #c9a8ff 0%, #a78bfa 34%, #b683d6 68%, #8b89ff 100%)',
          ...LOGO_MASK,
          filter: 'drop-shadow(0 0 30px rgba(123,121,255,0.8)) drop-shadow(0 0 62px rgba(182,131,214,0.4))',
        }}
      />

      {/* Light sweep / shine (masked to the logo) */}
      <div
        style={{
          position: 'absolute', inset: 0,
          ...LOGO_MASK,
          background: 'linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.6) 50%, transparent 60%)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '260% 100%',
          mixBlendMode: 'screen',
          opacity: 0.6,
          animation: shouldReduce ? 'none' : 'gwSheen 6s ease-in-out infinite',
        }}
      />

      {/* Orbiting sparkles */}
      {!shouldReduce && ORBIT_SPARKLES.map((s, i) => (
        <motion.div
          key={`sparkle-${i}`}
          initial={{ rotate: s.a }}
          animate={{ rotate: s.a + 360 }}
          transition={{ duration: s.dur, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', inset: 0 }}
        >
          <div style={{ position: 'absolute', top: s.top, left: '50%', width: `${s.size}px`, height: `${s.size}px`, transform: 'translateX(-50%)', borderRadius: '50%', background: 'radial-gradient(circle, #ffffff 0%, #c9a8ff 45%, transparent 72%)', boxShadow: '0 0 8px rgba(201,168,255,0.9)', animation: `gwTwinkle ${2 + i}s ease-in-out infinite` }} />
        </motion.div>
      ))}
    </div>
  )
}

export default function Home() {
  const shouldReduce = useReducedMotion()
  return (
    <>
      {/* HERO — Dark Aurora */}
      <section style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', background: 'linear-gradient(160deg, #06041a 0%, #0d0926 45%, #090718 100%)', paddingTop: '120px', paddingBottom: '96px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

        {/* Grid texture */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(123,121,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(123,121,255,0.055) 1px, transparent 1px)', backgroundSize: '44px 44px', pointerEvents: 'none', zIndex: 0 }} />

        {/* Aurora layer 1 — dominant nebula, upper-right (electric violet) */}
        <motion.div
          animate={shouldReduce ? {} : { scale: [1, 1.1, 1], opacity: [0.88, 1, 0.88] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', top: '-30%', right: '-18%', width: '78%', height: '100%', background: 'radial-gradient(ellipse 68% 62% at 58% 28%, rgba(112,38,180,0.97) 0%, rgba(80,50,155,0.72) 32%, rgba(48,35,110,0.38) 58%, transparent 75%)', pointerEvents: 'none', zIndex: 0 }}
        />

        {/* Aurora layer 2 — depth, lower-left (deep indigo) */}
        <motion.div
          animate={shouldReduce ? {} : { scale: [1, 1.07, 1], opacity: [0.65, 0.85, 0.65] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 3.5 }}
          style={{ position: 'absolute', bottom: '-28%', left: '-22%', width: '68%', height: '78%', background: 'radial-gradient(ellipse 58% 48% at 38% 58%, rgba(28,18,85,0.88) 0%, rgba(55,42,138,0.55) 38%, transparent 65%)', pointerEvents: 'none', zIndex: 0 }}
        />

        {/* Central soft pulse — brand primary glow */}
        <motion.div
          animate={shouldReduce ? {} : { opacity: [0.22, 0.38, 0.22], scale: [0.95, 1.06, 0.95] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          style={{ position: 'absolute', top: '42%', left: '50%', transform: 'translate(-50%, -50%)', width: '60%', height: '55%', background: 'radial-gradient(ellipse, rgba(123,121,255,0.22) 0%, transparent 65%)', filter: 'blur(18px)', pointerEvents: 'none', zIndex: 0 }}
        />

        {/* Nebula + starfield background */}
        <GalaxyHero />

        {/* Glowing gradient logo with effects — sits in the circle, underlays the text */}
        <HeroLogo />

        {/* Content */}
        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1, width: '100%', textAlign: 'center' }} className="px-6 md:px-12">

          {/* Glass pill badge */}
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }} style={{ marginBottom: '28px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', background: 'rgba(123,121,255,0.11)', border: '1px solid rgba(123,121,255,0.28)', borderRadius: '100px', padding: '7px 20px', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7b79ff', boxShadow: '0 0 8px rgba(123,121,255,1)', display: 'block', flexShrink: 0 }} />
              <span style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(221,214,254,0.88)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Frisco, Texas · Nonprofit in Formation
              </span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.18 }}
          >
            <h1 style={{ color: '#ffffff', fontSize: 'clamp(38px, 6.5vw, 78px)', fontWeight: 800, lineHeight: 1.07, letterSpacing: '-0.025em', maxWidth: '860px', margin: '0 auto' }}>
              Building Opportunity
              <br />
              From the{' '}
              <span style={{ background: 'linear-gradient(125deg, #a78bfa 0%, #c9a8ff 55%, #e8d2ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Ground Up.
              </span>
            </h1>

            <p style={{ fontSize: '18px', color: 'rgba(221,214,254,0.72)', maxWidth: '540px', margin: '24px auto 0', lineHeight: 1.75, fontWeight: 400 }}>
              Groundwork gives kids in underserved schools and pediatric wards their first real encounter with business and AI — and takes teenagers all the way to their first paycheck.
            </p>

            <div style={{ display: 'flex', gap: '14px', marginTop: '44px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <HeroBtnPrimary to="/programs">Explore Our Programs</HeroBtnPrimary>
              <HeroBtnSecondary to="/partner">Partner With Us</HeroBtnSecondary>
            </div>
          </motion.div>

          {/* Embedded stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ marginTop: '72px', paddingTop: '32px', borderTop: '1px solid rgba(123,121,255,0.18)' }}
          >
            <div className="grid-cols-2 md:grid-cols-4" style={{ display: 'grid', gap: '8px', maxWidth: '680px', margin: '0 auto' }}>
              {programStats.map((s) => (
                <div key={s.label} style={{ textAlign: 'center', padding: '10px 12px' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '3px' }}>
                    <span style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 800, color: 'white', lineHeight: 1 }}>{s.num}</span>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#7b79ff', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.unit}</span>
                  </div>
                  <p style={{ fontSize: '12px', color: 'rgba(221,214,254,0.5)', marginTop: '5px', fontWeight: 500 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll chevron */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)', color: 'rgba(221,214,254,0.38)', zIndex: 1 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </section>

      <MarqueeStrip />
      <TwoGapsSection />
      <AngledDivider from="white" to="#f5f3ff" />

      {/* PROGRAMS PREVIEW */}
      <section style={{ background: '#f5f3ff', paddingTop: '96px', paddingBottom: '96px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }} className="px-6 md:px-12">
          <motion.div initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <KickerRule label="Programs" />
            <h2 style={{ marginBottom: '12px' }}>Two Programs. One Mission.</h2>
            <p style={{ fontSize: '18px', color: '#3d3a52', marginBottom: '48px' }}>Different starting points. Same finish line.</p>
          </motion.div>

          <div style={{ display: 'grid', gap: '32px' }} className="grid-cols-1 md:grid-cols-2">
            {/* VentureKits — stacked depth */}
            <motion.div
              initial={{ y: 32, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }} viewport={{ once: true }}
              style={{ position: 'relative' }}
            >
              <div style={{ position: 'absolute', inset: 0, background: '#ddd6fe', borderRadius: '20px', transform: 'translate(8px, 8px)', zIndex: 0 }} />
              <div className="gw-card" style={{ background: 'white', border: '1px solid #ddd6fe', borderTop: '4px solid #7b79ff', borderRadius: '20px', padding: '40px', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <IconBox icon={Package} color="#7b79ff" bg="rgba(221,214,254,0.35)" />
                  <div>
                    <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.18em', color: '#5555a2', fontWeight: 600, margin: 0 }}>WHERE THERE'S A NEED</p>
                    <h3 style={{ margin: '2px 0 0' }}>VentureKits</h3>
                  </div>
                </div>
                <p>Self-contained activity boxes that deliver business fundamentals into any classroom or hospital ward. No WiFi. No expertise needed. Under an hour.</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '16px', marginBottom: '24px' }}>
                  {['No WiFi needed', 'Under 1 hour', 'Any age'].map(t => (
                    <span key={t} style={{ background: '#f5f3ff', color: '#5555a2', fontSize: '11px', borderRadius: '20px', padding: '3px 10px', fontWeight: 500, border: '1px solid #ddd6fe' }}>{t}</span>
                  ))}
                </div>
                <Link to="/programs/venturekits" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#7b79ff', fontWeight: 600, textDecoration: 'none', fontSize: '15px' }}
                  onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
                  onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}>
                  Explore VentureKits <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Earning Track — stacked depth (dark) */}
            <motion.div
              initial={{ y: 32, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }} viewport={{ once: true }}
              style={{ position: 'relative' }}
            >
              <div style={{ position: 'absolute', inset: 0, background: '#3a3480', borderRadius: '20px', transform: 'translate(8px, 8px)', zIndex: 0 }} />
              <div style={{ background: 'linear-gradient(150deg, #5555a2 0%, #1e1854 100%)', border: '1px solid rgba(123,121,255,0.2)', borderTop: '4px solid #7b79ff', borderRadius: '20px', padding: '40px', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(123,121,255,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', position: 'relative', zIndex: 1 }}>
                  <IconBox icon={Target} color="white" bg="rgba(123,121,255,0.3)" />
                  <div>
                    <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.18em', color: '#7b79ff', fontWeight: 600, margin: 0 }}>WHERE THERE'S READINESS</p>
                    <h3 style={{ margin: '2px 0 0', color: 'white' }}>The Earning Track</h3>
                  </div>
                </div>
                <p style={{ color: 'rgba(221,214,254,0.85)', position: 'relative', zIndex: 1 }}>An 8-week cohort that takes a teenager from a vague idea to a paid invoice. The exit requirement is non-negotiable: real money received.</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '16px', marginBottom: '24px', position: 'relative', zIndex: 1 }}>
                  {['8 weeks', 'Cohorts of 4–6', 'Real clients'].map(t => (
                    <span key={t} style={{ background: 'rgba(123,121,255,0.2)', color: '#ddd6fe', fontSize: '11px', borderRadius: '20px', padding: '3px 10px', fontWeight: 500, border: '1px solid rgba(123,121,255,0.3)' }}>{t}</span>
                  ))}
                </div>
                <Link to="/programs/earning-track" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#7b79ff', fontWeight: 600, textDecoration: 'none', fontSize: '15px', position: 'relative', zIndex: 1 }}
                  onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
                  onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}>
                  See the Journey <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AngledDivider from="#f5f3ff" to="white" />

      {/* WHO WE SERVE */}
      <section style={{ paddingTop: '96px', paddingBottom: '96px', background: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(123,121,255,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(221,214,254,0.35) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '10%', right: '8%', width: '12px', height: '12px', borderRadius: '50%', background: '#7b79ff', opacity: 0.35, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '25%', right: '15%', width: '6px', height: '6px', borderRadius: '50%', background: '#b683d6', opacity: 0.5, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '20%', left: '8%', width: '10px', height: '10px', borderRadius: '50%', background: '#9c9cd1', opacity: 0.4, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '60%', right: '6%', width: '8px', height: '8px', borderRadius: '50%', background: '#b683d6', opacity: 0.3, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '8%', right: '22%', width: '5px', height: '5px', borderRadius: '50%', background: '#7b79ff', opacity: 0.45, pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }} className="px-6 md:px-12">
          <motion.div initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <KickerRule label="Our Reach" />
            <h2 style={{ marginBottom: '12px' }}>Who We Serve</h2>
            <p style={{ fontSize: '18px', color: '#3d3a52', marginBottom: '48px' }}>Every kid, regardless of what they have access to.</p>
          </motion.div>
          <div style={{ display: 'grid', gap: '24px' }} className="grid-cols-1 md:grid-cols-2">
            {[
              { icon: Building2, color: '#7b79ff', bg: 'rgba(123,121,255,0.1)', title: 'Underserved Students', body: "Kids in Title I and underserved schools with no exposure to business thinking, entrepreneurship, or AI — and no path to creating income independently." },
              { icon: HeartPulse, color: '#b683d6', bg: 'rgba(182,131,214,0.1)', title: 'Pediatric Patients', body: 'Kids facing extended hospital stays, losing critical time when economic and technological exposure shapes how they see their own potential.' },
            ].map((item, i) => (
              <motion.div key={item.title}
                initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }} viewport={{ once: true }}
                className="gw-card" style={{ background: 'white', border: '1px solid #ddd6fe', borderRadius: '20px', padding: '40px', position: 'relative', overflow: 'hidden' }}
              >
                <IconBox icon={item.icon} color={item.color} bg={item.bg} size={22} />
                <h3 style={{ marginBottom: '12px', marginTop: '20px' }}>{item.title}</h3>
                <p>{item.body}</p>
              </motion.div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: '14px', color: '#5555a2', fontStyle: 'italic', marginTop: '32px' }}>
            No filtering for grades, skills, or tech access. Any kid who can open a box can start.
          </p>
        </div>
      </section>

      {/* FOUNDERS PREVIEW */}
      <section style={{ background: 'linear-gradient(170deg, #f5f3ff 0%, #ede9fe 100%)', paddingTop: '96px', paddingBottom: '96px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '600px', height: '400px', background: 'radial-gradient(ellipse, rgba(123,121,255,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }} className="px-6 md:px-12">
          <motion.div initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <KickerRule label="The Team" center />
            <h2 style={{ marginBottom: '8px' }}>Meet the Founders</h2>
            <p style={{ fontSize: '16px', color: '#3d3a52', marginBottom: '56px' }}>Built by students who refused to wait for permission.</p>
          </motion.div>
          <div style={{ display: 'grid', gap: '32px', justifyItems: 'center' }} className="grid-cols-1 md:grid-cols-2">
            {[
              { name: 'Avin Agrawal', photo: '/founder-avin.jpg', initials: 'AA', role: 'Co-Founder' },
              { name: 'Ishaan Thakur', photo: '/founder-ishaan.jpg', initials: 'IT', role: 'Co-Founder' },
            ].map((founder, i) => (
              <motion.div key={founder.name}
                initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.15 }} viewport={{ once: true }}
                style={{ textAlign: 'center' }}
              >
                <div style={{ position: 'relative', display: 'inline-block', marginBottom: '20px' }}>
                  <div style={{ width: '192px', height: '192px', borderRadius: '50%', background: 'linear-gradient(135deg, #7b79ff, #b683d6, #5555a2)', padding: '3px', display: 'inline-block' }}>
                    <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', background: '#ddd6fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={founder.photo} alt={founder.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                        onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }} />
                      <span style={{ display: 'none', fontSize: '32px', fontWeight: 700, color: '#9c9cd1', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>{founder.initials}</span>
                    </div>
                  </div>
                  <div style={{ position: 'absolute', bottom: '-4px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #7b79ff, #5555a2)', borderRadius: '20px', padding: '4px 14px', whiteSpace: 'nowrap', boxShadow: '0 4px 12px rgba(123,121,255,0.4)' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'white', letterSpacing: '0.05em' }}>{founder.role}</span>
                  </div>
                </div>
                <h3 style={{ marginBottom: '0', marginTop: '8px' }}>{founder.name}</h3>
                <p style={{ fontSize: '14px', color: '#5555a2', marginTop: '4px' }}>Groundwork</p>
              </motion.div>
            ))}
          </div>
          <Link to="/founders"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '48px', color: '#7b79ff', fontWeight: 600, textDecoration: 'none', fontSize: '15px', cursor: 'pointer' }}
            onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}>
            Read Full Story <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
