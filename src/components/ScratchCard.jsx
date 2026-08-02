import { useEffect, useRef, useState, useCallback } from 'react'

// ════════════════════════════════════════════════════════════════════
//  Scratch Card — touch/scratch the gold foil to reveal the wedding date.
//  Works with mouse and touch. Reveals on the slightest touch (low
//  threshold) and also reveals fully on a simple tap/click.
// ════════════════════════════════════════════════════════════════════
export default function ScratchCard({
  width = 360,
  height = 220,
  onComplete,
  hint, // optional "scratch to reveal" text shown on the foil
  children, // the hidden content revealed underneath
}) {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const drawing = useRef(false)
  const lastPos = useRef(null) // previous scratch point, for smooth strokes
  const moved = useRef(false) // did this press turn into a drag? (tap vs scratch)
  const [revealed, setRevealed] = useState(false)
  const [scratched, setScratched] = useState(false) // has the guest started?
  const completedRef = useRef(false)

  // Paint the gold "foil" cover. No instructions/text — the card wiggles to
  // invite a touch and reveals on the slightest scratch. Drawing is in
  // CSS-pixel space (ctx is pre-scaled by DPR).
  const paintCover = useCallback(
    (ctx) => {
      const w = width
      const h = height
      ctx.globalCompositeOperation = 'source-over'

      // gold gradient foil
      const grad = ctx.createLinearGradient(0, 0, w, h)
      grad.addColorStop(0, '#FFE08A')
      grad.addColorStop(0.35, '#F4B400')
      grad.addColorStop(0.6, '#E0A100')
      grad.addColorStop(1, '#C98A00')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, w, h)

      // diagonal sheen band for a foil look
      const sheen = ctx.createLinearGradient(0, 0, w, h)
      sheen.addColorStop(0.35, 'rgba(255,255,255,0)')
      sheen.addColorStop(0.5, 'rgba(255,255,255,0.45)')
      sheen.addColorStop(0.65, 'rgba(255,255,255,0)')
      ctx.fillStyle = sheen
      ctx.fillRect(0, 0, w, h)

      // sparkle dots
      ctx.fillStyle = 'rgba(255,255,255,0.5)'
      for (let i = 0; i < 70; i++) {
        const x = (i * 53) % w
        const y = (i * 97) % h
        ctx.beginPath()
        ctx.arc(x, y, (i % 3) + 1, 0, Math.PI * 2)
        ctx.fill()
      }

      // a small decorative ❀ at center (no words)
      ctx.fillStyle = 'rgba(123,30,51,0.55)'
      ctx.font = '600 30px serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText('❀', w / 2, h / 2)
    },
    [width, height],
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    // Handle device pixel ratio for crisp foil; draw in CSS-pixel space.
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = width * dpr
    canvas.height = height * dpr
    const ctx = canvas.getContext('2d')
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    paintCover(ctx)
  }, [width, height, paintCover])

  const getPos = (e, rect) => {
    const point = e.touches ? e.touches[0] : e
    // map client coords to CSS-pixel space (ctx is DPR-scaled internally)
    const scaleX = width / rect.width
    const scaleY = height / rect.height
    return {
      x: (point.clientX - rect.left) * scaleX,
      y: (point.clientY - rect.top) * scaleY,
    }
  }

  // Fully reveal: fade the foil away and notify the parent.
  const reveal = () => {
    if (completedRef.current) return
    completedRef.current = true
    setRevealed(true)
    const canvas = canvasRef.current
    if (canvas) {
      canvas.style.transition = 'opacity 0.5s ease'
      canvas.style.opacity = '0'
    }
    onComplete && onComplete()
  }

  // Brush radius (CSS px). A tap punches a slightly smaller hole than a drag
  // stroke, so a couple of taps tease the text without giving it all away.
  const BRUSH = 26
  const TAP_BRUSH = 20
  // Fraction of foil that must be scratched off before the rest falls away.
  // Low enough that a short scratch finishes it, but above what a tap or two
  // clears (~1-2%) so taps still only tease the text underneath.
  const REVEAL_AT = 0.1

  // Erase a smooth, continuous stroke from the previous point to this one so
  // fast drags don't leave gaps (the main cause of "sometimes it doesn't work").
  const scratch = (e) => {
    if (!drawing.current || completedRef.current) return
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    const { x, y } = getPos(e, rect)
    const ctx = canvas.getContext('2d')
    ctx.globalCompositeOperation = 'destination-out'

    const prev = lastPos.current
    if (prev) {
      ctx.lineWidth = BRUSH * 2
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.beginPath()
      ctx.moveTo(prev.x, prev.y)
      ctx.lineTo(x, y)
      ctx.stroke()
    }
    // round dab at the current point too
    ctx.beginPath()
    ctx.arc(x, y, BRUSH, 0, Math.PI * 2)
    ctx.fill()

    lastPos.current = { x, y }
  }

  // How much of the foil has been scratched away, 0–1.
  const clearedFraction = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const img = ctx.getImageData(0, 0, canvas.width, canvas.height).data
    let cleared = 0
    let total = 0
    // sample alpha channel periodically for speed
    for (let i = 3; i < img.length; i += 160) {
      total++
      if (img[i] === 0) cleared++
    }
    return total ? cleared / total : 0
  }

  const checkCompletion = () => {
    if (completedRef.current) return
    if (clearedFraction() > REVEAL_AT) reveal()
  }

  const start = (e) => {
    drawing.current = true
    moved.current = false
    lastPos.current = null // begin a fresh stroke
    setScratched(true) // hide the hint the moment they touch the foil
    scratch(e)
  }
  const move = (e) => {
    if (drawing.current) {
      if (e.cancelable) e.preventDefault()
      moved.current = true
      scratch(e)
      checkCompletion() // check WHILE scratching, not just on release
    }
  }
  const end = () => {
    if (!drawing.current) return
    drawing.current = false
    lastPos.current = null
    checkCompletion()
  }

  // A plain tap (press + release without dragging) rubs a small patch of foil
  // off at that spot rather than revealing everything — so a tap or two hints
  // at the text underneath and invites more scratching.
  const onClick = (e) => {
    if (completedRef.current || moved.current) return
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    const { x, y } = getPos(e, rect)
    const ctx = canvas.getContext('2d')
    ctx.globalCompositeOperation = 'destination-out'
    // soft-edged dab so taps look rubbed, not punched
    const g = ctx.createRadialGradient(x, y, 0, x, y, TAP_BRUSH)
    g.addColorStop(0, 'rgba(0,0,0,1)')
    g.addColorStop(0.7, 'rgba(0,0,0,1)')
    g.addColorStop(1, 'rgba(0,0,0,0)')
    ctx.fillStyle = g
    ctx.beginPath()
    ctx.arc(x, y, TAP_BRUSH, 0, Math.PI * 2)
    ctx.fill()
    checkCompletion()
  }

  return (
    <div
      ref={containerRef}
      className="relative select-none overflow-hidden rounded-2xl shadow-card"
      style={{ width, height }}
    >
      {/* hidden content underneath */}
      <div className="absolute inset-0 flex items-center justify-center">{children}</div>

      {/* scratch surface */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 h-full w-full ${revealed ? 'pointer-events-none' : 'cursor-grab active:cursor-grabbing'}`}
        style={{ touchAction: 'none' }}
        onMouseDown={start}
        onMouseMove={move}
        onMouseUp={end}
        onMouseLeave={end}
        onTouchStart={start}
        onTouchMove={move}
        onTouchEnd={end}
        onClick={onClick}
      />

      {/* "scratch to reveal" hint — sits ON TOP of the foil but ignores pointer
          events so it never blocks scratching. Disappears on first touch. */}
      {hint && !scratched && !revealed && (
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-1">
          <span className="font-sans text-sm font-semibold tracking-wide text-maroon-deep/80">
            {hint}
          </span>
          {/* finger dragging side to side, miming the scratch gesture */}
          <span className="scratch-finger text-xl" aria-hidden="true">
            👆
          </span>
        </div>
      )}
    </div>
  )
}
