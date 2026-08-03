import { motion } from 'framer-motion'
import { Divider, CoupleMotif } from '../components/Motifs'
import { useLang } from '../i18n'

// Person card — the NAME is the hero.
// There is deliberately no monogram/photo frame: a lone initial (శ్రీ / హ / S / H)
// floating in an arch read as an arbitrary glyph rather than a monogram —
// especially in Telugu, which has no initials convention. The card now leads
// with a small gold "Groom / Bride" label, then the name at display size.
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
      // `min-w-0` + `md:flex-1` stop the nowrap name from stretching the card:
      // without them the bride's longer Telugu name made her card ~50px wider
      // than the groom's once they sat side by side.
      className="royal-card flex w-full min-w-0 max-w-md flex-col items-center justify-center px-5 py-12 text-center sm:px-8 md:flex-1 md:py-14"
    >
      {/* వరుడు / వధువు — Groom / Bride.
          Set between two short gold hairlines, echoing the `gold-rule` divider
          used lower in this same card so the treatment reads as native. Small
          and quiet on purpose — the name below is the hero. */}
      {person.role && t(person.role) && (
        <div className="flex w-full items-center justify-center gap-3">
          <span className="gold-rule w-10 sm:w-14" />
          <span
            // Telugu has no uppercase, and wide letter-spacing pulls its
            // conjuncts apart — so the small-caps treatment is English only
            // (same approach as the Save-the-Date card).
            className={`whitespace-nowrap text-gold-light ${
              lang === 'en'
                ? 'font-heading text-xs uppercase tracking-[0.28em] sm:text-sm'
                : 'font-sans text-sm tracking-wide sm:text-base'
            }`}
          >
            {t(person.role)}
          </span>
          <span className="gold-rule w-10 sm:w-14" />
        </div>
      )}

      {/* THE HERO — the name, at display size.
          honorific (చి. / చి.ల.సౌ.) sits inline at HALF the name's font size.
          Sizes are CAPPED per breakpoint so the LONGEST name
          (చి.ల.సౌ. రామిని హరి ప్రియ — the widest string on the site) stays on ONE
          line without overflowing the card: at 320px the card leaves only
          ~219px of inner width, so the base size must stay small. Both cards
          share these classes so the two names always render identically.
          Verified at 320 / 390 / 768 / 1280px — do not raise the base size
          without re-checking the bride's Telugu name at 320px. */}
      <h3 className="mt-4 whitespace-nowrap font-deco text-[1.5rem] leading-tight text-foil min-[360px]:text-[1.75rem] sm:text-[2.6rem] md:text-[2.5rem] lg:text-[3rem]">
        {person.honorific && t(person.honorific) && (
          <span className="mr-1.5 align-baseline text-[0.5em]">{t(person.honorific)}</span>
        )}
        {t(person.fullName)}
      </h3>
      <p className="mt-4 font-sans text-sm leading-relaxed text-cream/70">{t(person.about)}</p>
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
        {/* slow glow — the couple's emblem, so a little life suits it */}
        {/* groom & bride together under a shared garland */}
        <CoupleMotif className="mx-auto h-20 w-24 text-gold" />
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
