/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['futura', 'system-ui'],
    },
    extend: {
      keyframes: {
        scale: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.5)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'moving-circles': 'scale 20s linear infinite',
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
}

