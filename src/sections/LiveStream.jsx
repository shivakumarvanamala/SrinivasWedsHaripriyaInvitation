import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Divider, LiveBroadcast, CornerFlourish } from '../components/Motifs'
import { useLang } from '../i18n'

// Pull the 11-character video id out of whatever YouTube gave you.
// Accepts a bare id OR any of the url shapes YouTube hands out, so you can just
// paste the link straight from the share sheet / address bar:
//   https://www.youtube.com/watch?v=ID          (normal watch page)
//   https://youtu.be/ID                          (share link)
//   https://www.youtube.com/live/ID              (live page)
//   https://www.youtube.com/embed/ID             (embed)
//   https://m.youtube.com/watch?v=ID&t=30s       (mobile, extra params)
//   https://www.youtube.com/shorts/ID            (shorts)
//   ID                                           (already just the id)
// Returns '' when nothing usable is found, which keeps the section in its
// "streaming soon" state rather than rendering a broken player.
export function parseVideoId(input) {
  if (typeof input !== 'string') return ''
  const raw = input.trim()
  if (!raw) return ''

  // Already a bare id? (YouTube ids are exactly 11 url-safe chars)
  if (/^[\w-]{11}$/.test(raw)) return raw

  // Otherwise look for it in the url. Covers every shape above, with or without
  // a protocol, and ignores any trailing query params such as ?t=30s.
  const m = raw.match(/(?:v=|\/live\/|\/embed\/|\/shorts\/|youtu\.be\/)([\w-]{11})/)
  return m ? m[1] : ''
}

// The live window, in minutes either side of the muhurtham.
// These are the SINGLE source of truth for the fallback, and they must match the
// documented defaults in content.js (`liveFromMinutesBefore` / `…After`).
const DEFAULT_MINS_BEFORE = 90 // 1 hr 30 min before
const DEFAULT_MINS_AFTER = 300 // 5 hrs after

// Is "now" inside the live window around the muhurtham?
// `weddingDate` carries +05:30, so this is correct in every timezone.
// Non-numeric values (a key deleted from content.js, or a Gist edit that sets one
// to null) fall back to the constants above rather than silently using a
// different window.
function isWithinLiveWindow(weddingDate, minsBefore, minsAfter) {
  const start = new Date(weddingDate).getTime()
  if (Number.isNaN(start)) return false // malformed date → never claim "live"
  const before = Number.isFinite(minsBefore) ? minsBefore : DEFAULT_MINS_BEFORE
  const after = Number.isFinite(minsAfter) ? minsAfter : DEFAULT_MINS_AFTER
  const now = Date.now()
  return now >= start - before * 60_000 && now <= start + after * 60_000
}

