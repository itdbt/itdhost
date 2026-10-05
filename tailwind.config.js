/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#070D18',
          card: '#0D1527',
          cardHover: '#131F38',
          border: '#1E2D4A',
          blue: '#2563EB',
          cyan: '#06B6D4',
          accent: '#0EA5E9',
          light: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 20%, rgba(6, 182, 212, 0.15), transparent 70%)',
      }
    },
  },
  plugins: [],
}
