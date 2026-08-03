// ════════════════════════════════════════════════════════════════════
//  Decorative Hindu motifs — Ganesha, thoranam (torana garland), kalash,
//  diya, lotus, mandala, jali arch, ornate dividers.
//  Pure vector art (no image files). Inherit `currentColor` so they
//  pick up the gold colour of their container.
// ════════════════════════════════════════════════════════════════════

// ── GANESHA — seated deity line-art (auspicious opener) ──
export function Ganesha({ className = '' }) {
  return (
    <svg viewBox="0 0 200 220" className={className} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* radiant halo */}
        <circle cx="100" cy="92" r="74" opacity="0.35" />
        {Array.from({ length: 32 }).map((_, i) => (
          <line
            key={i}
            x1="100"
            y1="14"
            x2="100"
            y2="22"
            opacity="0.4"
            transform={`rotate(${i * 11.25} 100 92)`}
          />
        ))}

        {/* crown / mukut */}
        <path d="M76 44c4-16 44-16 48 0" />
        <path d="M84 40c0-12 32-12 32 0" opacity="0.8" />
        <path d="M100 16c5 8 5 14 0 20-5-6-5-12 0-20z" />
        <circle cx="100" cy="16" r="3.5" fill="currentColor" stroke="none" />

        {/* head + big ears */}
        <path d="M70 64c0-20 60-20 60 0 0 10-6 16-6 16" />
        <path d="M70 60c-16-6-26 2-26 16s12 22 26 18" />
        <path d="M130 60c16-6 26 2 26 16s-12 22-26 18" />
        {/* ear inner swirls */}
        <path d="M52 72c8-2 12 4 10 12" opacity="0.7" />
        <path d="M148 72c-8-2-12 4-10 12" opacity="0.7" />

        {/* trunk curving to the left, with tilak */}
        <path d="M100 78c-2 14-2 26-10 38s-22 14-22 28c0 10 16 12 20 2" />
        <path d="M88 84h24" opacity="0.6" />
        <path d="M100 70v8" opacity="0.6" />
        {/* eyes */}
        <path d="M84 80c4-4 10-4 12 0" />
        <path d="M104 80c4-4 10-4 12 0" opacity="0.9" />
        {/* tusks */}
        <path d="M82 104c-3 6-2 10 3 12" opacity="0.85" />
        <path d="M118 104c3 6 2 10-3 12" opacity="0.85" />

        {/* body / belly */}
        <path d="M70 150c0-26 60-26 60 0 0 22-14 34-30 34s-30-12-30-34z" opacity="0.9" />
        {/* four arms */}
        <path d="M70 132c-14 4-22 14-22 26" />
        <path d="M130 132c14 4 22 14 22 26" />
        <path d="M78 150c-10 8-12 18-8 28" opacity="0.8" />
        <path d="M122 150c10 8 12 18 8 28" opacity="0.8" />
        {/* lotus seat */}
        <path d="M58 188c10-10 74-10 84 0" />
        <path d="M48 192c14 8 90 8 104 0" opacity="0.7" />
        <path d="M62 196c8-8 68-8 76 0" opacity="0.5" />
      </g>
    </svg>
  )
}

// A small standing consort/goddess figure (used flanking the main deity)
function ConsortFigure({ x = 0, scale = 1 }) {
  return (
    <g transform={`translate(${x} 0) scale(${scale})`} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
      {/* head + small crown */}
      <circle cx="0" cy="-44" r="9" />
      <path d="M-8 -52c2-7 14-7 16 0" />
      <circle cx="0" cy="-58" r="2" fill="currentColor" stroke="none" />
      {/* body / saree drape */}
      <path d="M-9 -36c-4 22-6 40-9 56 11 5 25 5 36 0-3-16-5-34-9-56" />
      {/* arms in anjali / blessing */}
      <path d="M-9 -30c-7 6-9 14-7 22" />
      <path d="M9 -30c7 6 9 14 7 22" />
    </g>
  )
}

// ── VENKATESWARA — with Padmavathi & Lakshmi flanking ──
export function Venkateswara({ className = '' }) {
  return (
    <svg viewBox="0 0 200 220" className={className} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* halo */}
        <circle cx="100" cy="96" r="76" opacity="0.3" />
        {Array.from({ length: 28 }).map((_, i) => (
          <line key={i} x1="100" y1="16" x2="100" y2="24" opacity="0.4" transform={`rotate(${i * 12.857} 100 96)`} />
        ))}

        {/* consorts: Lakshmi (left) & Padmavathi (right) */}
        <g transform="translate(100 150)" className="text-current">
          <ConsortFigure x={-64} scale={0.78} />
          <ConsortFigure x={64} scale={0.78} />
        </g>

        {/* tall kireedam (conical crown) */}
        <path d="M100 8c10 22 18 30 18 30H82s8-8 18-30z" />
        <path d="M86 38h28" />
        <circle cx="100" cy="10" r="3" fill="currentColor" stroke="none" />

        {/* face with namam (the white U-mark) */}
        <path d="M82 44c0-8 36-8 36 0 0 22-4 36-18 36s-18-14-18-36z" />
        <path d="M94 50v22" opacity="0.6" />
        <path d="M106 50v22" opacity="0.6" />
        <path d="M100 56v18" opacity="0.5" />
        <path d="M88 60c4-3 8-3 10 0" opacity="0.8" />
        <path d="M102 60c4-3 8-3 10 0" opacity="0.8" />

        {/* body + draped robe */}
        <path d="M78 86c-4 30-6 56-6 78 14 8 42 8 56 0 0-22-2-48-6-78" />
        {/* upper arms: one raised (abhaya), holding shankha & chakra */}
        <path d="M80 92c-16 4-24 0-30-12" />
        <path d="M120 92c16 4 24 0 30-12" />
        {/* shankha (left) + chakra (right) discs */}
        <circle cx="46" cy="74" r="9" opacity="0.85" />
        <circle cx="154" cy="74" r="9" opacity="0.85" />
        <line x1="154" y1="65" x2="154" y2="83" opacity="0.6" />
        <line x1="145" y1="74" x2="163" y2="74" opacity="0.6" />
        {/* lower hands resting */}
        <path d="M84 110c-8 8-10 18-6 30" opacity="0.8" />
        <path d="M116 110c8 8 10 18 6 30" opacity="0.8" />
        {/* lotus pedestal */}
        <path d="M64 188c12-10 60-10 72 0" />
        <path d="M54 192c16 8 76 8 92 0" opacity="0.6" />
      </g>
    </svg>
  )
}

// ── SHIVA — with Parvathi beside, trishul, crescent, Nandi feel ──
export function Shiva({ className = '' }) {
  return (
    <svg viewBox="0 0 200 220" className={className} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* halo */}
        <circle cx="100" cy="96" r="76" opacity="0.3" />
        {Array.from({ length: 28 }).map((_, i) => (
          <line key={i} x1="100" y1="16" x2="100" y2="24" opacity="0.4" transform={`rotate(${i * 12.857} 100 96)`} />
        ))}

        {/* Parvathi to the right */}
        <g transform="translate(100 150)">
          <ConsortFigure x={70} scale={0.82} />
        </g>

        {/* trishul (trident) standing at far left */}
        <line x1="40" y1="40" x2="40" y2="180" opacity="0.8" />
        <path d="M30 52c0-14 20-14 20 0" opacity="0.85" />
        <line x1="30" y1="40" x2="30" y2="56" opacity="0.85" />
        <line x1="50" y1="40" x2="50" y2="56" opacity="0.85" />
        <line x1="40" y1="34" x2="40" y2="56" opacity="0.85" />

        {/* jata (matted hair top-knot) + crescent moon + Ganga */}
        <path d="M86 40c0-16 28-16 28 0" />
        <path d="M92 30c4-10 12-12 16-4" opacity="0.7" />
        <path d="M108 22a8 8 0 1 0 6 12 10 10 0 0 1-6-12z" opacity="0.85" />
        {/* third eye + face */}
        <path d="M84 46c0-8 32-8 32 0 0 22-4 34-16 34s-16-12-16-34z" />
        <path d="M96 50l4 6 4-6" opacity="0.8" />
        <path d="M88 62c4-3 8-3 10 0" opacity="0.8" />
        <path d="M102 62c4-3 8-3 10 0" opacity="0.8" />

        {/* body (bare torso) + dhoti */}
        <path d="M80 84c-3 28-5 54-5 76 14 8 36 8 50 0 0-22-2-48-5-76" />
        {/* arm raised (abhaya) + damaru hint */}
        <path d="M82 90c-14 2-22-2-26-12" />
        <path d="M118 90c12 4 18 0 22-10" />
        {/* snake around neck */}
        <path d="M84 84c8 6 24 6 32 0" opacity="0.6" />
        {/* lotus / kailash base */}
        <path d="M66 188c12-10 56-10 68 0" />
        <path d="M58 192c14 8 70 8 84 0" opacity="0.6" />
      </g>
    </svg>
  )
}

