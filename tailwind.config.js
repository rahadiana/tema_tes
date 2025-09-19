/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./js/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // Indonesian Government Color Palette
        'gov': {
          'primary': '#1e3a8a',     // Deep government blue
          'secondary': '#1d4ed8',   // Royal blue
          'accent': '#3b82f6',      // Bright blue
          'dark': '#0f172a',        // Dark navy
          'light': '#f1f5f9',       // Light blue-gray
        },
        'bekasi': {
          'primary': '#02577a',     // Original Bekasi blue
          'accent': '#02a9f7',      // Original Bekasi light blue
          'dark': '#083344',        // Darker version
        },
        'indonesia': {
          'red': '#dc2626',         // Indonesia flag red
          'gold': '#fbbf24',        // Indonesian gold
        }
      },
      fontFamily: {
        'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
}

