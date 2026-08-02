import { motion } from 'framer-motion'
import { Divider, Mandapam } from '../components/Motifs'
import { useLang } from '../i18n'

export default function Venue({ content }) {
  const { t } = useLang()
  const { venue, ui } = content
  return (
    <section id="venue" className="section-pad relative bg-plum-deep-radial jali">
      <div className="mx-auto max-w-4xl text-center">
        <Mandapam className="mx-auto h-16 w-16 text-gold" />
        <h2 className="mt-3 font-heading text-3xl leading-normal text-foil md:text-5xl">{t(ui.venueHeading)}</h2>
        <Divider className="my-8 text-gold" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="royal-card overflow-hidden p-0"
        >
          {venue.embedUrl && (
            <iframe
              title="Venue location"
              src={venue.embedUrl}
              className="h-72 w-full border-0 md:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          )}

          <div className="p-7">
            <h3 className="font-heading text-2xl text-foil">{t(venue.name)}</h3>
            <p className="mt-2 font-sans text-sm text-cream/70">{t(venue.address)}</p>
            {ui.lunchNote && t(ui.lunchNote) && (
              <p className="mt-3 font-display text-base italic text-gold-light">{t(ui.lunchNote)}</p>
            )}
            {venue.directionsUrl && (
              <a
                href={venue.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-gold mt-5 inline-block rounded-full bg-gold-gradient px-6 py-2.5 font-heading tracking-widest text-plum-deep"
              >
                {t(ui.directions)}
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
