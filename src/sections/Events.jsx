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
          {events.map((ev, i) => {
            // The event marked `highlight: true` in content.js is THE wedding.
            // It previously looked identical to the other ceremonies, so it got
            // lost among them. It now reads as the centrepiece: brighter gold
            // frame + glow, a ribbon above the title, a taller map, larger type,
            // and it spans both columns on tablet so it can't be mistaken for a
            // sibling card. Order stays chronological.
            const hero = !!ev.highlight
            return (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.12 }}
              // No scale transform here: scaling a grid item makes it overlap
              // its neighbours. Emphasis comes from the ring, glow, brighter
              // border and larger internals instead.
              className={`royal-card flex flex-col overflow-hidden p-0 text-center ${
                hero ? 'relative ring-1 ring-gold/60 shadow-glow sm:col-span-2 lg:col-span-1' : ''
              }`}
              style={hero ? { borderColor: 'rgba(229,193,108,0.85)' } : undefined}
            >
              {/* live map preview across the top — taller on the hero card */}
              {ev.embedUrl && (
                <iframe
                  title={`${t(ev.name)} location`}
                  src={ev.embedUrl}
                  className={`w-full border-0 ${hero ? 'h-56 sm:h-64 lg:h-52' : 'h-48'}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              )}

              <div className={`relative flex flex-1 flex-col items-center px-6 pt-0 ${hero ? 'pb-8' : 'pb-7'}`}>
                {/* icon straddles the map edge so it reads as a medallion */}
                <span
                  className={`-mt-8 flex shrink-0 items-center justify-center rounded-full bg-plum-soft text-gold shadow-glow ${
                    hero ? 'h-20 w-20 border-2 border-gold/70' : 'h-16 w-16 border border-gold/50'
                  }`}
                >
                  <EventIcon name={ev.icon} className={hero ? 'h-12 w-12' : 'h-10 w-10'} />
                </span>

                <h3
                  className={`font-heading leading-normal text-foil ${
                    hero ? 'mt-5 text-3xl md:text-[2.1rem]' : 'mt-5 text-2xl'
                  }`}
                >
                  {t(ev.name)}
                </h3>
                <p
                  className={`mt-1.5 font-display italic leading-relaxed ${
                    hero ? 'text-lg text-cream/70' : 'text-base text-cream/55'
                  }`}
                >
                  {t(ev.tagline)}
                </p>

                <span className={`gold-rule my-5 ${hero ? 'w-2/3' : 'w-1/2'}`} />

                <p
                  className={`font-sans font-semibold leading-relaxed text-cream ${
                    hero ? 'text-base' : 'text-sm'
                  }`}
                >
                  {t(ev.date)}
                </p>
                <p
                  className={`mt-1 font-sans font-semibold leading-relaxed text-gold-light ${
                    hero ? 'text-base' : 'text-sm'
                  }`}
                >
                  {t(ev.time)}
                </p>

                <p
                  className={`mt-4 font-sans font-medium leading-relaxed ${
                    hero ? 'text-[0.95rem] text-cream/90' : 'text-sm text-cream/80'
                  }`}
                >
                  {t(ev.venue)}
                </p>

                {/* "Lunch follows" — carried over from the retired Vivaha Vedika
                    section so that detail isn't lost */}
                {hero && ui.lunchNote && t(ui.lunchNote) && (
                  <p className="mt-2 font-display text-base italic text-gold-light">{t(ui.lunchNote)}</p>
                )}

                {ev.mapUrl && (
                  <a
                    href={ev.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`btn-gold mt-auto inline-flex items-center gap-1 rounded-full bg-gold-gradient font-semibold tracking-wide text-plum-deep ${
                      hero ? 'px-6 py-2.5 text-sm' : 'px-4 py-2 text-xs'
                    }`}
                  >
                    {t(ui.viewMap)}
                  </a>
                )}
              </div>
            </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