// ── PUJA THALI — plate with diya, kumkum & flowers (for the Vratham) ──
export function PujaThali({ className = '' }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* the thali (plate) */}
        <ellipse cx="40" cy="54" rx="32" ry="11" />
        <ellipse cx="40" cy="52" rx="24" ry="8" opacity="0.6" />
        {/* lit diya on the plate */}
        <path className="animate-glow" d="M40 24c2 5 6 7 6 12a6 6 0 0 1-12 0c0-5 4-7 6-12z" fill="#E8862E" stroke="none" />
        <path d="M30 40c2 5 18 5 20 0" />
        {/* kumkum / flower dots around */}
        <circle cx="18" cy="52" r="2.5" fill="currentColor" stroke="none" />
        <circle cx="62" cy="52" r="2.5" fill="currentColor" stroke="none" />
        <circle cx="28" cy="58" r="2" fill="currentColor" stroke="none" opacity="0.7" />
        <circle cx="52" cy="58" r="2" fill="currentColor" stroke="none" opacity="0.7" />
        {/* incense smoke wisps */}
        <path d="M40 18c-3-3 3-6 0-9" opacity="0.5" />
      </g>
    </svg>
  )
}

// "Om" inside a radiant ring — compact alternative invocation mark
export function OmGanesha({ className = '' }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden="true">
      <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="60" cy="60" r="46" stroke="currentColor" strokeWidth="0.75" opacity="0.3" />
      {Array.from({ length: 24 }).map((_, i) => (
        <line
          key={i}
          x1="60"
          y1="6"
          x2="60"
          y2="14"
          stroke="currentColor"
          strokeWidth="1.4"
          opacity="0.55"
          transform={`rotate(${i * 15} 60 60)`}
        />
      ))}
      <text
        x="60"
        y="80"
        textAnchor="middle"
        fontSize="58"
        fill="currentColor"
        fontFamily="'Noto Sans Devanagari','Mukta',serif"
      >
        ॐ
      </text>
    </svg>
  )
}

// ── THORANAM — mango-leaf + marigold garland strung across a width ──
// Renders a wide swag; place at the top of a section as a decorative header.
export function Thoranam({ className = '' }) {
  // a single hanging mango leaf
  const Leaf = ({ x, drop, scale = 1 }) => (
    <g transform={`translate(${x} 0) scale(${scale})`}>
      <path
        d={`M0 0 C -6 ${8 + drop}, -6 ${22 + drop}, 0 ${34 + drop} C 6 ${22 + drop}, 6 ${8 + drop}, 0 0 Z`}
        fill="currentColor"
        opacity="0.85"
      />
      <line x1="0" y1="2" x2="0" y2={28 + drop} stroke="#1C0A18" strokeWidth="0.8" opacity="0.4" />
    </g>
  )
  // marigold ball
  const Marigold = ({ x, y }) => (
    <g transform={`translate(${x} ${y})`}>
      {Array.from({ length: 8 }).map((_, i) => (
        <circle key={i} cx={Math.cos((i * Math.PI) / 4) * 4} cy={Math.sin((i * Math.PI) / 4) * 4} r="3" fill="currentColor" opacity="0.7" />
      ))}
      <circle cx="0" cy="0" r="3.5" fill="currentColor" />
    </g>
  )

  const leaves = []
  const N = 24
  for (let i = 0; i <= N; i++) {
    const x = (i / N) * 600
    // sag in the middle like a real hanging garland
    const sag = Math.sin((i / N) * Math.PI) * 26
    const drop = i % 2 === 0 ? 4 : 10
    leaves.push(<Leaf key={`l${i}`} x={x} drop={drop + sag} scale={1} />)
  }

  return (
    <svg viewBox="0 0 600 90" preserveAspectRatio="none" className={className} fill="none" aria-hidden="true">
      {/* the string follows the same sag */}
      <path
        d="M0 6 Q 300 44 600 6"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.6"
        fill="none"
      />
      <g transform="translate(0 6)">
        {/* shift each leaf down onto the string curve */}
        {Array.from({ length: 25 }).map((_, i) => {
          const x = (i / 24) * 600
          const sag = Math.sin((i / 24) * Math.PI) * 30
          const drop = i % 2 === 0 ? 2 : 8
          return <Leaf key={i} x={x} drop={drop + sag} />
        })}
        {/* marigolds at the two ends + center */}
        <Marigold x={4} y={6} />
        <Marigold x={300} y={36} />
        <Marigold x={596} y={6} />
      </g>
    </svg>
  )
}

export function Lotus({ className = '' }) {
  return (
    <svg viewBox="0 0 100 60" className={className} fill="none" aria-hidden="true">
      <path d="M50 52c0 0-2-22 0-30 2 8 0 30 0 30z" fill="currentColor" opacity="0.9" />
      <path d="M50 52c0 0-14-16-18-26 9 4 18 26 18 26z" fill="currentColor" opacity="0.7" />
      <path d="M50 52c0 0 14-16 18-26-9 4-18 26-18 26z" fill="currentColor" opacity="0.7" />
      <path d="M50 52c0 0-24-8-32-16 11-1 32 16 32 16z" fill="currentColor" opacity="0.5" />
      <path d="M50 52c0 0 24-8 32-16-11-1-32 16-32 16z" fill="currentColor" opacity="0.5" />
      <path d="M14 50c10 6 62 6 72 0-6 8-66 8-72 0z" fill="currentColor" opacity="0.35" />
    </svg>
  )
}

export function Kalash({ className = '' }) {
  return (
    <svg viewBox="0 0 80 110" className={className} fill="none" aria-hidden="true">
      <ellipse cx="40" cy="40" rx="14" ry="10" fill="currentColor" opacity="0.85" />
      <path d="M28 38c-4-6-2-14 12-14s16 8 12 14" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <path d="M40 26c0-8 8-12 8-12-2 8-8 12-8 12z" fill="currentColor" opacity="0.7" />
      <path d="M40 26c0-8-8-12-8-12 2 8 8 12 8 12z" fill="currentColor" opacity="0.7" />
      <circle cx="40" cy="14" r="5" fill="currentColor" opacity="0.9" />
      <path d="M26 46c-6 14-6 36 0 50 4 8 24 8 28 0 6-14 6-36 0-50-2 6-26 6-28 0z" fill="currentColor" opacity="0.8" />
      <path d="M22 70h36" stroke="#1C0A18" strokeWidth="2" opacity="0.4" />
      <path d="M24 80h32" stroke="#1C0A18" strokeWidth="1.5" opacity="0.3" />
    </svg>
  )
}

