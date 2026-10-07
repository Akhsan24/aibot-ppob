/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebar: '#1e293b',
        content: '#f1f5f9',
        primary: '#3b82f6',
        success: '#22c55e',
        danger: '#ef4444',
        warning: '#eab308'
      }
    },
  },
  plugins: [],
}
