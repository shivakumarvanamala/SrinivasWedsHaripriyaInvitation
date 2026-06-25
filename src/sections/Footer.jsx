import { motion } from 'framer-motion'
import { Ganesha, Thoranam } from '../components/Motifs'
import { useLang } from '../i18n'

export default function Footer({ content }) {
  const { t } = useLang()
  const { footer, couple } = content
  return (
    <footer
      className="relative overflow-hidden px-6 py-16 text-center text-cream"
      style={{ backgroundImage: 'linear-gradient(135deg,#2A1124,#1C0A18 70%,#0F0510)' }}
    >
      <Thoranam className="pointer-events-none absolute inset-x-0 top-0 h-14 w-full text-gold/70" />
      <div className="mx-auto max-w-2xl">
        <Ganesha className="mx-auto mt-6 h-16 w-16 text-gold-light animate-glow" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-6 font-display text-2xl italic text-cream/90 md:text-3xl"
        >
          “{t(footer.message)}”
        </motion.p>

        <div className="my-8 flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-gold/50 sm:w-16" />
          <span className="whitespace-nowrap font-deco text-3xl text-gold-light">
            {t(couple.groom.name)} &amp; {t(couple.bride.name)}
          </span>
          <span className="h-px w-10 bg-gold/50 sm:w-16" />
        </div>

        {footer.hashtag && (
          <p className="font-heading text-xl tracking-[0.2em] text-gold-light">{footer.hashtag}</p>
        )}

        <p className="mt-8 whitespace-pre-line font-display text-base text-cream/70">
          {t(footer.fromFamilies)}
        </p>
      </div>
    </footer>
  )
}
