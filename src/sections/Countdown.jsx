import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Divider } from '../components/Motifs'
import { useLang } from '../i18n'

function getRemaining(target) {
  const total = new Date(target).getTime() - Date.now()
  const clamp = Math.max(total, 0)
  return {
    total: clamp,
    days: Math.floor(clamp / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamp / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamp / (1000 * 60)) % 60),
    seconds: Math.floor((clamp / 1000) % 60),
  }
}

export default function Countdown({ content }) {
  const { t } = useLang()
  const { weddingDate, weddingDateLabel, ui } = content
  const cd = ui.countdown
  const [time, setTime] = useState(() => getRemaining(weddingDate))

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining(weddingDate)), 1000)
    return () => clearInterval(id)
  }, [weddingDate])

  const units = [
    { label: t(cd.days), value: time.days },
    { label: t(cd.hours), value: time.hours },
    { label: t(cd.minutes), value: time.minutes },
    { label: t(cd.seconds), value: time.seconds },
  ]

  const isHere = time.total === 0

  return (
    <section id="countdown" className="section-pad relative bg-plum-deep-radial jali">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-heading text-3xl leading-normal text-foil md:text-5xl"
        >
          {isHere ? t(cd.headingHere) : t(cd.heading)}
        </motion.h2>
        <p className="mt-2 font-display text-lg italic text-gold-light">{t(weddingDateLabel)}</p>

        <Divider className="my-8 text-gold" />

        {/* All four units stay on ONE row (even on mobile), separated by colons */}
        <div className="flex flex-nowrap items-center justify-center gap-1 sm:gap-3 md:gap-4">
          {units.map((u, i) => (
            <div key={u.label} className="flex items-center gap-1 sm:gap-3 md:gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="royal-card flex h-20 w-[4.2rem] flex-col items-center justify-center sm:h-28 sm:w-24 md:h-32 md:w-28"
              >
                <span className="font-heading text-2xl text-foil sm:text-4xl md:text-5xl tabular-nums">
                  {String(u.value).padStart(2, '0')}
                </span>
                <span className="mt-0.5 text-[8px] uppercase tracking-[0.15em] text-gold/70 sm:text-[10px] md:text-xs">
                  {u.label}
                </span>
              </motion.div>
              {/* colon between boxes, not after the last one */}
              {i < units.length - 1 && (
                <span className="font-heading text-2xl text-gold/70 sm:text-4xl md:text-5xl">:</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
