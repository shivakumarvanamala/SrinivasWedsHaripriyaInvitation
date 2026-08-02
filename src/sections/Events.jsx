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
        <h2 className="font-heading text-3xl leading-normal text-foil md:text-5xl">{t(ui.eventsHeading)}</h2>
        <p className="mt-2 font-display text-lg italic text-cream/65">{t(ui.eventsIntro)}</p>
        <Divider className="my-10 text-gold" />

        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((ev, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.12 }}
              className="royal-card flex flex-col overflow-hidden p-0 text-center"
            >
              {/* live map preview across the top — same treatment as the
                  Vivaha Vedika card */}
              {ev.embedUrl && (
                <iframe
                  title={`${t(ev.name)} location`}
                  src={ev.embedUrl}
                  className="h-48 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              )}

              <div className="relative flex flex-1 flex-col items-center px-6 pb-7 pt-0">
                {/* icon straddles the map edge so it reads as a medallion */}
                <span className="-mt-8 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-plum-soft text-gold shadow-glow">
                  <EventIcon name={ev.icon} className="h-10 w-10" />
                </span>

                <h3 className="mt-5 font-heading text-2xl leading-normal text-foil">{t(ev.name)}</h3>
                <p className="mt-1.5 font-display text-base italic leading-relaxed text-cream/55">
                  {t(ev.tagline)}
                </p>

                <span className="gold-rule my-5 w-1/2" />

                <p className="font-sans text-sm font-semibold leading-relaxed text-cream">{t(ev.date)}</p>
                <p className="mt-1 font-sans text-sm font-semibold leading-relaxed text-gold-light">
                  {t(ev.time)}
                </p>

                <p className="mt-4 font-sans text-sm font-medium leading-relaxed text-cream/80">
                  {t(ev.venue)}
                </p>

                {ev.mapUrl && (
                  <a
                    href={ev.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-gold mt-auto inline-flex items-center gap-1 rounded-full bg-gold-gradient px-4 py-2 text-xs font-semibold tracking-wide text-plum-deep"
                  >
                    {t(ui.viewMap)}
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
