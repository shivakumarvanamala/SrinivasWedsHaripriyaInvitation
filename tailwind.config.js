/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ✦ Royal plum + gold palette (sacred, premium, dark) ✦
        plum: {
          DEFAULT: '#2A1124', // base background
          deep: '#1C0A18', // darkest
          soft: '#3A1A33', // card / raised surface
          light: '#4A2440',
        },
        wine: '#5A1730',
        gold: {
          light: '#F3D697',
          DEFAULT: '#C9A24B', // primary gold
          deep: '#9C7A2E',
          foil: '#E5C16C',
          dim: '#7C6230',
        },
        cream: { DEFAULT: '#F7ECCF', soft: '#EADFBE' },
        maroon: { DEFAULT: '#7B1E33', deep: '#5A1326' },
        ink: '#F3E9D2', // default light text on dark bg
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        heading: ['"Marcellus"', 'Georgia', 'serif'],
        sans: ['"Mukta"', 'system-ui', 'sans-serif'],
        deco: ['"Tangerine"', 'cursive'],
        telugu: ['"Noto Serif Telugu"', '"Ramaraja"', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F3D697 0%, #C9A24B 45%, #9C7A2E 100%)',
        'plum-radial': 'radial-gradient(circle at 50% 25%, #3A1A33 0%, #2A1124 50%, #1C0A18 110%)',
        'plum-deep-radial': 'radial-gradient(circle at 50% 40%, #3A1A33 0%, #1C0A18 120%)',
      },
      boxShadow: {
        gold: '0 12px 45px -14px rgba(201, 162, 75, 0.45)',
        glow: '0 0 28px -2px rgba(229, 193, 108, 0.45)',
        card: '0 24px 55px -22px rgba(0, 0, 0, 0.7)',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        floatUp: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.8' },
          '100%': { transform: 'translateY(-110vh) rotate(360deg)', opacity: '0' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.65', filter: 'drop-shadow(0 0 5px #C9A24B)' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 16px #E5C16C)' },
        },
        spinSlow: { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
        floatSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.7)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
      },
      animation: {
        shimmer: 'shimmer 5s ease infinite',
        glow: 'glowPulse 2.8s ease-in-out infinite',
        spinSlow: 'spinSlow 50s linear infinite',
        floatSoft: 'floatSoft 5s ease-in-out infinite',
        sparkle: 'sparkle 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
