import { useMemo } from 'react'
import { motion } from 'framer-motion'

// A one-shot confetti / flower burst. Render it when `fire` becomes true.
export default function Confetti({ fire, pieces = 40 }) {
  const bits = useMemo(
    () =>
      Array.from({ length: pieces }).map((_, i) => {
        const angle = (i / pieces) * Math.PI * 2
        const dist = 120 + ((i * 37) % 180)
        return {
          id: i,
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist - 60,
          rotate: (i * 47) % 360,
          color: ['#FF9E0B', '#E91E8C', '#2BC4C9', '#8E44E0', '#FFC53D', '#43A047'][i % 6],
          size: 8 + ((i * 5) % 8),
          delay: (i % 6) * 0.03,
        }
      }),
    [pieces],
  )

  if (!fire) return null

  return (
    <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center" aria-hidden="true">
      {bits.map((b) => (
        <motion.span
          key={b.id}
          initial={{ x: 0, y: 0, opacity: 1, scale: 0.4, rotate: 0 }}
          animate={{ x: b.x, y: b.y, opacity: 0, scale: 1, rotate: b.rotate }}
          transition={{ duration: 1.1, delay: b.delay, ease: 'easeOut' }}
          className="absolute"
          style={{
            width: b.size,
            height: b.size,
            borderRadius: b.id % 2 ? '50%' : '2px',
            background: b.color,
          }}
        />
      ))}
    </div>
  )
}
