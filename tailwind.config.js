/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'navbar-mobile': "url('./assets/images/bg-sidebar-mobile.svg')",
        'navbar-desktop': "url('./assets/images/bg-sidebar-desktop.svg')",
        
      }
    },
  },
  plugins: [],
}