export function Diya({ className = '' }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden="true">
      <path className="animate-glow" d="M40 18c2 6 7 9 7 15a7 7 0 0 1-14 0c0-6 5-9 7-15z" fill="#E8862E" />
      <path d="M40 24c1 4 4 6 4 9a4 4 0 0 1-8 0c0-3 3-5 4-9z" fill="#FFE08A" />
      <path d="M16 48c4 8 44 8 48 0 2 8-6 16-24 16S14 56 16 48z" fill="currentColor" opacity="0.85" />
      <ellipse cx="40" cy="48" rx="24" ry="6" fill="currentColor" opacity="0.6" />
    </svg>
  )
}

// ── HALDI BOWL — a bowl of turmeric paste with two applicator sticks ──
export function HaldiBowl({ className = '' }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* turmeric mound inside */}
        <path d="M24 44c2-9 30-9 32 0z" fill="#E8A33D" stroke="none" />
        {/* the bowl */}
        <path d="M18 44h44c-2 14-12 22-22 22S20 58 18 44z" fill="currentColor" opacity="0.85" />
        <ellipse cx="40" cy="44" rx="22" ry="6" />
        {/* two applicator sticks dipped in */}
        <line x1="34" y1="44" x2="28" y2="20" />
        <line x1="46" y1="44" x2="52" y2="20" />
        <circle cx="28" cy="19" r="2.5" fill="#E8A33D" stroke="none" />
        <circle cx="52" cy="19" r="2.5" fill="#E8A33D" stroke="none" />
      </g>
    </svg>
  )
}

// ── YAGNOPAVEETHAM — the sacred thread ceremony (Upanayanam).
//    Read as a torso with the janivara worn diagonally across it (left shoulder
//    to right hip), which is the instantly recognisable image of the rite.
//    Simple, symmetrical shapes so it stays legible at 40–48px.
export function Yagnopaveetham({ className = '' }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* head */}
        <circle cx="40" cy="17" r="9" fill="currentColor" opacity="0.14" />
        <circle cx="40" cy="17" r="9" />
        {/* tuft (shikha) — a small traditional detail */}
        <path d="M40 8c1-4 4-5 4-5-1 3-2 4-4 5z" fill="currentColor" stroke="none" opacity="0.7" />

        {/* shoulders + torso */}
        <path d="M22 44c1-8 8-13 18-13s17 5 18 13v22H22z" fill="currentColor" opacity="0.12" />
        <path d="M22 44c1-8 8-13 18-13s17 5 18 13" />
        <path d="M22 44v22M58 44v22" opacity="0.5" />

        {/* THE SACRED THREAD — three strands crossing the torso diagonally */}
        <path d="M27 36L55 66" strokeWidth="2.6" />
        <path d="M31 34L59 64" strokeWidth="1.5" opacity="0.6" />
        <path d="M23 38L51 68" strokeWidth="1.5" opacity="0.6" />

        {/* brahmagranthi — the knot on the thread */}
        <circle cx="41" cy="50" r="3.6" fill="currentColor" stroke="none" />
        <circle cx="41" cy="50" r="6" strokeWidth="1.2" opacity="0.55" />
      </g>
    </svg>
  )
}

// ── JAIMALA — two crossed wedding garlands (the iconic varmala moment) ──
export function Jaimala({ className = '' }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
        {/* two interlocking garland loops */}
        <path d="M40 20c-18 0-26 14-26 26 0 8 5 12 10 12" fill="none" />
        <path d="M40 20c18 0 26 14 26 26 0 8-5 12-10 12" fill="none" />
        {/* flower beads along each loop */}
        {Array.from({ length: 7 }).map((_, i) => {
          const a = Math.PI * (0.55 + i * 0.13)
          return <circle key={`l${i}`} cx={40 - Math.cos(a) * 24} cy={30 + Math.sin(a) * 22} r="2.6" fill="currentColor" stroke="none" />
        })}
        {Array.from({ length: 7 }).map((_, i) => {
          const a = Math.PI * (0.55 + i * 0.13)
          return <circle key={`r${i}`} cx={40 + Math.cos(a) * 24} cy={30 + Math.sin(a) * 22} r="2.6" fill="currentColor" stroke="none" />
        })}
        {/* knot where they cross */}
        <circle cx="40" cy="60" r="4" fill="currentColor" stroke="none" />
      </g>
    </svg>
  )
}

// ── BOUND KNOT — two interlocking rings tied by a ribbon.
//    Sits BETWEEN the two family cards: the literal joining of two families.
//    (A decorative "❀" glyph used to sit there, which said nothing.)
export function BoundRings({ className = '' }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        {/* left ring */}
        <circle cx="31" cy="40" r="16" strokeWidth="3" />
        {/* right ring, overlapping */}
        <circle cx="49" cy="40" r="16" strokeWidth="3" />
        {/* the overlap redrawn brighter so the link reads clearly */}
        <path d="M40 25.3a16 16 0 0 0 0 29.4 16 16 0 0 0 0-29.4z" strokeWidth="1.2" opacity="0.55" />
        {/* tiny jewels at the crossing points */}
        <circle cx="40" cy="25" r="2.4" fill="currentColor" stroke="none" />
        <circle cx="40" cy="55" r="2.4" fill="currentColor" stroke="none" />
      </g>
    </svg>
  )
}

// ── TWO FAMILIES — two groups of figures standing together beneath a garland.
//    Heads the "Two Families, One Bond" section. Earlier attempts here (a plain
//    Kalash, an abstract tied knot, a handshake) either said nothing about a
//    union or failed to read at 64px. A group of figures is unambiguous: you see
//    people, in two groups, joined at the centre.
export function TwoFamilies({ className = '' }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* garland arc blessing both families, with marigold beads */}
        <path d="M12 22C24 9 56 9 68 22" strokeWidth="1.3" opacity="0.45" fill="none" />
        {[
          [14, 21],
          [27, 13],
          [40, 10.5],
          [53, 13],
          [66, 21],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={i === 2 ? 2.4 : 1.8} fill="currentColor" stroke="none" opacity="0.55" />
        ))}

        {/* ── LEFT FAMILY — a parent and a child ── */}
        {/* parent */}
        <circle cx="17" cy="36" r="5.2" fill="currentColor" opacity="0.16" />
        <circle cx="17" cy="36" r="5.2" />
        <path d="M9 64V50c0-4.4 3.6-8 8-8s8 3.6 8 8v14" fill="currentColor" opacity="0.12" />
        <path d="M9 64V50c0-4.4 3.6-8 8-8s8 3.6 8 8v14" />
        {/* child beside them, holding on */}
        <circle cx="29" cy="45" r="3.6" fill="currentColor" opacity="0.16" />
        <circle cx="29" cy="45" r="3.6" />
        <path d="M24 64v-8c0-2.8 2.2-5 5-5s5 2.2 5 5v8" fill="currentColor" opacity="0.12" />
        <path d="M24 64v-8c0-2.8 2.2-5 5-5s5 2.2 5 5v8" />

        {/* ── RIGHT FAMILY — mirrored ── */}
        <circle cx="63" cy="36" r="5.2" fill="currentColor" opacity="0.16" />
        <circle cx="63" cy="36" r="5.2" />
        <path d="M71 64V50c0-4.4-3.6-8-8-8s-8 3.6-8 8v14" fill="currentColor" opacity="0.12" />
        <path d="M71 64V50c0-4.4-3.6-8-8-8s-8 3.6-8 8v14" />
        <circle cx="51" cy="45" r="3.6" fill="currentColor" opacity="0.16" />
        <circle cx="51" cy="45" r="3.6" />
        <path d="M56 64v-8c0-2.8-2.2-5-5-5s-5 2.2-5 5v8" fill="currentColor" opacity="0.12" />
        <path d="M56 64v-8c0-2.8-2.2-5-5-5s-5 2.2-5 5v8" />

        {/* the heart at the centre — the two families joined */}
        <path
          d="M40 62c-4.6-3.4-7.4-6-7.4-9.2 0-2.4 1.9-4.2 4.2-4.2 1.4 0 2.6.7 3.2 1.7.6-1 1.8-1.7 3.2-1.7 2.3 0 4.2 1.8 4.2 4.2 0 3.2-2.8 5.8-7.4 9.2z"
          fill="currentColor"
          stroke="none"
          opacity="0.9"
        />

        {/* ground line tying the whole group together */}
        <path d="M8 64h64" strokeWidth="1.5" opacity="0.45" />
      </g>
    </svg>
  )
}

