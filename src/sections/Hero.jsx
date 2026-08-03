import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Ganesha, Divider, MandalaBg, CornerFlourish, Thoranam } from '../components/Motifs'
import { useLang } from '../i18n'

// Hero with a "temple doors" reveal. The doors part to unveil the invitation.
// `opened` / `setOpened` are lifted to the app so the music can start exactly
// when the doors begin opening.
export default function Hero({ content, opened, setOpened }) {
  const { t } = useLang()
  const { couple, invocation, ui } = content

  // If the page was deep-linked (…/#live) the invitation starts already opened.
  // In that case the reveal must NOT run its "pin to top and lock scrolling"
  // routine, or it would drag the guest away from the section they linked to.
  // Captured in a ref on first render so it doesn't change mid-session.
  const skipReveal = useRef(opened)

  // Gate the entrance: until the doors finish opening, the page must NOT
  // scroll. The first scroll/tap triggers the reveal; we lock the body,
  // then release it once the reveal animation completes — so guests always
  // see the invitation unveil before moving on.
  useEffect(() => {
    if (opened) return
    const open = (e) => {
      if (e && e.cancelable) e.preventDefault()
      setOpened(true)
    }
    // block scroll attempts during the closed state
    window.addEventListener('wheel', open, { passive: false })
    window.addEventListener('touchmove', open, { passive: false })
    window.addEventListener('keydown', open)
    return () => {
      window.removeEventListener('wheel', open)
      window.removeEventListener('touchmove', open)
      window.removeEventListener('keydown', open)
    }
  }, [opened])

  // While the doors are parting, keep the page pinned at the top and locked,
  // then unlock after the reveal so the next scroll moves to the content.
  useEffect(() => {
    if (!opened) return
    if (skipReveal.current) return // deep-linked — leave the scroll position alone
    window.scrollTo(0, 0)
    document.body.style.overflow = 'hidden'
    const id = setTimeout(() => {
      document.body.style.overflow = ''
    }, 2200)
    return () => {
      clearTimeout(id)
      document.body.style.overflow = ''
    }
  }, [opened])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-plum-radial">
      {/* rotating mandala backdrop */}
      <MandalaBg className="pointer-events-none absolute left-1/2 top-1/2 h-[140vmin] w-[140vmin] -translate-x-1/2 -translate-y-1/2 text-gold/15" />

      {/* corner flourishes */}
      <CornerFlourish className="absolute left-3 top-3 h-20 w-20 text-gold/50 md:h-28 md:w-28" />
      <CornerFlourish className="absolute right-3 top-3 h-20 w-20 -scale-x-100 text-gold/50 md:h-28 md:w-28" />
      <CornerFlourish className="absolute bottom-3 left-3 h-20 w-20 -scale-y-100 text-gold/50 md:h-28 md:w-28" />
      <CornerFlourish className="absolute bottom-3 right-3 h-20 w-20 -scale-100 text-gold/50 md:h-28 md:w-28" />

      {/* ── The temple doors ── */}
      <AnimatePresence>
        {!opened && [
            <motion.div
              key="left-door"
              initial={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 1.4, ease: [0.7, 0, 0.3, 1] }}
              className="absolute inset-y-0 left-0 z-40 flex w-1/2 items-center justify-end jali"
              style={{
                backgroundImage: 'linear-gradient(135deg,#3A1A33,#2A1124 55%,#1C0A18)',
                boxShadow: 'inset -12px 0 40px rgba(0,0,0,0.6)',
              }}
            >
              <DoorCarving side="left" />
            </motion.div>,
            <motion.div
              key="right-door"
              initial={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 1.4, ease: [0.7, 0, 0.3, 1] }}
              className="absolute inset-y-0 right-0 z-40 flex w-1/2 items-center justify-start jali"
              style={{
                backgroundImage: 'linear-gradient(225deg,#3A1A33,#2A1124 55%,#1C0A18)',
                boxShadow: 'inset 12px 0 40px rgba(0,0,0,0.6)',
              }}
            >
              <DoorCarving side="right" />
            </motion.div>,

            /* Center seal + open button */
            <motion.button
              key="seal"
              onClick={() => setOpened(true)}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.5 }}
              className="absolute z-50 flex cursor-pointer flex-col items-center gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light"
              aria-label="Open the invitation"
            >
              <span className="flex h-32 w-32 items-center justify-center rounded-full border border-gold/60 bg-plum-soft text-gold shadow-glow animate-glow md:h-40 md:w-40">
                <Ganesha className="h-24 w-24 md:h-32 md:w-32" />
              </span>
              <span className="font-heading text-lg tracking-[0.3em] text-gold-light md:text-xl">
                {t(ui.hero.tapToOpen)}
              </span>
              <span className="font-sans text-sm text-cream/60">{t(ui.hero.awaits)}</span>
            </motion.button>,
          ]}
      </AnimatePresence>

      {/* thoranam garland — full width across the very top of the section,
          exactly like the footer's */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: opened ? 1 : 0 }}
        transition={{ delay: opened ? 1 : 0, duration: 0.8 }}
        className="pointer-events-none absolute inset-x-0 top-0 z-20"
      >
        <Thoranam className="h-16 w-full text-gold/80" />
      </motion.div>

      {/* three invocations — leftmost · middle · rightmost, opening the invite */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: opened ? 1 : 0 }}
        transition={{ delay: opened ? 1.1 : 0, duration: 0.8 }}
        className="absolute inset-x-0 top-14 z-20 flex justify-between px-6 font-sans text-sm text-gold-light sm:px-10 sm:text-base md:top-16 md:px-16 md:text-xl"
      >
        {invocation.trio.map((w, i) => (
          <span key={i}>{w}</span>
        ))}
      </motion.div>

      {/* ── The revealed invitation ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={opened ? { opacity: 1, scale: 1 } : { opacity: 0 }}
        transition={{ delay: opened ? 0.9 : 0, duration: 1 }}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
      >
        {/* Lord Ganesha + invocation */}
        {/* glow matches the footer's Ganesha, so the invocation breathes at
            both ends of the page */}
        <Ganesha className="mx-auto mt-6 h-20 w-20 animate-glow text-gold md:h-24 md:w-24" />
        <p className="mt-2 font-sans text-lg text-gold-light md:text-xl">{t(ui.hero.ganeshaInvocation)}</p>

        <Divider className="my-7 text-gold" />

        <p className="font-display text-lg italic text-cream/75 md:text-xl">
          {t(ui.hero.together)}
        </p>

        {/* Couple names — stacked (3 lines) on mobile, single row on desktop.
            Never the awkward 2-line split. */}
        <div className="mt-6 flex flex-col items-center justify-center gap-y-1 md:flex-row md:gap-x-5">
          <h1 className="whitespace-nowrap font-deco text-6xl leading-tight text-foil md:text-8xl">
            {t(couple.groom.name)}
          </h1>
          <span className="whitespace-nowrap font-display text-3xl text-gold-light md:text-4xl">
            {t(couple.weds)}
          </span>
          <h1 className="whitespace-nowrap font-deco text-6xl leading-tight text-foil md:text-8xl">
            {t(couple.bride.name)}
          </h1>
        </div>

        <Divider className="my-7 text-gold" />

        <p className="font-heading text-lg tracking-wide text-gold-light md:text-xl">
          {t(ui.hero.scratchHint)}
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={opened ? { opacity: 1 } : {}}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-10"
        >
          {/* Guests kept walking past this CTA, so it now shouts to be tapped:
              a real ball-bounce (squash included), a pulsing halo behind it,
              and a sweeping glint across the gold. */}
          <span className="relative inline-flex items-center justify-center">
            {/* pulsing halo — a soft gold glow growing and fading behind the
                button, so the eye is pulled here even in peripheral vision */}
            {opened && (
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute -inset-8 rounded-full"
                style={{
                  background:
                    'radial-gradient(closest-side, rgba(243,214,151,0.75), rgba(243,214,151,0.28) 55%, transparent 78%)',
                }}
                animate={{ opacity: [0.4, 1, 0.4], scale: [0.88, 1.18, 0.88] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
              />
            )}

            {/* the bouncing button — up fast, fall back with a squash on landing,
                then a beat of rest before the next bounce */}
            <motion.a
              href="#savethedate"
              className="btn-gold btn-animated relative z-10 inline-flex items-center gap-2 overflow-hidden rounded-full bg-gold-gradient px-8 py-3.5 font-heading text-lg tracking-widest text-plum-deep"
              animate={
                opened
                  ? {
                      y: [0, -22, 0, -9, 0, 0],
                      scaleX: [1, 0.97, 1.08, 0.99, 1.04, 1],
                      scaleY: [1, 1.05, 0.9, 1.02, 0.97, 1],
                    }
                  : {}
              }
              transition={{
                duration: 1.5,
                times: [0, 0.28, 0.52, 0.7, 0.85, 1],
                repeat: Infinity,
                repeatDelay: 0.9,
                ease: 'easeOut',
                delay: 2,
              }}
              style={{ transformOrigin: 'center bottom' }}
            >
              {/* glint — a band of light sweeping across the gold foil */}
              {opened && (
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 w-1/3"
                  style={{
                    background:
                      'linear-gradient(100deg, transparent, rgba(255,255,255,0.9), transparent)',
                  }}
                  initial={{ left: '-40%' }}
                  animate={{ left: '130%' }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    repeatDelay: 1.2,
                    ease: 'easeInOut',
                    delay: 2.4,
                  }}
                />
              )}

              <span className="relative z-10">{t(ui.hero.cta)}</span>
              {/* the arrow bobs downward, pointing at what the tap reveals */}
              <motion.span
                aria-hidden="true"
                className="relative z-10"
                animate={opened ? { y: [0, 4, 0] } : {}}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              >
                ↓
              </motion.span>
            </motion.a>

          </span>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Ornamental carving shown on each door panel
function DoorCarving({ side }) {
  return (
    <div
      className={`flex h-full flex-col items-center justify-center gap-8 px-4 text-gold ${
        side === 'left' ? 'pr-2' : 'pl-2'
      }`}
    >
      <div className="h-2/3 w-px bg-gold/30" />
      <svg viewBox="0 0 60 200" className="h-2/3 w-12 text-gold/60" fill="none" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <g key={i} transform={`translate(0 ${i * 34 + 10})`}>
            <path d="M30 0c8 6 8 18 0 26-8-8-8-20 0-26z" stroke="currentColor" strokeWidth="1" opacity="0.7" />
            <circle cx="30" cy="13" r="3" fill="currentColor" opacity="0.6" />
          </g>
        ))}
      </svg>
      <div className="h-2/3 w-px bg-gold/30" />
    </div>
  )
}