// ════════════════════════════════════════════════════════════════════
//  WATCH LIVE — the YouTube live stream of the muhurtham.
//
//  Two states, both designed to look deliberate:
//   • BEFORE the stream exists (no videoId, or `isLive: false`) → an elegant
//     "we'll be broadcasting here" panel with the date/time. Never a broken
//     player or an empty black box.
//   • LIVE / available → a click-to-play facade that swaps in the real player.
//
//  The player is loaded ONLY after a tap (a "facade"), which keeps YouTube's
//  ~1MB of scripts and its cookies off the page for guests who never watch,
//  and gives us the user gesture needed to autoplay with sound.
// ════════════════════════════════════════════════════════════════════
export default function LiveStream({ content, onActivate }) {
  const { t, lang } = useLang()
  // `content` already carries any remote (Gist) overrides — App merges them once
  // and passes them down, so this section just reads the resolved values.
  const live = content.live
  const [playing, setPlaying] = useState(false)

  // Re-evaluate the clock every 30s so the badge flips on its own for a guest
  // who already has the page open when the muhurtham arrives.
  const [, setTick] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setTick((n) => n + 1), 30_000)
    return () => clearInterval(id)
  }, [])

  if (!live?.show) return null

  // `videoId` may be a bare id OR a full YouTube url — both work.
  const videoId = parseVideoId(live.videoId)
  // `isLive` is a manual override; when it is null/undefined the clock decides.
  const autoLive = isWithinLiveWindow(
    content.weddingDate,
    live.liveFromMinutesBefore,
    live.liveUntilMinutesAfter,
  )
  const withinWindow = typeof live.isLive === 'boolean' ? live.isLive : autoLive

  // The PLAYER is offered only inside the live window — so a guest who visits a
  // week early can't press play and land on YouTube's bare "waiting for stream"
  // screen. Outside the window the section shows the "streaming soon" panel.
  // Setting `isLive: true` in the gist forces the player on at any time, which is
  // also the manual escape hatch if the muhurtham runs late.
  const hasStream = Boolean(videoId) && withinWindow
  const isLive = hasStream

  // Autoplay with sound is permitted here because loading is triggered by the
  // guest's tap. `playsinline` keeps iOS from hijacking into fullscreen.
  const embedSrc =
    `https://www.youtube-nocookie.com/embed/${videoId}` +
    `?autoplay=1&rel=0&modestbranding=1&playsinline=1`

  const watchUrl = videoId ? `https://www.youtube.com/watch?v=${videoId}` : live.channelUrl || ''

  const start = () => {
    setPlaying(true)
    // Silence the background song so the two audio sources never overlap.
    onActivate?.()
  }

  return (
    <section id="live" className="section-pad relative overflow-hidden bg-plum-deep-radial jali">
      {/* framing flourishes — echo the hero's corners so this reads as a
          headline moment rather than another content block */}
      <CornerFlourish className="pointer-events-none absolute left-3 top-3 h-16 w-16 text-gold/30 md:h-24 md:w-24" />
      <CornerFlourish className="pointer-events-none absolute right-3 top-3 h-16 w-16 -scale-x-100 text-gold/30 md:h-24 md:w-24" />

      <div className="relative mx-auto max-w-4xl text-center">
        <LiveBroadcast className="mx-auto h-16 w-16 text-gold" />

        <h2 className="mt-3 font-heading text-3xl leading-normal text-foil md:text-5xl">
          {t(live.heading)}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl font-display text-lg italic text-cream/70">
          {t(live.intro)}
        </p>

        <Divider className="my-8 text-gold" />

        {/* ── The screen ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto"
        >
          {/* gold bezel — a thin gradient frame around the 16:9 screen */}
          <div
            className="rounded-2xl p-[2px] shadow-glow"
            style={{ background: 'linear-gradient(135deg,#F3D697,#C9A24B 45%,#9C7A2E)' }}
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-plum-deep">
              {playing ? (
                <iframe
                  title={t(live.heading)}
                  src={embedSrc}
                  className="absolute inset-0 h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <Placeholder
                  live={live}
                  content={content}
                  hasStream={hasStream}
                  isLive={isLive}
                  onPlay={start}
                  t={t}
                  lang={lang}
                />
              )}
            </div>
          </div>
        </motion.div>

        {/* ── Below the screen ── */}
        <div className="mt-7 flex flex-col items-center gap-3">
          {/* The "stream begins shortly — keep this page open" note only makes
              sense BEFORE playback starts, so it drops away once watching. */}
          {!playing && live.note && t(live.note) && (
            <p className="mx-auto max-w-xl font-sans text-sm leading-relaxed text-cream/65">
              {t(live.note)}
            </p>
          )}

          {/* ALWAYS visible — whether or not the embedded player is running.
              A guest may well prefer YouTube itself (bigger player, live chat,
              cast to a TV), so this route must never disappear on them. */}
          {watchUrl && (
            <a
              href={watchUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-gold inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-2.5 font-heading text-sm tracking-widest text-plum-deep"
            >
              <YouTubeGlyph className="h-4 w-4" />
              {t(live.watchOnYouTube)}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

// ── The pre-play screen ──────────────────────────────────────────────
// Deliberately NOT a YouTube thumbnail: for a stream that hasn't started, that
// image is usually missing or a black frame. This is our own plum/gold panel, so
// it always looks composed.
function Placeholder({ live, content, hasStream, isLive, onPlay, t, lang }) {
  const inner = (
    <>
      {/* soft radial lift behind the centre */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 45%, rgba(201,162,75,0.22), rgba(201,162,75,0.06) 55%, transparent 78%)',
        }}
      />

      <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 px-5 text-center">
        {/* status pill — LIVE (pulsing red) or "streaming soon" (gold) */}
        {isLive ? (
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E0173C] px-3.5 py-1 shadow-glow">
            <motion.span
              className="h-2 w-2 rounded-full bg-white"
              animate={{ opacity: [1, 0.25, 1], scale: [1, 0.85, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span
              className={`text-white ${
                lang === 'en'
                  ? 'font-heading text-[0.7rem] uppercase tracking-[0.2em]'
                  : 'font-sans text-xs font-semibold tracking-wide'
              }`}
            >
              {t(live.liveBadge)}
            </span>
          </span>
        ) : (
          <span
            className={`inline-block rounded-full border border-gold/50 bg-plum-deep/80 px-3.5 py-1 text-gold-light ${
              lang === 'en'
                ? 'font-heading text-[0.7rem] uppercase tracking-[0.2em]'
                : 'font-sans text-xs tracking-wide'
            }`}
          >
            {t(live.soonBadge)}
          </span>
        )}

        {/* play button (only when there is something to play) */}
        {hasStream && (
          <motion.button
            onClick={onPlay}
            aria-label={t(live.watchOnYouTube)}
            className="btn-gold btn-animated group relative mt-1 flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient text-plum-deep md:h-20 md:w-20"
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* halo ring pulsing outward */}
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-full border border-gold-light"
              animate={{ scale: [1, 1.6], opacity: [0.7, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
            />
            {/* triangle */}
            <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 md:h-8 md:w-8" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </motion.button>
        )}

        {/* the couple + when */}
        <p className="mt-1 whitespace-nowrap font-deco text-2xl text-foil md:text-4xl">
          {t(content.couple.groom.name)} &amp; {t(content.couple.bride.name)}
        </p>
        {/* date · time — uses the SHORT muhurat string, since the full one
            ("మూల నక్షత్రయుక్త, తుల లగ్న…") is far too long for this panel */}
        <p className="font-sans text-xs text-cream/75 md:text-sm">
          {t(content.weddingDateLabel)}
          {t(live.muhuratShort) ? ` · ${t(live.muhuratShort)}` : ''}
        </p>
      </div>
    </>
  )

  // When a stream exists the whole panel is tappable; otherwise it's static so
  // guests don't tap a dead surface.
  return hasStream ? (
    <button
      onClick={onPlay}
      className="absolute inset-0 h-full w-full cursor-pointer"
      aria-label={t(live.watchOnYouTube)}
    >
      {inner}
    </button>
  ) : (
    <div className="absolute inset-0 h-full w-full">{inner}</div>
  )
}

function YouTubeGlyph({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M23 12s0-3.2-.4-4.7c-.2-.9-.9-1.6-1.8-1.8C19.2 5 12 5 12 5s-7.2 0-8.8.5c-.9.2-1.6.9-1.8 1.8C1 8.8 1 12 1 12s0 3.2.4 4.7c.2.9.9 1.6 1.8 1.8C4.8 19 12 19 12 19s7.2 0 8.8-.5c.9-.2 1.6-.9 1.8-1.8.4-1.5.4-4.7.4-4.7zM9.8 15.3V8.7l6.2 3.3-6.2 3.3z" />
    </svg>
  )
}
