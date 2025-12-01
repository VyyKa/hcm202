/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C45A5A",      // muted red/pink, gần màu mảng brush
        cream: "#F6E6C9",        // warm cream, gần nền slide
        slate: "#3C2A2A",        // dark brown text
        accent: "#E3A35B",       // warm orange accent
        'muted-slate': '#6A5858',
      },
      fontFamily: {
        serif: ["Merriweather", "serif"],      // headings
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"] // body
      },
      boxShadow: {
        'soft-lg': '0 10px 30px rgba(26,26,26,0.08)'
      },
      borderRadius: {
        '2xl': '1rem',
      }
    }
  },
  plugins: [],
}
