import { useEffect, useState } from 'react'
import baseContent from './content'
import useRemoteConfig from './useRemoteConfig'
import { LanguageProvider, useLang } from './i18n'
import NavBar from './components/NavBar'
import FallingPetals from './components/FallingPetals'
import MusicToggle from './components/MusicToggle'
import LanguageToggle from './components/LanguageToggle'
import Hero from './sections/Hero'
import SaveTheDate from './sections/SaveTheDate'
import Countdown from './sections/Countdown'
import Couple from './sections/Couple'
import Families from './sections/Families'
import Events from './sections/Events'
// Saptapadi is temporarily disabled — its seven vow rows made the page very
// tall. The section code is untouched in ./sections/Saptapadi.jsx; to bring it
// back, un-comment this import, the <Saptapadi /> line below, and the
// 'saptapadi' entry in components/NavBar.jsx.
// import Saptapadi from './sections/Saptapadi'
// Venue ("Vivaha Vedika") is disabled — it duplicated the Wedding card in the
// Events section (same venue, same map). The Wedding card now carries the venue
// details and is styled as the highlight of that section. Code is untouched in
// ./sections/Venue.jsx; to restore, un-comment this import, the <Venue /> line
// below, and the 'venue' entry in components/NavBar.jsx.
// import Venue from './sections/Venue'
import LiveStream from './sections/LiveStream'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

// A deep link like  …/#live  must land ON that section. Normally the temple
// doors gate the page and snap the guest back to the top, which would break any
// shared link or QR code — so when the URL carries a hash we treat the
// invitation as already opened and skip the door animation entirely.
// Read once at module load, BEFORE first render, so the initial state is right.
const DEEP_LINK_ID = typeof window !== 'undefined' ? window.location.hash.replace('#', '') : ''

// Inner shell needs the language context to set the lang-* class
// that drives the Telugu font swap across the whole page.
function Shell() {
  const { lang, t } = useLang()
  // Everything below reads from `content`, which is the baked-in content with any
  // remote (Gist) overrides merged on top. Falls back to the baked-in values if
  // no configUrl is set or the remote file can't be read.
  const content = useRemoteConfig(baseContent)
  // `opened` flips true the moment the temple doors begin opening — the music
  // starts exactly then (a valid user gesture, so autoplay is allowed).
  // Deep links (…/#live) start opened so the doors never intercept them.
  const [opened, setOpened] = useState(Boolean(DEEP_LINK_ID))
  // Set when the guest starts the live stream, so the background song mutes
  // instead of playing underneath the ceremony audio.
  const [streaming, setStreaming] = useState(false)

  // Land the guest on the linked section. The browser's own hash jump happens
  // before React has painted these sections, so it lands nowhere — we re-scroll
  // after mount. Two frames + a short retry cover late layout shifts (webfonts
  // and the map iframes both change heights above the fold).
  useEffect(() => {
    if (!DEEP_LINK_ID) return
    const go = () => {
      const el = document.getElementById(DEEP_LINK_ID)
      if (el) el.scrollIntoView({ block: 'start' })
    }
    requestAnimationFrame(() => requestAnimationFrame(go))
    const t1 = setTimeout(go, 350)
    const t2 = setTimeout(go, 1200)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])
  return (
    <div className={`lang-${lang} relative min-h-screen overflow-x-hidden`}>
      <FallingPetals />
      <NavBar content={content} />

      <main className="relative z-10">
        <Hero content={content} opened={opened} setOpened={setOpened} />
        <SaveTheDate content={content} />
        <Countdown content={content} />
        <Couple content={content} />
        <Families content={content} />
        <Events content={content} />
        {/* <Saptapadi content={content} /> */}
        {/* <Venue content={content} /> */}
        <LiveStream content={content} onActivate={() => setStreaming(true)} />
        <Contact content={content} />
      </main>

      <Footer content={content} />

      <MusicToggle
        src={content.music.src}
        label={t(content.music.label)}
        start={opened}
        forceMute={streaming}
      />
      <LanguageToggle />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider defaultLang="te">
      <Shell />
    </LanguageProvider>
  )
}
