BACKGROUND MUSIC
================

Place your song file in THIS folder, named exactly:

    sada-nannu.mp3

That's it — the website is already wired to play it.

Notes:
- The site references it as  /music/sada-nannu.mp3  (set in src/content.js → music.src).
- Any .mp3 works. If you use a different filename, update `src` in src/content.js.
- Music is ON by default and starts the moment a guest opens the invitation
  (browsers don't allow auto-playing sound until the visitor interacts —
  the "TAP TO OPEN" tap counts, so it begins right then).
- The round button at the bottom-right mutes / unmutes the music.

About the file:
- "Sada Nannu" (Mahanati) is a copyrighted song, so it isn't bundled here.
  Add your own copy of the mp3 to this folder. For a public/shared site,
  make sure you have the right to use it.
