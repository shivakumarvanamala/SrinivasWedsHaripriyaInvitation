import { useLang } from '../i18n'

// Always-visible pill toggle: తెలుగు | English. Telugu is the default.
export default function LanguageToggle() {
  const { lang, setLang } = useLang()

  const Btn = ({ code, label, font }) => {
    const active = lang === code
    return (
      <button
        onClick={() => setLang(code)}
        aria-pressed={active}
        className={`cursor-pointer rounded-full px-3 py-1 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light ${font} ${
          active ? 'bg-gold-gradient text-plum-deep shadow-glow' : 'text-gold-light hover:bg-gold/15 hover:text-foil'
        }`}
      >
        {label}
      </button>
    )
  }

  return (
    <div className="fixed bottom-5 left-5 z-50 flex items-center gap-1 rounded-full border border-gold/40 bg-plum-deep/95 p-1 shadow-card backdrop-blur">
      <Btn code="te" label="తెలుగు" font="font-telugu" />
      <span className="text-gold/40">|</span>
      <Btn code="en" label="English" font="font-heading" />
    </div>
  )
}
