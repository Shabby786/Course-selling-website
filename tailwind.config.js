/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",


"./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
  },
 daisyui: {
    themes: [
      {
        light: {
          "primary": "#4f46e5", // Adjust these colors to your preference
          "secondary": "#3b82f6",
          "accent": "#9333ea",
          "neutral": "#f9fafb",
          "base-100": "#ffffff", // White background
          "info": "#2094f3",
          "success": "#009485",
          "warning": "#ff9900",
          "error": "#ff5724",
        },
      },
      // Add other themes if needed
    ],
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('daisyui')
  ],
}

