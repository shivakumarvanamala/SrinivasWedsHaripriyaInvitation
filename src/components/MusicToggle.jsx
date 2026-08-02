import { useEffect, useRef, useState } from 'react'

// Floating background-music control (bottom-right).
// Music begins ONLY when `start` becomes true — i.e. the moment the temple
// doors begin opening (a real user gesture, so autoplay is permitted).
// The button then mutes / unmutes. Renders nothing if no src is configured.
export default function MusicToggle({ src, label = 'Music', start = false }) {
  const audioRef = useRef(null)
  const [enabled, setEnabled] = useState(true) // user's on/off intent (default ON)
  const [playing, setPlaying] = useState(false)

  // Configure the audio element once.
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0.35
    audio.loop = true
  }, [])

  // Start playback when the doors open (and the user hasn't muted).
  useEffect(() => {
    if (!src || !start || !enabled) return
    const audio = audioRef.current
    if (!audio) return
    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => {
        // Extremely defensive: if the browser still blocks it, retry on the
        // next interaction anywhere on the page.
        const retry = () => {
          audio.play().then(() => setPlaying(true)).catch(() => {})
          window.removeEventListener('pointerdown', retry)
        }
        window.addEventListener('pointerdown', retry, { once: true, passive: true })
      })
  }, [src, start, enabled])

  if (!src) return null

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (enabled) {
      audio.pause()
      setPlaying(false)
      setEnabled(false)
    } else {
      setEnabled(true)
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {})
    }
  }

  // Before the doors open, keep the control hidden so nothing distracts from
  // the entrance; it appears once music is in play.
  const visible = start

  return (
    <>
      <audio ref={audioRef} src={src} preload="auto" loop />
      <button
        onClick={toggle}
        aria-label={enabled ? `Mute ${label}` : `Play ${label}`}
        title={enabled ? `Mute ${label}` : `Play ${label}`}
        className={`btn-gold fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-plum-soft text-gold-light ring-1 ring-gold/50 ${
          visible ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        {enabled && playing ? (
          // animated equalizer bars while playing
          <span className="flex items-end gap-[2px]" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-[3px] rounded bg-gold-light"
                style={{
                  height: 14,
                  animation: `glowPulse 1s ease-in-out ${i * 0.2}s infinite`,
                  transformOrigin: 'bottom',
                }}
              />
            ))}
          </span>
        ) : enabled ? (
          // enabled, not yet playing → musical note
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M9 17V5l10-2v12" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="6" cy="17" r="3" />
            <circle cx="16" cy="15" r="3" />
          </svg>
        ) : (
          // muted → speaker-off
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M11 5 6 9H2v6h4l5 4z" fill="currentColor" stroke="none" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        )}
      </button>
    </>
  )
}
