import { motion } from 'framer-motion'
import { Divider, EventIcon, Thoranam } from '../components/Motifs'
import { useLang } from '../i18n'

export default function Events({ content }) {
  const { t } = useLang()
  const { events, ui } = content
  return (
    <section id="events" className="section-pad relative bg-plum jali">
      {/* thoranam strung across the top of the section */}
      <Thoranam className="pointer-events-none absolute inset-x-0 top-0 h-14 w-full text-gold/80" />

      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-heading text-3xl text-foil md:text-5xl">{t(ui.eventsHeading)}</h2>
        <p className="mt-2 font-display text-lg italic text-cream/65">{t(ui.eventsIntro)}</p>
        <Divider className="my-10 text-gold" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((ev, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.12 }}
              className="royal-card flex flex-col items-center p-7 text-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 bg-plum-soft text-gold shadow-glow">
                <EventIcon name={ev.icon} className="h-10 w-10" />
              </span>

              <h3 className="mt-4 font-heading text-2xl text-foil">{t(ev.name)}</h3>
              <p className="font-display text-base italic text-cream/55">{t(ev.tagline)}</p>

              <span className="gold-rule my-4 w-1/2" />

              <p className="font-sans text-sm font-semibold text-cream">{t(ev.date)}</p>
              <p className="font-sans text-sm font-semibold text-gold-light">{t(ev.time)}</p>

              <p className="mt-3 font-sans text-sm font-medium text-cream/80">{t(ev.venue)}</p>

              {ev.mapUrl && (
                <a
                  href={ev.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1 rounded-full bg-gold-gradient px-4 py-1.5 text-xs font-semibold tracking-wide text-plum-deep shadow-glow transition hover:scale-105"
                >
                  {t(ui.viewMap)}
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
