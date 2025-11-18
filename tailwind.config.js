/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // O 'media' si prefieres detección automática
  theme: {
    extend: {
      colors: {
        "primary": "#004A99",
        "background-light": "#F5F7FA",
        "background-dark": "#101622",
        "text-light": "#1C1C1E",
        "text-dark": "#F5F7FA",
        "text-secondary-light": "#6b7280",
        "text-secondary-dark": "#9ca3af",
        "input-bg-light": "#ffffff",
        "input-bg-dark": "#1c1f27",
        "input-border-light": "#d1d5db",
        "input-border-dark": "#3b4354",
        "error": "#D93025"
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"]
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // require('@tailwindcss/container-queries'), // Instalar si es necesario
  ],
}