// ── THE COUPLE — two crowned figures side by side beneath a shared garland,
//    the bride's saree pallu and the groom's turban distinguishing them.
//    Heads the Couple section, where a Mangalsutra used to sit — that is the
//    bride's necklace alone, so it represented only half the pair.
export function CoupleMotif({ className = '' }) {
  return (
    <svg viewBox="0 0 88 80" className={className} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* shared garland arching over both — the varmala */}
        <path d="M12 26C22 12 66 12 76 26" strokeWidth="1.3" opacity="0.45" fill="none" />
        {[
          [14, 25],
          [26, 15],
          [44, 11.5],
          [62, 15],
          [74, 25],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={i === 2 ? 2.5 : 1.9} fill="currentColor" stroke="none" opacity="0.55" />
        ))}

        {/* ── GROOM (left) — turban with a small plume ── */}
        <path d="M22 34c0-5 12-5 12 0 0 1-.5 2-.5 2h-11s-.5-1-.5-2z" fill="currentColor" stroke="none" opacity="0.85" />
        <path d="M23 33c1-3 10-3 11 0" strokeWidth="1.4" opacity="0.7" />
        <path d="M28 27c.5-4 3-5 3-5-.8 3.5-1.2 4-3 5z" fill="currentColor" stroke="none" opacity="0.7" />
        {/* face */}
        <circle cx="28" cy="42" r="5.6" fill="currentColor" opacity="0.14" />
        <circle cx="28" cy="42" r="5.6" />
        {/* shoulders / sherwani */}
        <path d="M18 70V58c0-4.4 4.4-8 10-8s10 3.6 10 8v12" fill="currentColor" opacity="0.12" />
        <path d="M18 70V58c0-4.4 4.4-8 10-8s10 3.6 10 8v12" />
        {/* collar */}
        <path d="M24 51l4 4 4-4" strokeWidth="1.5" opacity="0.65" />

        {/* ── BRIDE (right) — veil / pallu over the head ── */}
        <path d="M52 40c0-8 14-8 14 0" strokeWidth="1.5" opacity="0.8" />
        <path d="M51 44c-1 10 0 18 3 26" strokeWidth="1.4" opacity="0.5" />
        <path d="M67 44c1 10 0 18-3 26" strokeWidth="1.4" opacity="0.5" />
        {/* face */}
        <circle cx="59" cy="43" r="5.4" fill="currentColor" opacity="0.14" />
        <circle cx="59" cy="43" r="5.4" />
        {/* bindi + maang tikka */}
        <circle cx="59" cy="39.5" r="1.5" fill="currentColor" stroke="none" />
        {/* shoulders / saree */}
        <path d="M49 70V59c0-4.4 4.4-8 10-8s10 3.6 10 8v11" fill="currentColor" opacity="0.12" />
        <path d="M49 70V59c0-4.4 4.4-8 10-8s10 3.6 10 8v11" />
        {/* layered necklace */}
        <path d="M54 52c3 3 7 3 10 0" strokeWidth="1.4" opacity="0.7" />

        {/* the heart between them — the two joined */}
        <path
          d="M44 62c-3.6-2.7-5.8-4.7-5.8-7.2 0-1.9 1.5-3.3 3.3-3.3 1.1 0 2 .5 2.5 1.3.5-.8 1.4-1.3 2.5-1.3 1.8 0 3.3 1.4 3.3 3.3 0 2.5-2.2 4.5-5.8 7.2z"
          fill="currentColor"
          stroke="none"
          opacity="0.9"
        />

        {/* ground line */}
        <path d="M14 70h60" strokeWidth="1.4" opacity="0.4" />
      </g>
    </svg>
  )
}

// ── MANGALSUTRA — necklace arc with black beads & two gold pendants ──
export function Mangalsutra({ className = '' }) {
  return (
    <svg viewBox="0 0 100 80" className={className} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        {/* the thread arc */}
        <path d="M14 14C30 50 70 50 86 14" fill="none" />
        {/* beads along the arc */}
        {Array.from({ length: 13 }).map((_, i) => {
          const tt = i / 12
          const x = 14 + tt * 72
          const y = 14 + Math.sin(Math.PI * tt) * 34
          return <circle key={i} cx={x} cy={y} r="2.1" fill="currentColor" stroke="none" />
        })}
        {/* two gold pendants at the bottom centre */}
        <path d="M44 47c0 6 4 10 4 10s4-4 4-10a4 4 0 0 0-8 0z" fill="currentColor" stroke="none" />
        <path d="M52 49c0 6 4 10 4 10s4-4 4-10a4 4 0 0 0-8 0z" fill="currentColor" stroke="none" opacity="0.85" />
      </g>
    </svg>
  )
}

// ── AGNI — the sacred fire in a homam kund (the 7 steps circle this) ──
export function Agni({ className = '' }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden="true">
      <g strokeLinecap="round" strokeLinejoin="round">
        {/* rising flames */}
        <path className="animate-glow" d="M40 12c4 10 12 14 12 24a12 12 0 0 1-24 0c0-7 6-11 8-18 2 4 0 9 3 11 3-6 1-12 1-17z" fill="#E8862E" stroke="none" />
        <path d="M40 26c2 5 5 7 5 12a5 5 0 0 1-10 0c0-4 3-6 5-12z" fill="#FFE08A" stroke="none" />
        {/* the kund (fire altar) — stepped trapezoid */}
        <path d="M20 50h40l6 10H14z" fill="currentColor" stroke="none" opacity="0.9" />
        <path d="M14 60h52v6H14z" fill="currentColor" stroke="none" opacity="0.7" />
      </g>
    </svg>
  )
}

// ── LIVE BROADCAST — a video camera with a play mark, plus signal arcs.
//    Unmistakably "video", which is what the live-stream section needs; the arcs
//    pulse outward on a stagger so it also reads as broadcasting live.
export function LiveBroadcast({ className = '' }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        {/* signal arcs rising from the camera, each pulsing on a delay */}
        {[0, 1, 2].map((i) => (
          <g
            key={i}
            className="animate-signal"
            // ripple outward from the lens, not the svg corner
            style={{ animationDelay: `${i * 0.4}s`, transformOrigin: '40px 46px' }}
          >
            <path
              d={`M${26 - i * 6} ${26 - i * 6}a${20 + i * 8} ${20 + i * 8} 0 0 1 ${28 + i * 12} 0`}
              strokeWidth={1.7 - i * 0.3}
              fill="none"
              opacity={0.8 - i * 0.2}
            />
          </g>
        ))}

        {/* camera body */}
        <rect x="16" y="38" width="34" height="24" rx="5" fill="currentColor" opacity="0.16" />
        <rect x="16" y="38" width="34" height="24" rx="5" strokeWidth="2.2" />

        {/* lens barrel on the right — the classic video-camera silhouette */}
        <path d="M50 46l12-6v22l-12-6z" fill="currentColor" opacity="0.22" />
        <path d="M50 46l12-6v22l-12-6z" strokeWidth="2.2" />

        {/* play triangle on the body */}
        <path d="M29 44.5v11l9-5.5z" fill="currentColor" stroke="none" opacity="0.95" />

        {/* small record dot, glowing */}
        <circle className="animate-glow" cx="22" cy="44" r="2.2" fill="#E0173C" stroke="none" />
      </g>
    </svg>
  )
}

