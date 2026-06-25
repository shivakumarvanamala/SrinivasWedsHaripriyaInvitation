// Temple-mehrab arched frame — for couple photos (matches reference style).
// Shows the image clipped to the arch, or — when no photo is set — an elegant
// gold initial (`fallbackChar`) inside the arch.
import { useState } from 'react'

export default function ArchFrame({ src, alt, fallbackChar }) {
  const [failed, setFailed] = useState(false)
  // unique clip id per instance so multiple arches don't collide
  const id = `arch-${fallbackChar || 'x'}-${alt?.length || 0}`.replace(/[^a-z0-9-]/gi, '')

  return (
    <div className="relative mx-auto h-56 w-44">
      <svg viewBox="0 0 176 224" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <clipPath id={id}>
            {/* pointed temple arch */}
            <path d="M16 224 V96 C16 40 60 8 88 8 C116 8 160 40 160 96 V224 Z" />
          </clipPath>
        </defs>

        {/* gold double border following the arch */}
        <path
          d="M10 222 V96 C10 36 58 2 88 2 C118 2 166 36 166 96 V222"
          fill="none"
          stroke="#C9A24B"
          strokeWidth="2.5"
        />
        <path
          d="M18 220 V96 C18 42 62 12 88 12 C114 12 158 42 158 96 V220"
          fill="none"
          stroke="#E5C16C"
          strokeWidth="1"
          opacity="0.6"
        />
        {/* finial at the top of the arch */}
        <circle cx="88" cy="2" r="3.5" fill="#E5C16C" />

        {failed || !src ? (
          <g clipPath={`url(#${id})`}>
            <rect x="0" y="0" width="176" height="224" fill="#3A1A33" />
            <text
              x="88"
              y="140"
              textAnchor="middle"
              fontSize="90"
              fill="#C9A24B"
              fontFamily="'Tangerine','Cormorant Garamond',serif"
            >
              {fallbackChar}
            </text>
          </g>
        ) : (
          <image
            href={src}
            x="0"
            y="0"
            width="176"
            height="224"
            preserveAspectRatio="xMidYMid slice"
            clipPath={`url(#${id})`}
            onError={() => setFailed(true)}
          />
        )}
      </svg>
    </div>
  )
}
