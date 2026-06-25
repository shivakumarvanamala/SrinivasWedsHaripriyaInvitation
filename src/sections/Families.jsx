import { motion } from 'framer-motion'
import { Divider, Kalash, GroomIcon, BrideIcon } from '../components/Motifs'
import { useLang } from '../i18n'

function FamilyCard({ side, icon, delay }) {
  const { t } = useLang()
  const Icon = icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="royal-card w-full max-w-md p-6 text-center md:p-8"
    >
      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 bg-plum-soft text-gold shadow-glow">
        <Icon className="h-10 w-10" />
      </span>
      <h3 className="mt-4 font-heading text-2xl text-foil">{t(side.title)}</h3>
      <p className="mt-1 font-display text-base italic text-cream/60">{t(side.note)}</p>
      <span className="gold-rule mx-auto my-4 w-2/3" />
      {/* both parent names on ONE line — never wrapping mid-name */}
      <p className="whitespace-nowrap font-sans text-[0.82rem] font-semibold text-cream sm:text-sm">
        {t(side.father)} <span className="text-gold-light">&amp;</span> {t(side.mother)}
      </p>
    </motion.div>
  )
}

export default function Families({ content }) {
  const { t } = useLang()
  const fam = content.families
  if (!fam?.show) return null

  return (
    <section id="families" className="section-pad relative bg-plum-deep-radial jali">
      <div className="mx-auto max-w-5xl text-center">
        <Kalash className="mx-auto h-16 w-16 text-gold" />
        <h2 className="mt-3 font-heading text-3xl text-foil md:text-5xl">{t(fam.heading)}</h2>
        <p className="mx-auto mt-3 max-w-xl font-display text-lg italic text-cream/70">{t(fam.intro)}</p>

        <Divider className="my-10 text-gold" />

        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:items-stretch">
          <FamilyCard side={fam.groomSide} icon={GroomIcon} delay={0} />

          <div className="flex items-center justify-center">
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/60 bg-gold-gradient font-deco text-3xl text-plum-deep shadow-glow"
            >
              ❀
            </motion.span>
          </div>

          <FamilyCard side={fam.brideSide} icon={BrideIcon} delay={0.2} />
        </div>

        {fam.blessing && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-10 max-w-2xl font-display text-xl italic text-gold-light"
          >
            “{t(fam.blessing)}”
          </motion.p>
        )}
      </div>
    </section>
  )
}