// ── MANDAPAM — a temple gopuram / gateway (for the venue) ──
export function Mandapam({ className = '' }) {
  return (
    <svg viewBox="0 0 80 90" className={className} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* stepped gopuram tower */}
        <path d="M30 26h20l-3-8h-14z" fill="currentColor" stroke="none" />
        <path d="M26 34h28l-2-8H28z" fill="currentColor" opacity="0.9" stroke="none" />
        <path d="M22 44h36l-2-10H24z" fill="currentColor" opacity="0.8" stroke="none" />
        <circle cx="40" cy="14" r="3" fill="currentColor" stroke="none" />
        {/* two pillars */}
        <line x1="26" y1="44" x2="26" y2="80" />
        <line x1="54" y1="44" x2="54" y2="80" />
        {/* arched doorway between them */}
        <path d="M34 80V60a6 6 0 0 1 12 0v20" />
        {/* base step */}
        <line x1="18" y1="80" x2="62" y2="80" />
      </g>
    </svg>
  )
}

// Soft radiant mandala halo used behind the portraits.
function PortraitHalo() {
  return (
    <g opacity="0.5">
      <circle cx="60" cy="62" r="48" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.4" />
      {Array.from({ length: 36 }).map((_, i) => (
        <line key={i} x1="60" y1="12" x2="60" y2="18" stroke="currentColor" strokeWidth="0.8" opacity="0.4" transform={`rotate(${i * 10} 60 62)`} />
      ))}
    </g>
  )
}

// ════════════════════════════════════════════════════════════════════
//  GROOM PORTRAIT — turban (pagri) with kalgi & sarpech jewel, sehra
//  strands, face with moustache, sherwani collar, varmala garland.
//  Designed for a tall frame (viewBox 0 0 120 168).
// ════════════════════════════════════════════════════════════════════
export function GroomPortrait({ className = '' }) {
  return (
    <svg viewBox="0 0 120 168" className={className} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <PortraitHalo />

        {/* ── Turban / Pagri (layered wraps) ── */}
        <path d="M34 52c-2-22 50-22 52 0 0 4-2 7-2 7H36s-2-3-2-7z" fill="currentColor" stroke="none" opacity="0.9" />
        <path d="M37 50c3-8 43-8 46 0" />
        <path d="M40 44c4-6 36-6 40 0" opacity="0.8" />
        <path d="M44 39c4-4 28-4 32 0" opacity="0.6" />
        {/* sarpech jewel + kalgi plume */}
        <circle cx="60" cy="34" r="3.2" fill="currentColor" stroke="none" />
        <path d="M60 31c1-9 7-12 7-12-2 9-3 9-7 12z" fill="currentColor" stroke="none" opacity="0.85" />
        <path d="M60 31c-1-7-6-10-6-10 2 7 3 7 6 10z" fill="currentColor" stroke="none" opacity="0.7" />
        {/* sehra — flower strands hanging from the turban edge */}
        {[40, 47, 73, 80].map((x, i) => (
          <g key={i}>
            <line x1={x} y1="58" x2={x} y2="74" opacity="0.55" />
            <circle cx={x} cy="76" r="2" fill="currentColor" stroke="none" opacity="0.7" />
          </g>
        ))}

        {/* ── Face (soft oval) ── */}
        <path d="M45 62c0 6-1 9-1 13 0 13 7 22 16 22s16-9 16-22c0-4-1-7-1-13" fill="currentColor" stroke="none" opacity="0.1" />
        <path d="M45 62c0 6-1 9-1 13 0 13 7 22 16 22s16-9 16-22c0-4-1-7-1-13" />
        {/* gentle brows */}
        <path d="M50 73c3-1.5 6-1.5 8 0" opacity="0.9" />
        <path d="M62 73c2-1.5 5-1.5 8 0" opacity="0.9" />
        {/* almond eyes */}
        <path d="M51 78c2-2 6-2 8 0-2 2-6 2-8 0z" fill="currentColor" stroke="none" />
        <path d="M61 78c2-2 6-2 8 0-2 2-6 2-8 0z" fill="currentColor" stroke="none" />
        {/* nose */}
        <path d="M60 80c-1 3-1 5-2 6 1 1 3 1 4 0" opacity="0.7" />
        {/* neat handlebar moustache */}
        <path d="M60 90c-3 0-5-1-8-3 1 3 4 4 8 4 4 0 7-1 8-4-3 2-5 3-8 3z" fill="currentColor" stroke="none" opacity="0.9" />

        {/* ── Neck + sherwani collar (bandhgala) ── */}
        <path d="M54 102v8M66 102v8" opacity="0.6" />
        <path d="M30 150c2-22 14-32 30-32s28 10 30 32" fill="currentColor" stroke="none" opacity="0.14" />
        <path d="M30 150c2-22 14-32 30-32s28 10 30 32" />
        <path d="M48 120l12 10 12-10" />
        <path d="M60 130v20" opacity="0.7" />
        {/* button placket */}
        {[134, 142, 150].map((y, i) => (
          <circle key={i} cx="60" cy={y} r="1.6" fill="currentColor" stroke="none" opacity="0.8" />
        ))}

        {/* ── Varmala (flower garland) draped on the shoulders ── */}
        <path d="M46 122C40 138 40 150 42 160" opacity="0.7" />
        <path d="M74 122C80 138 80 150 78 160" opacity="0.7" />
        {[126, 134, 142, 150, 157].map((y, i) => (
          <g key={i}>
            <circle cx={42 - (y - 126) * 0.05} cy={y} r="2.4" fill="currentColor" stroke="none" opacity="0.75" />
            <circle cx={78 + (y - 126) * 0.05} cy={y} r="2.4" fill="currentColor" stroke="none" opacity="0.75" />
          </g>
        ))}
      </g>
    </svg>
  )
}

