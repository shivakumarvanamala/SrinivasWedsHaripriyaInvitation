import { motion } from 'framer-motion'
import { Divider } from '../components/Motifs'
import { useLang } from '../i18n'

// WhatsApp glyph
function WhatsAppIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.2 1.6 6L4 29l8.2-1.6c1.7.9 3.7 1.4 5.8 1.4 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-4.3.8.8-4.2-.3-.4C5.6 17.8 5.2 16 5.2 15 5.2 9.1 10 4.2 16 4.2S26.8 9.1 26.8 15 22 24.8 16 24.8z" />
      <path d="M22.3 18.3c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5 0-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6 2 .8 2.7.9 3.7.8.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z" />
    </svg>
  )
}

// Phone glyph
function PhoneIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1l-2.2 2.2z" />
    </svg>
  )
}

function PersonCard({ person, cc, delay }) {
  const { t } = useLang()
  const wa = `https://wa.me/${cc}${person.phone}`
  const tel = `tel:+${cc}${person.phone}`
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="royal-card flex w-full max-w-xs items-center justify-between gap-3 px-4 py-3"
    >
      <div className="text-left">
        <h3 className="font-heading text-base text-foil">{t(person.name)}</h3>
        <p className="font-display text-xs italic text-cream/55">{t(person.role)}</p>
      </div>
      {/* compact icon buttons — no number shown */}
      <div className="flex items-center gap-2">
        <a
          href={wa}
          target="_blank"
          rel="noreferrer"
          aria-label={`WhatsApp ${t(person.name)}`}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-plum-deep shadow-glow transition hover:scale-110"
        >
          <WhatsAppIcon className="h-5 w-5" />
        </a>
        <a
          href={tel}
          aria-label={`Call ${t(person.name)}`}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-gradient text-plum-deep shadow-glow transition hover:scale-110"
        >
          <PhoneIcon className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  )
}

export default function Contact({ content }) {
  const { t } = useLang()
  const c = content.contact
  if (!c?.show) return null

  return (
    <section id="contact" className="relative overflow-hidden bg-plum jali px-6 py-12 md:py-16">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-heading text-2xl text-foil md:text-4xl">{t(c.heading)}</h2>
        <p className="mx-auto mt-2 max-w-xl font-display text-base italic text-cream/70">{t(c.intro)}</p>
        <Divider className="my-6 text-gold" />

        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-3 md:flex-row md:flex-wrap">
          {c.people.map((p, i) => (
            <PersonCard key={i} person={p} cc={c.cc} delay={(i % 3) * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
