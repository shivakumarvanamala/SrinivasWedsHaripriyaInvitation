import { useEffect, useState } from 'react'

// ════════════════════════════════════════════════════════════════════
//  REMOTE CONFIG — edit the live site from a phone, with no rebuild.
//
//  `content.configUrl` points at a JSON file (a GitHub Gist "Raw" url). Whatever
//  keys it contains are merged OVER src/content.js at runtime, so anything in the
//  content file can be changed after the site is published.
//
//  Design rules, in order of importance:
//   1. IT MUST NEVER BREAK THE PAGE. Network error, 404, HTML error page,
//      malformed JSON, wrong shape → the override is discarded and the baked-in
//      content is used. Every failure path is silent.
//   2. IT MUST REACH GUESTS WHO ARE ALREADY WATCHING. The file is re-checked on
//      an interval (and whenever a backgrounded tab is reopened), so enabling
//      the stream mid-ceremony reaches people who never refresh.
//   3. IT MUST NOT BE CACHED. Gist raw urls are CDN-cached, which would delay
//      exactly the change you need to land immediately — so each request carries
//      a cache-busting parameter.
// ════════════════════════════════════════════════════════════════════

const isPlainObject = (v) => v !== null && typeof v === 'object' && !Array.isArray(v)

// Merge `override` onto `base`, recursing into plain objects.
// Arrays REPLACE wholesale — for `events` you want the new list, not a
// confusing index-by-index blend.
export function deepMerge(base, override) {
  if (!isPlainObject(base) || !isPlainObject(override)) return override
  const out = { ...base }
  for (const key of Object.keys(override)) {
    const value = override[key]
    if (value === undefined) continue // `undefined` means "leave it alone"
    // TYPE GUARD: where the baked-in value is an object (a whole section like
    // `live` or `venue`), only another object may override it. A typo such as
    // {"live": null} or {"live": "true"} would otherwise replace the section
    // with a non-object and crash the render — so it is ignored instead.
    if (isPlainObject(base[key]) && !isPlainObject(value)) continue
    out[key] = isPlainObject(value) && isPlainObject(base[key]) ? deepMerge(base[key], value) : value
  }
  return out
}

// Add a cache-buster so we always read the newest revision of the Gist.
function bust(url) {
  const sep = url.includes('?') ? '&' : '?'
  return `${url}${sep}_=${Date.now()}`
}

/**
 * Returns `content` with any remote overrides applied.
 * @param content the baked-in content object (src/content.js)
 * @param pollMs  how often to re-check the remote file
 */
export default function useRemoteConfig(content, pollMs = 60_000) {
  const [override, setOverride] = useState(null)
  const configUrl = content?.configUrl

  useEffect(() => {
    if (!configUrl) return
    let cancelled = false

    const load = () => {
      fetch(bust(configUrl), { cache: 'no-store' })
        .then((r) => (r.ok ? r.json() : null))
        .then((data) => {
          if (cancelled) return
          // Only accept a JSON object. A stray string/array/null is ignored, so
          // a mangled edit can't blank out the invitation.
          if (isPlainObject(data)) setOverride(data)
        })
        .catch(() => {
          /* offline / blocked / bad JSON — keep whatever we already had */
        })
    }

    load()
    const id = setInterval(load, pollMs)
    // A guest who backgrounds the tab and returns should get the latest state
    // immediately rather than waiting out the interval.
    const onVisible = () => {
      if (document.visibilityState === 'visible') load()
    }
    document.addEventListener('visibilitychange', onVisible)

    return () => {
      cancelled = true
      clearInterval(id)
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [configUrl, pollMs])

  return override ? deepMerge(content, override) : content
}
