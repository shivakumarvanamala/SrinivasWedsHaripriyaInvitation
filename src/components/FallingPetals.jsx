import { useMemo } from 'react'

// Colorful drifting flower petals across the whole page — bright & festive.
export default function FallingPetals({ count = 22 }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const left = (i * 89) % 100
        const delay = (i * 1.3) % 14
        const duration = 10 + ((i * 3) % 11)
        const size = 12 + ((i * 5) % 14)
        const hue = i % 5
        return { id: i, left, delay, duration, size, hue }
      }),
    [count],
  )

  // warm golds + a touch of marigold/rose — glows against the dark plum bg
  const colors = ['#E5C16C', '#F3D697', '#C9A24B', '#E8862E', '#C2185B']

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden" aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-[-40px]"
          style={{
            left: `${p.left}%`,
            animation: `floatUp ${p.duration}s linear ${p.delay}s infinite`,
          }}
        >
          <svg width={p.size} height={p.size} viewBox="0 0 20 20" fill="none">
            {/* five-petal flower for a fuller, festive look */}
            {Array.from({ length: 5 }).map((_, k) => (
              <ellipse
                key={k}
                cx="10"
                cy="4.5"
                rx="2.6"
                ry="4.5"
                fill={colors[p.hue]}
                opacity="0.8"
                transform={`rotate(${k * 72} 10 10)`}
              />
            ))}
            <circle cx="10" cy="10" r="2" fill="#FFE08A" />
          </svg>
        </span>
      ))}
    </div>
  )
}
