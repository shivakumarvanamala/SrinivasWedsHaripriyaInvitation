# 💍 Wedding Invitation Website

A stunning, bright & colourful **Hindu-traditional** wedding invitation website —
bilingual (**Telugu** default + **English**), with a temple-door opening animation,
a **scratch-card** that reveals the wedding date, a live countdown, family blessings,
events timeline, photo gallery and venue map.

Built with **React + Vite + Tailwind CSS + Framer Motion**.

---

## 🚀 Run it

```bash
npm install      # first time only
npm run dev      # preview at http://localhost:5173
npm run build    # produce the final site in /dist (this is what you publish)
npm run preview  # preview the built site
```

---

## ✏️ Editing the content — ONE file

**Everything you change lives in `src/content.js`.** Open it and edit the text
between the quotes. You do not need to touch any other file.

### Two languages
The site shows **Telugu by default** (for relatives) and switches to **English**
(for friends & cousins) using the **తెలుగు | English** toggle at the bottom-left.

Any text with both languages looks like this:

```js
name: { te: 'అర్జున్', en: 'Arjun' },
```

- Edit the Telugu inside `te: '...'`
- Edit the English inside `en: '...'`
- Keep the `te:` / `en:` keys, the quotes, and the commas.

Things that are the **same in both languages** (dates used by the countdown,
Google Maps links, photo file paths, the hashtag) are plain text — just edit them.

### What you'll typically change
| In `content.js` | What it controls |
|---|---|
| `couple` | Groom & bride names, parents, short bios, photos |
| `weddingDate` | The date the **countdown** counts to (`YYYY-MM-DDTHH:MM:SS`) |
| `weddingDateLabel`, `muhuratLabel` | The date/time text shown to guests (also on the scratch card) |
| `events` | Mehendi, Haldi, Sangeet, Wedding, Reception — dates, times, venues, map links |
| `families` | The two families' names & blessing (arranged-marriage section) |
| `gallery` | Photo captions (add photos to `public/images/`) |
| `venue` | Main venue name, address, Google Maps embed & directions link |
| `music` | Optional background shehnai (`src`) |
| `footer` | Closing message, hashtag, family sign-off |
| `ui` | Section titles & button labels (rarely need changing) |

### Adding photos
1. Drop image files into `public/images/` (e.g. `groom.jpg`, `gallery-1.jpg`).
2. The paths in `content.js` already point there.
3. Missing photos gracefully fall back to an elegant monogram/caption — so the
   site always looks complete even before you add pictures.

### Changing the map
In `content.js → venue.embedUrl`, paste a Google Maps embed URL
(Maps → **Share** → **Embed a map** → copy the `src="..."` value).

### Adding background music
Put an `.mp3` in `public/` (e.g. `public/shehnai.mp3`) and set
`music.src: '/shehnai.mp3'` in `content.js`. A floating play button appears.

---

## 🎨 Changing colours / fonts (optional)
- Palette and fonts: `tailwind.config.js`
- Global styles & the Telugu-font swap: `src/index.css`
- Telugu fonts (Noto Serif Telugu) load from Google Fonts in `index.html`

---

## 📁 Project structure
```
src/
  content.js              ← EDIT THIS (all text, both languages)
  i18n.jsx                ← language engine (Telugu default)
  App.jsx                 ← page assembly
  components/
    LanguageToggle.jsx    ← తెలుగు | English switch
    ScratchCard.jsx       ← the scratch-to-reveal date card
    Confetti.jsx          ← celebration burst
    FallingPetals.jsx     ← ambient flower petals
    MusicToggle.jsx       ← background music button
    NavBar.jsx            ← sticky navigation
    Motifs.jsx            ← Ganesha / lotus / kalash / diya SVG art
  sections/
    Hero.jsx              ← temple-door open + couple names
    SaveTheDate.jsx       ← scratch card
    Countdown.jsx         ← live countdown
    Couple.jsx            ← groom & bride cards
    Families.jsx          ← two families unite (blessings)
    Events.jsx            ← festivities timeline
    Gallery.jsx           ← photo gallery + lightbox
    Venue.jsx             ← venue + map
    Footer.jsx            ← closing
public/
  images/                 ← put your photos here
  favicon.svg
```

---

## 🌐 Publishing
Run `npm run build`, then upload the contents of the `dist/` folder to any static
host — **Netlify, Vercel, GitHub Pages, Cloudflare Pages, Firebase Hosting**, etc.
(Most let you drag-and-drop the `dist` folder.)
```