// ════════════════════════════════════════════════════════════════════
//  BRIDE PORTRAIT — draped veil, maang-tikka, bindi, jhumka earrings,
//  nath (nose-ring) with chain, layered necklaces, saree pallu.
//  Designed for a tall frame (viewBox 0 0 120 168).
// ════════════════════════════════════════════════════════════════════
export function BridePortrait({ className = '' }) {
  return (
    <svg viewBox="0 0 120 168" className={className} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <PortraitHalo />

        {/* ── Veil / Dupatta draped over the head and falling to shoulders ── */}
        <path d="M30 64C30 30 90 30 90 64" />
        <path d="M26 70C24 96 26 124 34 150" opacity="0.7" />
        <path d="M94 70C96 96 94 124 86 150" opacity="0.7" />
        {/* decorative border dots along the veil edge */}
        {[34, 40, 47, 73, 80, 86].map((x, i) => (
          <circle key={i} cx={x} cy={36 + Math.abs(60 - x) * 0.25} r="1.3" fill="currentColor" stroke="none" opacity="0.6" />
        ))}

        {/* ── Hair (centre parting) + maang tikka ── */}
        <path d="M44 56c2-16 30-16 32 0z" fill="currentColor" stroke="none" opacity="0.9" />
        <path d="M60 40v12" opacity="0.6" />
        <line x1="60" y1="40" x2="60" y2="34" opacity="0.6" />
        <circle cx="60" cy="33" r="2.6" fill="currentColor" stroke="none" />
        <circle cx="60" cy="52" r="1.8" fill="currentColor" stroke="none" opacity="0.85" />

        {/* ── Face (soft oval) ── */}
        <path d="M47 58c-1 6-1 9-1 13 0 13 6 22 14 22s14-9 14-22c0-4 0-7-1-13" fill="currentColor" stroke="none" opacity="0.1" />
        <path d="M47 58c-1 6-1 9-1 13 0 13 6 22 14 22s14-9 14-22c0-4 0-7-1-13" />
        {/* bindi */}
        <circle cx="60" cy="62" r="1.8" fill="currentColor" stroke="none" />
        {/* graceful brows */}
        <path d="M51 69c3-1.5 6-1.5 8 0" opacity="0.9" />
        <path d="M61 69c2-1.5 5-1.5 8 0" opacity="0.9" />
        {/* almond eyes */}
        <path d="M52 74c2-2 5-2 7 0-2 1.6-5 1.6-7 0z" fill="currentColor" stroke="none" />
        <path d="M61 74c2-2 5-2 7 0-2 1.6-5 1.6-7 0z" fill="currentColor" stroke="none" />
        {/* nose */}
        <path d="M60 76c-0.6 3-0.6 5-1.5 6 0.8 0.8 2.2 0.8 3 0" opacity="0.65" />
        {/* lips */}
        <path d="M56 86c2 1.4 6 1.4 8 0" opacity="0.85" />

        {/* ── Nath (nose ring) on the left cheek, with a fine chain to the ear ── */}
        <circle cx="55" cy="82" r="2.8" />
        <path d="M58 81C66 77 72 77 76 80" strokeWidth="0.9" opacity="0.55" />

        {/* ── Jhumka earrings (both sides) ── */}
        {[44, 76].map((x, i) => (
          <g key={i}>
            <circle cx={x} cy="74" r="1.8" fill="currentColor" stroke="none" />
            <path d={`M${x - 5} 80a5 4 0 0 0 10 0z`} fill="currentColor" stroke="none" opacity="0.85" />
            {[-3, 0, 3].map((dx, j) => (
              <circle key={j} cx={x + dx} cy="83" r="1.1" fill="currentColor" stroke="none" opacity="0.8" />
            ))}
          </g>
        ))}

        {/* ── Layered necklaces (haram) ── */}
        <path d="M44 100c6 8 26 8 32 0" />
        <path d="M40 104c8 14 32 14 40 0" opacity="0.85" />
        <path d="M36 110c10 20 38 20 48 0" opacity="0.7" />
        {/* pendants */}
        <circle cx="60" cy="110" r="2.2" fill="currentColor" stroke="none" />
        <circle cx="60" cy="120" r="2.6" fill="currentColor" stroke="none" opacity="0.85" />

        {/* ── Shoulders + saree pallu with a beaded border ── */}
        <path d="M28 152c3-20 16-30 32-30s29 10 32 30" fill="currentColor" stroke="none" opacity="0.14" />
        <path d="M28 152c3-20 16-30 32-30s29 10 32 30" />
        <path d="M34 138c8-8 44-8 52 0" opacity="0.6" />
        {[38, 46, 54, 62, 70, 78].map((x, i) => (
          <circle key={i} cx={x} cy={135 + Math.abs(58 - x) * 0.12} r="1.2" fill="currentColor" stroke="none" opacity="0.7" />
        ))}
      </g>
    </svg>
  )
}

// Small square icons for the family cards — reuse the compact portraits above,
// which read clearly at icon size.
export function GroomIcon({ className = '' }) {
  return <GroomPortrait className={className} />
}
export function BrideIcon({ className = '' }) {
  return <BridePortrait className={className} />
}

// ════════════════════════════════════════════════════════════════════
//  ARCH FILLERS (non-figure) — elegant motifs to fill the couple arches
//  when no photo is set. Tall viewBox (0 0 200 280) to suit the arch.
// ════════════════════════════════════════════════════════════════════

// (A) Lotus Mandala medallion — a layered blooming lotus inside concentric
//     rings, with a small kalash flourish below. Sacred & symmetrical.
export function ArchLotusMandala({ className = '' }) {
  return (
    <svg viewBox="0 0 200 280" className={className} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        {/* concentric rings */}
        <circle cx="100" cy="120" r="68" strokeWidth="0.7" opacity="0.35" />
        <circle cx="100" cy="120" r="56" strokeWidth="0.7" opacity="0.45" />
        {/* outer petal ring (16 petals) */}
        {Array.from({ length: 16 }).map((_, i) => (
          <path key={i} d="M100 64c5 9 5 17 0 26-5-9-5-17 0-26z" opacity="0.6" transform={`rotate(${i * 22.5} 100 120)`} />
        ))}
        {/* inner blooming lotus (8 petals) */}
        {Array.from({ length: 8 }).map((_, i) => (
          <path key={i} d="M100 88c7 10 7 22 0 32-7-10-7-22 0-32z" fill="currentColor" stroke="none" opacity="0.5" transform={`rotate(${i * 45} 100 120)`} />
        ))}
        {/* centre jewel */}
        <circle cx="100" cy="120" r="7" fill="currentColor" stroke="none" />
        <circle cx="100" cy="120" r="12" strokeWidth="0.8" opacity="0.6" />
        {/* small kalash flourish below */}
        <path d="M92 196c-3 10-3 26 0 36 3 5 13 5 16 0 3-10 3-26 0-36-2 4-14 4-16 0z" opacity="0.8" />
        <ellipse cx="100" cy="196" rx="9" ry="4" fill="currentColor" stroke="none" opacity="0.8" />
        <path d="M100 192c0-6 6-9 6-9-2 6-3 7-6 9z" fill="currentColor" stroke="none" opacity="0.7" />
        <path d="M100 192c0-6-6-9-6-9 2 6 3 7 6 9z" fill="currentColor" stroke="none" opacity="0.7" />
        <circle cx="100" cy="180" r="3.5" fill="currentColor" stroke="none" opacity="0.85" />
        {/* twin sprig flourishes flanking */}
        <path d="M64 232c10-4 16-2 20 6M136 232c-10-4-16-2-20 6" strokeWidth="0.9" opacity="0.55" />
      </g>
    </svg>
  )
}

// (B) Peacock pair — two facing mayura (very traditional wedding motif).
export function ArchPeacocks({ className = '' }) {
  const Peacock = ({ flip }) => (
    <g transform={flip ? 'translate(200 0) scale(-1 1)' : ''}>
      {/* body + curved neck */}
      <path d="M84 210c-6-14-4-30 8-40 8-7 8-18 2-26" />
      {/* head + beak + crest */}
      <circle cx="92" cy="140" r="4.5" fill="currentColor" stroke="none" />
      <path d="M95 138l7-3-6 5z" fill="currentColor" stroke="none" />
      <path d="M92 134c0-6 3-9 3-9M92 134c2-5 6-7 6-7" strokeWidth="0.8" opacity="0.7" />
      {/* sweeping tail feathers with eyes */}
      {[0, 1, 2, 3, 4].map((i) => {
        const ang = -8 + i * 14
        return (
          <g key={i} transform={`rotate(${ang} 78 210)`}>
            <path d="M78 210C70 178 70 150 78 120" strokeWidth="0.9" opacity="0.7" />
            <circle cx="78" cy="118" r="4" opacity="0.8" />
            <circle cx="78" cy="118" r="1.6" fill="currentColor" stroke="none" />
          </g>
        )
      })}
    </g>
  )
  return (
    <svg viewBox="0 0 200 280" className={className} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="100" cy="150" r="70" strokeWidth="0.6" opacity="0.25" />
        <Peacock flip={false} />
        <Peacock flip={true} />
        {/* a shared lotus they face, at the base */}
        <path d="M100 232c5 7 5 15 0 22-5-7-5-15 0-22z" fill="currentColor" stroke="none" opacity="0.6" />
        <path d="M100 254c-8-4-12-10-12-10 9-1 12 4 12 10zM100 254c8-4 12-10 12-10-9-1-12 4-12 10z" fill="currentColor" stroke="none" opacity="0.5" />
      </g>
    </svg>
  )
}

