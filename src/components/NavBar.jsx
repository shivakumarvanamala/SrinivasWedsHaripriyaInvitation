import { useEffect, useState } from 'react'
import { useLang } from '../i18n'

// 'saptapadi' and 'venue' are omitted while those sections are disabled in
// App.jsx — the links would otherwise scroll to elements that no longer exist.
// Re-add them here (saptapadi between 'events' and 'live'; venue after it)
// when those sections are re-enabled.
const linkIds = ['savethedate', 'couple', 'families', 'events', 'live', 'contact']

// Sections that can be switched off from content.js (or remotely via the Gist).
// Their nav link must disappear with them, otherwise it scrolls to nothing.
const togglable = { families: 'families', live: 'live', contact: 'contact' }

// Sticky nav that fades in after the user scrolls past the hero.
// `content` is passed in (rather than imported) so it carries any remote
// overrides — importing it directly would pin the nav to the baked-in values.
export default function NavBar({ content }) {
  const { t } = useLang()
  const ui = content.ui
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.85)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = linkIds
    .filter((id) => {
      const key = togglable[id]
      return key ? content[key]?.show !== false : true
    })
    .map((id) => ({ id, label: t(ui.nav[id]) }))

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        show ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between border-b border-gold/30 bg-plum-deep/90 px-6 py-3 shadow-card backdrop-blur">
        <a href="#" className="font-deco text-3xl text-foil">
          {t(ui.brand)}
        </a>

        {/* desktop links */}
        <div className="hidden gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="font-heading text-sm tracking-wide text-gold-light transition hover:text-foil"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="text-gold-light md:hidden"
          aria-label="Toggle menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* mobile dropdown */}
      {open && (
        <div className="flex flex-col gap-1 bg-plum-deep/95 px-6 py-3 shadow-card backdrop-blur md:hidden">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="border-b border-gold/20 py-2 font-heading text-gold-light"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
