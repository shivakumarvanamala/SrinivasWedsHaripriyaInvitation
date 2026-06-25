import { motion } from 'framer-motion'
import { Divider, Mangalsutra } from '../components/Motifs'
import ArchFrame from '../components/ArchFrame'
import { useLang } from '../i18n'

// Person card with an arched (temple-mehrab) photo frame.
// `extra` is an optional bilingual line (e.g. groom's brothers) shown at the bottom.
function PersonCard({ person, delay, extra }) {
  const { t } = useLang()
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className="royal-card flex w-full max-w-md flex-col items-center p-8 text-center"
    >
      <ArchFrame src={person.photo} alt={t(person.fullName)} fallbackChar={t(person.monogram)} />
      <h3 className="mt-5 font-deco text-5xl text-foil">{t(person.fullName)}</h3>
      <p className="mt-3 font-sans text-sm leading-relaxed text-cream/70">{t(person.about)}</p>
      <span className="gold-rule mt-5 w-2/3" />
      <p className="mt-4 font-display text-sm italic text-cream/55">{t(person.relation)}</p>
      <p className="whitespace-nowrap font-display text-[0.82rem] font-semibold text-cream/80 sm:text-sm">
        {t(person.parents)}
      </p>
      {extra && t(extra) && (
        <p className="mt-2 font-sans text-xs text-gold/80">{t(extra)}</p>
      )}
    </motion.div>
  )
}

export default function Couple({ content }) {
  const { t } = useLang()
  const { couple, ui } = content
  return (
    <section id="couple" className="section-pad relative bg-plum jali">
      <div className="mx-auto max-w-5xl text-center">
        <Mangalsutra className="mx-auto h-16 w-20 text-gold" />
        <h2 className="mt-3 font-heading text-3xl text-foil md:text-5xl">{t(ui.coupleHeading)}</h2>
        <Divider className="my-8 text-gold" />

        <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:items-stretch md:gap-8">
          <PersonCard person={couple.groom} delay={0} extra={content.groomBrothers} />

          <div className="flex items-center justify-center">
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-deco text-6xl text-gold-light md:text-7xl"
            >
              &amp;
            </motion.span>
          </div>

          <PersonCard person={couple.bride} delay={0.2} extra={content.brideSisters} />
        </div>
      </div>
    </section>
  )
}