// (C) Kalash — auspicious pot with coconut & mango leaves and a flourish.
export function ArchKalash({ className = '' }) {
  return (
    <svg viewBox="0 0 200 280" className={className} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="100" cy="130" r="70" strokeWidth="0.6" opacity="0.25" />
        {/* mango leaves fanning out */}
        {[-38, -22, 0, 22, 38].map((a, i) => (
          <path key={i} d="M100 120c-4-16-2-30 0-36 2 6 4 20 0 36z" fill="currentColor" stroke="none" opacity="0.6" transform={`rotate(${a} 100 120)`} />
        ))}
        {/* coconut */}
        <circle cx="100" cy="92" r="11" fill="currentColor" stroke="none" opacity="0.85" />
        <path d="M100 81c0-7 5-11 5-11-2 7-2 8-5 11z" fill="currentColor" stroke="none" opacity="0.7" />
        {/* pot neck + body */}
        <path d="M82 122c-2-8 4-12 18-12s20 4 18 12" />
        <ellipse cx="100" cy="124" rx="22" ry="7" fill="currentColor" stroke="none" opacity="0.85" />
        <path d="M78 132c-8 22-8 56 0 78 6 10 38 10 44 0 8-22 8-56 0-78-4 8-40 8-44 0z" />
        {/* decorative bands */}
        <path d="M72 168h56M76 188h48" strokeWidth="0.9" opacity="0.5" />
        {/* tilak swirls on the pot */}
        <path d="M92 150c4 4 12 4 16 0" opacity="0.6" />
        {/* base flourishes */}
        <path d="M62 224c10-4 16-2 20 6M138 224c-10-4-16-2-20 6" strokeWidth="0.9" opacity="0.55" />
      </g>
    </svg>
  )
}

// ════════════════════════════════════════════════════════════════════
//  ARCH PORTRAITS — high-detail versions drawn for the large couple
//  arches (viewBox 0 0 200 280, figure fills the lower portion).
//  Finer linework + richer jewellery so they look refined when enlarged.
// ════════════════════════════════════════════════════════════════════
export function GroomArch({ className = '' }) {
  return (
    <svg viewBox="0 0 200 280" className={className} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {/* faint halo */}
        <circle cx="100" cy="120" r="74" strokeWidth="0.6" opacity="0.3" />
        {Array.from({ length: 48 }).map((_, i) => (
          <line key={i} x1="100" y1="50" x2="100" y2="56" strokeWidth="0.6" opacity="0.3" transform={`rotate(${i * 7.5} 100 120)`} />
        ))}

        {/* ── Pagri / turban — stacked wraps with fine seams ── */}
        <path d="M58 92c-4-30 88-30 84 0 0 5-3 9-3 9H61s-2-4-3-9z" fill="currentColor" stroke="none" opacity="0.9" />
        <path d="M61 90c6-14 72-14 78 0" />
        <path d="M64 80c8-11 64-11 72 0" opacity="0.85" />
        <path d="M70 70c8-8 52-8 60 0" opacity="0.7" />
        <path d="M76 62c7-6 41-6 48 0" opacity="0.55" />
        {/* turban folds */}
        {[72, 86, 100, 114, 128].map((x, i) => (
          <path key={i} d={`M${x} 101c${(100 - x) * 0.06}-12 ${(100 - x) * 0.12}-24 0-34`} strokeWidth="0.8" opacity="0.4" />
        ))}
        {/* sarpech jewel + kalgi plume */}
        <circle cx="100" cy="58" r="4" fill="currentColor" stroke="none" />
        <circle cx="100" cy="58" r="7" strokeWidth="0.8" opacity="0.6" />
        <path d="M100 52c2-16 11-21 11-21-3 15-5 16-11 21z" fill="currentColor" stroke="none" opacity="0.85" />
        <path d="M100 52c-1-12-8-17-8-17 2 12 3 13 8 17z" fill="currentColor" stroke="none" opacity="0.65" />
        {/* mukut hangings / pearl strands at the brow line */}
        {[70, 78, 122, 130].map((x, i) => (
          <g key={i}>
            <line x1={x} y1="100" x2={x} y2="116" strokeWidth="0.8" opacity="0.55" />
            <circle cx={x} cy="118" r="2" fill="currentColor" stroke="none" opacity="0.7" />
          </g>
        ))}

        {/* ── Face ── */}
        <path d="M74 104c-2 7-2 11-2 17 0 22 12 36 28 36s28-14 28-36c0-6 0-10-2-17" fill="currentColor" stroke="none" opacity="0.08" />
        <path d="M74 104c-2 7-2 11-2 17 0 22 12 36 28 36s28-14 28-36c0-6 0-10-2-17" />
        {/* ears + kundan studs */}
        <path d="M72 124c-5 0-6 7-1 9M128 124c5 0 6 7 1 9" opacity="0.7" />
        {/* brows */}
        <path d="M82 122c5-3 11-3 15 0" opacity="0.9" />
        <path d="M103 122c4-3 10-3 15 0" opacity="0.9" />
        {/* almond eyes with pupils */}
        <path d="M83 130c4-4 11-4 15 0-4 4-11 4-15 0z" fill="currentColor" stroke="none" />
        <path d="M102 130c4-4 11-4 15 0-4 4-11 4-15 0z" fill="currentColor" stroke="none" />
        <circle cx="90.5" cy="130" r="1.6" fill="#1C0A18" stroke="none" />
        <circle cx="109.5" cy="130" r="1.6" fill="#1C0A18" stroke="none" />
        {/* nose */}
        <path d="M100 134c-2 6-2 9-3 11 1.5 1.5 4.5 1.5 6 0" opacity="0.65" />
        {/* tilak */}
        <path d="M100 110v9" strokeWidth="1.6" opacity="0.6" />
        {/* handlebar moustache */}
        <path d="M100 152c-6 0-9-2-14-5 2 5 7 7 14 7s12-2 14-7c-5 3-8 5-14 5z" fill="currentColor" stroke="none" opacity="0.9" />

        {/* ── Neck + sherwani (bandhgala) ── */}
        <path d="M90 168v10M110 168v10" opacity="0.6" />
        <path d="M48 252c3-34 24-50 52-50s49 16 52 50" fill="currentColor" stroke="none" opacity="0.12" />
        <path d="M48 252c3-34 24-50 52-50s49 16 52 50" />
        {/* collar + placket */}
        <path d="M80 204l20 16 20-16" />
        <path d="M100 220v40" opacity="0.6" />
        {[228, 240, 252].map((y, i) => (
          <circle key={i} cx="100" cy={y} r="2" fill="currentColor" stroke="none" opacity="0.8" />
        ))}

        {/* ── Varmala (flower garland) on the shoulders ── */}
        <path d="M78 208C66 232 64 250 68 268" opacity="0.7" />
        <path d="M122 208C134 232 136 250 132 268" opacity="0.7" />
        {[214, 224, 234, 244, 254, 263].map((y, i) => (
          <g key={i}>
            <circle cx={68 - (y - 214) * 0.04} cy={y} r="3" strokeWidth="0.8" />
            <circle cx={68 - (y - 214) * 0.04} cy={y} r="1.2" fill="currentColor" stroke="none" />
            <circle cx={132 + (y - 214) * 0.04} cy={y} r="3" strokeWidth="0.8" />
            <circle cx={132 + (y - 214) * 0.04} cy={y} r="1.2" fill="currentColor" stroke="none" />
          </g>
        ))}
      </g>
    </svg>
  )
}

