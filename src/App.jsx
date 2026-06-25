import { useState } from 'react'
import content from './content'
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
import Saptapadi from './sections/Saptapadi'
import Venue from './sections/Venue'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

// Inner shell needs the language context to set the lang-* class
// that drives the Telugu font swap across the whole page.
function Shell() {
  const { lang, t } = useLang()
  // `opened` flips true the moment the temple doors begin opening — the music
  // starts exactly then (a valid user gesture, so autoplay is allowed).
  const [opened, setOpened] = useState(false)
  return (
    <div className={`lang-${lang} relative min-h-screen overflow-x-hidden`}>
      <FallingPetals />
      <NavBar />

      <main className="relative z-10">
        <Hero content={content} opened={opened} setOpened={setOpened} />
        <SaveTheDate content={content} />
        <Countdown content={content} />
        <Couple content={content} />
        <Families content={content} />
        <Events content={content} />
        <Saptapadi content={content} />
        <Venue content={content} />
        <Contact content={content} />
      </main>

      <Footer content={content} />

      <MusicToggle src={content.music.src} label={t(content.music.label)} start={opened} />
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
