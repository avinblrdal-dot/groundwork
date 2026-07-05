import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useInView, useReducedMotion, useMotionValue, useSpring } from 'framer-motion'
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
      <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#5f5c94' }}>
        {label}
      </span>
      {center && <div style={{ width: '40px', height: '1px', background: '#7b79ff', flexShrink: 0 }} />}
    </div>
  )
}

function AngledDivider({ from, to }) {
  return (
    <div style={{ background: from, lineHeight: 0 }}>
      <svg viewBox="0 0 1440 48" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '48px' }}>
        {/* Gentle asymmetric curve — softer, more premium than a hard diagonal */}
        <path d="M0,48 C 420,8 1020,8 1440,44 L1440,48 L0,48 Z" fill={to} />
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
          <p style={{ fontSize: '18px', color: '#3d3a52', marginTop: '12px', maxWidth: '580px' }}>
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

// Full-page starfield that slowly revolves around the hero center (the logo),
// rendered on canvas as crisp round sprites. Reduced-motion → static field.
function StarCanvas() {
  const shouldReduce = useReducedMotion()
  const ref = useRef(null)

  useEffect(() => {
    const cv = ref.current
    if (!cv) return
    const ctx = cv.getContext('2d')
    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    const rand = (a, b) => a + Math.random() * (b - a)
    let W = 0, H = 0, stars = [], parts = [], shoot = null, nextShoot = 0, raf = 0, last = 0, running = true

    // soft round star sprite (crisp at any zoom, cheap to blit)
    const sp = document.createElement('canvas'); const S = 48; sp.width = sp.height = S
    {
      const s = sp.getContext('2d')
      const g = s.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2)
      g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.35, 'rgba(234,228,255,.95)'); g.addColorStop(1, 'rgba(234,228,255,0)')
      s.fillStyle = g; s.beginPath(); s.arc(S / 2, S / 2, S / 2, 0, 6.2832); s.fill()
    }

    function build() {
      const diag = Math.hypot(W, H), maxR = diag * 0.72, dir = Math.random() < 0.5 ? 1 : -1
      const n = Math.round(Math.min(340, (W * H) / 6500)); stars = []
      for (let i = 0; i < n; i++) {
        const radv = Math.sqrt(Math.random()) * maxR
        const av = dir * (0.023 + 0.016 * (1 - radv / maxR)) * rand(0.85, 1.15)
        stars.push({ rad: radv, ang: rand(0, 6.2832), av, r: rand(0.6, 2.3), a: rand(0.2, 0.9), tw: rand(0.4, 1.6), ph: rand(0, 6.28) })
      }
      parts = []
      for (let j = 0; j < 9; j++) {
        const pr = Math.sqrt(Math.random()) * maxR * 0.9
        parts.push({ rad: pr, ang: rand(0, 6.2832), av: dir * (0.015 + rand(0, 0.011)), r: rand(1.4, 2.8), a: rand(0.25, 0.6), ph: rand(0, 6.28) })
      }
    }
    function resize() {
      const r = cv.getBoundingClientRect(); W = Math.round(r.width); H = Math.round(r.height)
      cv.width = Math.round(W * DPR); cv.height = Math.round(H * DPR); ctx.setTransform(DPR, 0, 0, DPR, 0, 0); build()
    }
    function draw(t) {
      const dt = last ? Math.min((t - last) / 1000, 0.05) : 0; last = t
      ctx.clearRect(0, 0, W, H)
      const cxc = W * 0.5, cyc = H * 0.49
      for (const s of stars) {
        s.ang += s.av * dt
        const x = cxc + s.rad * Math.cos(s.ang), y = cyc + s.rad * Math.sin(s.ang)
        if (x < -6 || x > W + 6 || y < -6 || y > H + 6) continue
        const a = s.a * (0.6 + 0.4 * Math.sin(t * 0.001 * s.tw + s.ph)); const d = s.r * 3.5
        ctx.globalAlpha = Math.max(0, a); ctx.drawImage(sp, x - d, y - d, d * 2, d * 2)
      }
      for (const p of parts) {
        p.ang += p.av * dt
        const px = cxc + p.rad * Math.cos(p.ang), py = cyc + p.rad * Math.sin(p.ang), rr = p.r
        if (px < -30 || px > W + 30 || py < -30 || py > H + 30) continue
        const g = ctx.createRadialGradient(px, py, 0, px, py, rr * 6)
        g.addColorStop(0, `rgba(190,170,255,${p.a})`); g.addColorStop(1, 'rgba(190,170,255,0)')
        ctx.globalAlpha = 1; ctx.fillStyle = g; ctx.beginPath(); ctx.arc(px, py, rr * 6, 0, 6.2832); ctx.fill()
        ctx.globalAlpha = Math.min(1, p.a + 0.2); ctx.fillStyle = '#e7deff'; ctx.beginPath(); ctx.arc(px, py, rr * 0.7, 0, 6.2832); ctx.fill()
      }
      if (!shoot && t > nextShoot) {
        const fl = Math.random() < 0.5
        shoot = { t: 0, dur: rand(650, 900), x: rand(0.1, 0.6), y: rand(0.08, 0.4), vx: (fl ? 1 : -1) * rand(0.5, 0.8), vy: rand(0.18, 0.34), len: rand(90, 150) }
      }
      if (shoot) {
        shoot.t += dt * 1000; const pr = shoot.t / shoot.dur
        if (pr >= 1) { shoot = null; nextShoot = t + rand(20000, 40000) }
        else {
          const ease = pr < 0.5 ? 1 : (1 - (pr - 0.5) / 0.5)
          const sx = (shoot.x + shoot.vx * pr) * W, sy = (shoot.y + shoot.vy * pr) * H, ex = sx - shoot.vx * shoot.len, ey = sy - shoot.vy * shoot.len
          const lg = ctx.createLinearGradient(sx, sy, ex, ey)
          lg.addColorStop(0, `rgba(255,255,255,${0.9 * ease})`); lg.addColorStop(0.4, `rgba(190,170,255,${0.5 * ease})`); lg.addColorStop(1, 'rgba(190,170,255,0)')
          ctx.globalAlpha = 1; ctx.strokeStyle = lg; ctx.lineWidth = 2; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(ex, ey); ctx.stroke()
        }
      }
      ctx.globalAlpha = 1
      if (running && !shouldReduce) raf = requestAnimationFrame(draw)
    }

    resize()
    const onResize = () => resize()
    window.addEventListener('resize', onResize)
    if (shouldReduce) { draw(0) } else { nextShoot = performance.now() + rand(6000, 12000); raf = requestAnimationFrame(draw) }
    return () => { running = false; cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [shouldReduce])

  return <canvas ref={ref} aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block', zIndex: 0, pointerEvents: 'none' }} />
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

      {/* Faint concentric orbit rings */}
      {[{ s: 80, c: 'rgba(167,139,250,0.16)', d: 9, dl: 0 }, { s: 108, c: 'rgba(139,137,255,0.12)', d: 11, dl: 1.5 }, { s: 138, c: 'rgba(182,131,214,0.09)', d: 13, dl: 3 }].map((r, i) => (
        <motion.div
          key={`ring-${i}`}
          animate={shouldReduce ? {} : { scale: [1, 1.02, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: r.d, repeat: Infinity, ease: 'easeInOut', delay: r.dl }}
          style={{ position: 'absolute', top: '50%', left: '50%', width: `${r.s}%`, height: `${r.s}%`, transform: 'translate(-50%, -50%)', borderRadius: '50%', border: `1px solid ${r.c}` }}
        />
      ))}

      {/* Pulsing halo rings */}
      {!shouldReduce && [0, 1, 2, 3, 4].map(i => (
        <motion.div
          key={`halo-${i}`}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1.7, opacity: [0, 0.42, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: i * 1, ease: 'easeOut' }}
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
  // Subtle mouse parallax for the hero atmosphere
  const pmx = useMotionValue(0)
  const pmy = useMotionValue(0)
  const psx = useSpring(pmx, { stiffness: 50, damping: 18, mass: 0.4 })
  const psy = useSpring(pmy, { stiffness: 50, damping: 18, mass: 0.4 })
  const onHeroMove = (e) => {
    if (shouldReduce) return
    pmx.set(((e.clientX / window.innerWidth) - 0.5) * -10)
    pmy.set(((e.clientY / window.innerHeight) - 0.5) * -10)
  }
  return (
    <>
      {/* HERO — Cinematic Space */}
      <section onMouseMove={onHeroMove} style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', background: 'linear-gradient(160deg, #06041a 0%, #0d0926 45%, #090718 100%)', paddingTop: '120px', paddingBottom: '96px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

        {/* Cinematic space atmosphere — moves subtly with the mouse (parallax) */}
        <motion.div style={{ position: 'absolute', inset: 0, x: psx, y: psy, zIndex: 0, pointerEvents: 'none' }}>
          {/* Static space photo base */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/hero-space.png)', backgroundSize: 'cover', backgroundPosition: 'center 80%', transform: 'scale(1.06)' }} />
          {/* Deep-space color grade (from the original hero) */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, #06041a 0%, #0d0926 45%, #090718 100%)', opacity: 0.34 }} />

          {/* Aurora layer 1 — electric violet, upper-right (screen-blended glow) */}
          <motion.div
            animate={shouldReduce ? {} : { scale: [1, 1.1, 1], opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'absolute', top: '-30%', right: '-18%', width: '78%', height: '100%', background: 'radial-gradient(ellipse 68% 62% at 58% 28%, rgba(120,42,192,0.9) 0%, rgba(88,56,168,0.62) 32%, rgba(60,44,130,0.32) 58%, transparent 75%)', mixBlendMode: 'screen' }}
          />
          {/* Aurora layer 2 — deep indigo, lower-left */}
          <motion.div
            animate={shouldReduce ? {} : { scale: [1, 1.07, 1], opacity: [0.6, 0.82, 0.6] }}
            transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 3.5 }}
            style={{ position: 'absolute', bottom: '-28%', left: '-22%', width: '68%', height: '78%', background: 'radial-gradient(ellipse 58% 48% at 38% 58%, rgba(66,48,158,0.8) 0%, rgba(58,44,140,0.5) 38%, transparent 65%)', mixBlendMode: 'screen' }}
          />
          {/* Central soft pulse */}
          <motion.div
            animate={shouldReduce ? {} : { opacity: [0.24, 0.42, 0.24], scale: [0.95, 1.06, 0.95] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
            style={{ position: 'absolute', top: '42%', left: '50%', transform: 'translate(-50%, -50%)', width: '60%', height: '55%', background: 'radial-gradient(ellipse, rgba(123,121,255,0.26) 0%, transparent 65%)', filter: 'blur(18px)', mixBlendMode: 'screen' }}
          />

          {/* Animated grid */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(123,121,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(123,121,255,0.5) 1px, transparent 1px)', backgroundSize: '64px 64px', opacity: 0.15, WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, #000 30%, transparent 85%)', maskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, #000 30%, transparent 85%)' }} />

          {/* Light rays from the horizon */}
          <motion.div
            animate={shouldReduce ? {} : { opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'absolute', left: '50%', bottom: '6%', width: '150vmax', height: '80vmax', transform: 'translateX(-50%)', background: 'conic-gradient(from 200deg at 50% 100%, transparent 0deg, rgba(160,140,255,0.10) 8deg, transparent 16deg, transparent 26deg, rgba(160,140,255,0.07) 34deg, transparent 42deg, transparent 52deg, rgba(190,160,255,0.10) 60deg, transparent 68deg)', filter: 'blur(14px)', WebkitMaskImage: 'radial-gradient(60% 70% at 50% 100%, #000 0%, transparent 72%)', maskImage: 'radial-gradient(60% 70% at 50% 100%, #000 0%, transparent 72%)' }}
          />
          {/* Horizon bloom */}
          <motion.div
            animate={shouldReduce ? {} : { opacity: [0.65, 1, 0.65], scale: [1, 1.06, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'absolute', left: '50%', bottom: '14%', width: '70%', height: '34%', transform: 'translateX(-50%)', background: 'radial-gradient(ellipse 50% 60% at 50% 60%, rgba(150,120,255,0.5) 0%, rgba(123,121,255,0.22) 40%, transparent 72%)', filter: 'blur(24px)' }}
          />

          {/* Full-page revolving starfield */}
          <StarCanvas />

          {/* Glowing gradient logo — underlays the text */}
          <HeroLogo />
        </motion.div>

        {/* Legibility scrim */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 42%, rgba(4,2,12,0.55) 0%, transparent 62%), linear-gradient(180deg, rgba(4,2,12,0.72) 0%, rgba(4,2,12,0.18) 26%, transparent 48%, rgba(4,2,12,0.3) 78%, rgba(4,2,12,0.55) 100%)' }} />
        {/* Cinematic vignette */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, boxShadow: 'inset 0 0 200px 40px rgba(3,2,10,0.8)' }} />

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
            <p style={{ fontSize: '18px', color: '#3d3a52', marginBottom: '48px', maxWidth: '560px' }}>Different starting points. Same finish line.</p>
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
            <p style={{ fontSize: '18px', color: '#3d3a52', marginBottom: '48px', maxWidth: '560px' }}>Every kid, regardless of what they have access to.</p>
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
