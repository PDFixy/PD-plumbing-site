/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",   // ✅ Scan App Router pages
    "./src/components/**/*.{js,ts,jsx,tsx}", // ✅ Scan components
    "./src/pages/**/*.{js,ts,jsx,tsx}", // (optional if using Pages Router too)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