export function BrideArch({ className = '' }) {
  return (
    <svg viewBox="0 0 200 280" className={className} fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="100" cy="120" r="76" strokeWidth="0.6" opacity="0.3" />
        {Array.from({ length: 48 }).map((_, i) => (
          <line key={i} x1="100" y1="48" x2="100" y2="54" strokeWidth="0.6" opacity="0.3" transform={`rotate(${i * 7.5} 100 120)`} />
        ))}

        {/* ── Veil / dupatta draped over the head ── */}
        <path d="M50 116C50 56 150 56 150 116" />
        <path d="M44 124C40 168 44 220 56 264" opacity="0.7" />
        <path d="M156 124C160 168 156 220 144 264" opacity="0.7" />
        {/* veil border — beaded trim */}
        <path d="M50 116C50 60 150 60 150 116" strokeWidth="0.7" opacity="0.5" transform="translate(0 6)" />
        {Array.from({ length: 14 }).map((_, i) => {
          const a = Math.PI * (0.04 + i * 0.072)
          return <circle key={i} cx={100 - Math.cos(a) * 54} cy={120 - Math.sin(a) * 60} r="1.3" fill="currentColor" stroke="none" opacity="0.6" />
        })}

        {/* ── Hair centre-parting + maang-tikka chain ── */}
        <path d="M76 96c6-26 42-26 48 0z" fill="currentColor" stroke="none" opacity="0.9" />
        <path d="M100 70v26" strokeWidth="0.9" opacity="0.55" />
        <line x1="100" y1="70" x2="100" y2="58" opacity="0.55" />
        <circle cx="100" cy="56" r="4" fill="currentColor" stroke="none" />
        <circle cx="100" cy="56" r="6.5" strokeWidth="0.7" opacity="0.55" />
        <circle cx="100" cy="92" r="2.4" fill="currentColor" stroke="none" opacity="0.85" />

        {/* ── Face ── */}
        <path d="M76 100c-2 8-2 12-2 18 0 22 11 36 26 36s26-14 26-36c0-6 0-10-2-18" fill="currentColor" stroke="none" opacity="0.08" />
        <path d="M76 100c-2 8-2 12-2 18 0 22 11 36 26 36s26-14 26-36c0-6 0-10-2-18" />
        {/* bindi */}
        <circle cx="100" cy="108" r="2.4" fill="currentColor" stroke="none" />
        {/* brows */}
        <path d="M83 120c5-3 11-3 14 0" opacity="0.9" />
        <path d="M103 120c4-3 10-3 14 0" opacity="0.9" />
        {/* almond eyes with liner + pupils */}
        <path d="M84 128c4-4 11-4 14 0-3.5 3.6-10.5 3.6-14 0z" fill="currentColor" stroke="none" />
        <path d="M102 128c4-4 11-4 14 0-3.5 3.6-10.5 3.6-14 0z" fill="currentColor" stroke="none" />
        <circle cx="91" cy="128" r="1.5" fill="#1C0A18" stroke="none" />
        <circle cx="109" cy="128" r="1.5" fill="#1C0A18" stroke="none" />
        {/* nose */}
        <path d="M100 132c-1 6-1 9-2 11 1.2 1.2 3.2 1.2 4.4 0" opacity="0.6" />
        {/* lips */}
        <path d="M93 150c4 2.5 10 2.5 14 0" opacity="0.85" />

        {/* ── Nath (nose-ring) with chain to the ear ── */}
        <circle cx="92" cy="138" r="4" />
        <path d="M96 136C108 130 118 130 124 136" strokeWidth="0.8" opacity="0.5" />

        {/* ── Jhumka earrings ── */}
        {[72, 128].map((x, i) => (
          <g key={i}>
            <circle cx={x} cy="124" r="2.4" fill="currentColor" stroke="none" />
            <path d={`M${x - 8} 132a8 6 0 0 0 16 0z`} fill="currentColor" stroke="none" opacity="0.85" />
            {[-5, -1.6, 1.6, 5].map((dx, j) => (
              <circle key={j} cx={x + dx} cy="137" r="1.3" fill="currentColor" stroke="none" opacity="0.8" />
            ))}
          </g>
        ))}

        {/* ── Layered necklaces (choker + haram) ── */}
        <path d="M78 170c8 9 36 9 44 0" />
        <path d="M72 176c12 16 44 16 56 0" opacity="0.9" />
        <path d="M66 184c16 24 52 24 68 0" opacity="0.75" />
        <circle cx="100" cy="183" r="2.4" fill="currentColor" stroke="none" />
        <circle cx="100" cy="196" r="3" fill="currentColor" stroke="none" opacity="0.85" />
        {/* necklace beads */}
        {[-30, -20, -10, 0, 10, 20, 30].map((dx, i) => (
          <circle key={i} cx={100 + dx} cy={172 + Math.abs(dx) * 0.18} r="1.1" fill="currentColor" stroke="none" opacity="0.7" />
        ))}

        {/* ── Shoulders + saree pallu with beaded border ── */}
        <path d="M46 256c4-34 26-50 54-50s50 16 54 50" fill="currentColor" stroke="none" opacity="0.12" />
        <path d="M46 256c4-34 26-50 54-50s50 16 54 50" />
        <path d="M60 232c12-10 68-10 80 0" opacity="0.55" />
        {Array.from({ length: 9 }).map((_, i) => {
          const x = 62 + i * 9.5
          return <circle key={i} cx={x} cy={230 + Math.abs(100 - x) * 0.1} r="1.3" fill="currentColor" stroke="none" opacity="0.7" />
        })}
      </g>
    </svg>
  )
}

// Horizontal ornamental divider with a central lotus
export function Divider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
      <span className="gold-rule w-16 md:w-28" />
      <svg viewBox="0 0 40 40" className="h-6 w-6 text-gold" fill="none">
        <path
          d="M20 4c3 6 3 10 0 16-3-6-3-10 0-16zM20 36c-3-6-3-10 0-16 3 6 3 10 0 16zM4 20c6-3 10-3 16 0-6 3-10 3-16 0zM36 20c-6 3-10 3-16 0 6-3 10-3 16 0z"
          fill="currentColor"
          opacity="0.85"
        />
        <circle cx="20" cy="20" r="2.5" fill="currentColor" />
      </svg>
      <span className="gold-rule w-16 md:w-28" />
    </div>
  )
}

// A faint, large rotating mandala used as a background flourish
export function MandalaBg({ className = '' }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" aria-hidden="true">
      <g className="animate-spinSlow" style={{ transformOrigin: '100px 100px' }}>
        {Array.from({ length: 16 }).map((_, i) => (
          <g key={i} transform={`rotate(${i * 22.5} 100 100)`}>
            <path d="M100 20c6 14 6 26 0 40-6-14-6-26 0-40z" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
            <circle cx="100" cy="26" r="2" fill="currentColor" opacity="0.6" />
          </g>
        ))}
        <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
        <circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
        <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.6" opacity="0.25" />
      </g>
    </svg>
  )
}

// Corner flourish (paisley-ish) for framing sections
export function CornerFlourish({ className = '' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" aria-hidden="true">
      <path d="M4 4c30 0 54 4 70 20s20 40 20 70" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <path d="M4 18c22 0 40 4 52 16s16 30 16 52" stroke="currentColor" strokeWidth="0.9" opacity="0.35" />
      <path d="M18 6c4 8 2 16-4 20s-14 2-16-4c6 2 12 0 14-4s4-8 6-12z" fill="currentColor" opacity="0.5" />
    </svg>
  )
}

// Maps an event icon name to a motif component
export function EventIcon({ name, className = '' }) {
  switch (name) {
    case 'wedding':
      return <Jaimala className={className} />
    case 'vratham':
      return <PujaThali className={className} />
    case 'pellikoduku':
      return <GroomPortrait className={className} />
    case 'pellikuthuru':
      return <BridePortrait className={className} />
    case 'upanayanam':
      return <Yagnopaveetham className={className} />
    case 'haldi':
      return <HaldiBowl className={className} />
    case 'mehendi':
      return <Lotus className={className} />
    case 'sangeet':
      return <Diya className={className} />
    case 'reception':
      return <Kalash className={className} />
    default:
      return <Lotus className={className} />
  }
}
