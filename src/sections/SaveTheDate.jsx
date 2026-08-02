import { useState } from 'react'
import { motion } from 'framer-motion'
import ScratchCard from '../components/ScratchCard'
import Confetti from '../components/Confetti'
import { Divider } from '../components/Motifs'
import { useLang } from '../i18n'

export default function SaveTheDate({ content }) {
  const { t, lang } = useLang()
  const { weddingDateLabel, muhuratLabel, ui } = content
  const std = ui.saveTheDate
  const [fired, setFired] = useState(false)

  return (
    <section id="savethedate" className="section-pad relative overflow-hidden bg-plum-deep-radial jali">
      <div className="relative mx-auto max-w-2xl text-center text-cream">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl leading-normal text-foil md:text-5xl"
        >
          {t(std.heading)}
        </motion.h2>
        <p className="mt-2 font-display text-lg italic text-cream/75">{t(std.subtitle)}</p>

        <Divider className="my-8 text-gold" />

        <div className="relative flex justify-center">
          <Confetti fire={fired} />
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            // fast, vibrant jiggle to grab attention; stops once revealed
            animate={
              fired
                ? { rotate: 0, scale: 1, x: 0 }
                : {
                    rotate: [0, -5, 5, -5, 5, -3, 3, 0],
                    x: [0, -5, 5, -5, 5, -2, 2, 0],
                    scale: [1, 1.04, 1, 1.04, 1],
                  }
            }
            // eslint-disable-next-line
            transition={fired ? { duration: 0.4 } : { duration: 0.6, repeat: Infinity, repeatDelay: 1.1, ease: 'easeInOut' }}
            className="rounded-2xl p-1.5 shadow-glow"
            style={{ background: 'linear-gradient(135deg,#FFE08A,#F4B400,#C98A00)' }}
          >
            {/* `key={lang}` re-mounts the foil cleanly when the language toggles */}
            <ScratchCard
              key={lang}
              width={340}
              height={210}
              hint={t(std.scratchHint)}
              onComplete={() => setFired(true)}
            >
              <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl bg-plum-soft px-4 text-center">
                <span className={`font-display text-base text-gold-light ${lang === 'en' ? 'uppercase tracking-[0.25em]' : ''}`}>
                  {t(std.revealedLabel)}
                </span>
                <span className="mt-2 font-heading text-2xl text-foil md:text-3xl">
                  {t(weddingDateLabel)}
                </span>
                {/* muhurat detail at HALF the date's font size (2xl→0.75rem, 3xl→0.9375rem) */}
                <span className="mt-2 font-sans text-[0.75rem] leading-snug text-cream/75 md:text-[0.9375rem]">
                  {t(muhuratLabel)}
                </span>
              </div>
            </ScratchCard>
          </motion.div>
        </div>

        <motion.p
          animate={fired ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.5 }}
          className="mt-6 font-display text-xl text-cream"
        >
          {t(std.celebrate)}
        </motion.p>
      </div>
    </section>
  )
}
