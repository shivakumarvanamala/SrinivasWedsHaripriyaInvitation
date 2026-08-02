import { motion } from 'framer-motion'
import { Divider, Mangalsutra } from '../components/Motifs'
import ArchFrame from '../components/ArchFrame'
import { useLang } from '../i18n'

// Person card with an arched (temple-mehrab) photo frame.
function PersonCard({ person, delay }) {
  const { t, lang } = useLang()
  // Telugu reads "<parents> ల ప్రథమ పుత్రుడు" — parents FIRST, relation after.
  // English reads "Elder son of / <parents>" — relation first. Same two lines,
  // just swapped, so the card layout stays identical in both languages.
  const parentsLine = (
    <p className="whitespace-nowrap font-display text-[0.82rem] font-semibold text-cream/80 sm:text-sm">
      {t(person.parents)}
    </p>
  )
  const relationLine = (
    <p className="font-display text-sm italic text-cream/55">{t(person.relation)}</p>
  )
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className="royal-card flex w-full max-w-md flex-col items-center px-5 py-8 text-center sm:px-8"
    >
      <ArchFrame src={person.photo} alt={t(person.fullName)} fallbackChar={t(person.monogram)} />
      {/* honorific (చి. / చి.ల.సౌ.) sits inline at HALF the name's font size.
          Size is capped so the LONGEST name (చి.ల.సౌ. రామిని హరి ప్రియ) stays on
          ONE line at every breakpoint — both cards share these classes so the
          groom's and bride's names always render identically. */}
      <h3 className="mt-5 whitespace-nowrap font-deco text-[1.55rem] leading-tight text-foil min-[360px]:text-[1.9rem] sm:text-[2.35rem] md:text-[2.2rem] lg:text-[2.55rem]">
        {person.honorific && t(person.honorific) && (
          <span className="mr-1.5 align-baseline text-[0.5em]">{t(person.honorific)}</span>
        )}
        {t(person.fullName)}
      </h3>
      <p className="mt-3 font-sans text-sm leading-relaxed text-cream/70">{t(person.about)}</p>
      <span className="gold-rule mt-5 w-2/3" />
      <div className="mt-4 flex flex-col items-center">
        {lang === 'te' ? (
          <>
            {parentsLine}
            {relationLine}
          </>
        ) : (
          <>
            {relationLine}
            {parentsLine}
          </>
        )}
      </div>
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
        <h2 className="mt-3 font-heading text-3xl leading-normal text-foil md:text-5xl">{t(ui.coupleHeading)}</h2>
        <Divider className="my-8 text-gold" />

        <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:items-stretch md:gap-8">
          <PersonCard person={couple.groom} delay={0} />

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

          <PersonCard person={couple.bride} delay={0.2} />
        </div>
      </div>
    </section>
  )
}
