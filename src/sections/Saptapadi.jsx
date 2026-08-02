import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { Divider, Agni } from '../components/Motifs'
import { useLang } from '../i18n'

// A clear, anatomically-shaped right footprint: sole with a broad forefoot,
// concave instep (arch) on the inner edge, tapering to a rounded heel, plus
// five separated toes. (flip=true mirrors it to a left foot.)
function Footprint({ flip, className = '' }) {
  return (
    <svg
      viewBox="0 0 64 100"
      className={className}
      aria-hidden="true"
      style={{ transform: flip ? 'scaleX(-1)' : 'none' }}
    >
      <g fill="currentColor">
        {/* sole — forefoot is widest near the toes, instep curves IN on the
            left (inner) side, heel is a smaller rounded oval at the bottom */}
        <path
          d="M44 30
             C 52 33, 53 44, 50 53
             C 48 60, 45 63, 44 70
             C 43 78, 44 86, 37 90
             C 31 93, 24 91, 22 84
             C 20 78, 23 73, 24 66
             C 25 60, 22 56, 22 49
             C 22 53, 26 56, 31 55
             C 24 53, 21 48, 23 41
             C 25 33, 35 27, 44 30 Z"
        />
        {/* five toes, graduated, arcing across the top of the forefoot */}
        <ellipse cx="45" cy="17" rx="5.4" ry="6.6" />
        <ellipse cx="34" cy="12" rx="4.6" ry="5.6" />
        <ellipse cx="25" cy="13" rx="3.9" ry="4.8" />
        <ellipse cx="18" cy="17" rx="3.3" ry="4.1" />
        <ellipse cx="12" cy="23" rx="2.8" ry="3.5" />
      </g>
    </svg>
  )
}

// One vow row: the footprint sits ON the curvy path (center), the vow card to
// the alternating side. Foot animates in with a little "press" from the path.
function Step({ step, index, t }) {
  const left = index % 2 === 0

  const card = (
    <motion.div
      initial={{ opacity: 0, x: left ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`royal-card p-4 md:p-5 ${left ? 'text-right' : 'text-left'}`}
    >
      <span className="font-heading text-sm text-gold-light md:text-base">
        {t({ te: `${index + 1}వ అడుగు`, en: `Step ${index + 1}` })}
      </span>
      <p className="mt-1 font-display text-base leading-snug text-cream/90 md:text-lg">{t(step)}</p>
    </motion.div>
  )

  // footprint sits BESIDE the card (toward the centre path), pressing in
  const foot = (
    <motion.div
      initial={{ opacity: 0, scale: 0.4, rotate: left ? 16 : -16 }}
      whileInView={{ opacity: 1, scale: 1, rotate: left ? 8 : -8 }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ type: 'spring', stiffness: 240, damping: 14, delay: 0.2 }}
      className="shrink-0"
    >
      <Footprint flip={left} className="h-12 w-8 text-gold md:h-16 md:w-11 drop-shadow-[0_0_8px_rgba(229,193,108,0.6)]" />
    </motion.div>
  )

  return (
    <div className="relative grid grid-cols-[1fr_72px_1fr] items-center py-7 md:grid-cols-[1fr_96px_1fr] md:py-10">
      {left ? (
        // card on the left; foot hugs the inner edge toward the gutter
        <div className="col-start-1 flex items-center justify-end gap-3 md:gap-4">
          {card}
          {foot}
        </div>
      ) : (
        // foot hugs the RIGHT edge of the gutter; card on the right
        <div className="col-start-3 flex items-center justify-start gap-3 md:gap-4">
          {foot}
          {card}
        </div>
      )}
    </div>
  )
}

export default function Saptapadi({ content }) {
  const { t } = useLang()
  const sapt = content.saptapadi
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.45'],
  })

  // One-way progress that only ever increases (never retracts on scroll-up).
  const drawn = useMotionValue(0)
  useEffect(() => {
    // seed immediately from the current scroll position, so the path is
    // correct even if the user lands mid-section (e.g. via the nav anchor)
    // or scrolls fast before the first 'change' event fires.
    const sync = (v) => {
      if (v > drawn.get()) drawn.set(v)
    }
    sync(scrollYProgress.get())
    const unsub = scrollYProgress.on('change', sync)
    return () => unsub()
  }, [scrollYProgress, drawn])

  // spring-smooth the draw so it animates cleanly instead of jumping
  const smooth = useSpring(drawn, { stiffness: 90, damping: 24, restDelta: 0.001 })
  const pathLength = useTransform(smooth, [0, 1], [0.04, 1])

  if (!sapt?.show) return null

  // a markedly curvier serpentine path (swings nearly edge to edge)
  const PATH =
    'M50 0 C 4 80, 96 170, 50 250 C 4 330, 96 420, 50 500 C 4 580, 96 670, 50 750 C 4 830, 96 920, 50 1000'

  return (
    <section id="saptapadi" ref={ref} className="section-pad relative overflow-hidden bg-plum jali">
      <div className="mx-auto max-w-3xl text-center">
        <Agni className="mx-auto h-16 w-16 text-gold" />
        <h2 className="mt-3 font-heading text-3xl leading-normal text-foil md:text-5xl">{t(sapt.heading)}</h2>
        <p className="mx-auto mt-3 max-w-xl font-display text-lg italic text-cream/70">{t(sapt.intro)}</p>
        <Divider className="my-8 text-gold" />

        <div className="relative">
          {/* the winding golden path that draws itself on scroll (one-way) */}
          <svg
            className="pointer-events-none absolute left-1/2 top-0 h-full w-40 -translate-x-1/2"
            viewBox="0 0 100 1000"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path d={PATH} stroke="rgba(201,162,75,0.18)" strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round" />
            <motion.path
              d={PATH}
              stroke="#E5C16C"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ pathLength, filter: 'drop-shadow(0 0 6px rgba(229,193,108,0.7))' }}
            />
          </svg>

          {/* the seven vow rows */}
          <div className="relative">
            {sapt.steps.map((step, i) => (
              <Step key={i} step={step} index={i} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
