/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        dragimg: "url('/src/assets/bg-upload.svg')",
        backg: "url('/src/assets/photobooth_bg.jpg')",
        backg1: "url('/src/assets/festa_logo.png')",
      }),
      fontFamily: {
        semiboldsans: ["Recursive", "sans-serif"],
        pinyon: ["Pinyon Script", "cursive"],
        monsieur: ["Monsieur La Doulaise", "cursive"],
        passions: ["Passions Conflict", "cursive"],
        guwndolyn: ["Gwendolyn", "cursive"],
        ballet: ["Ballet", "cursive"],
      },
    },
  },
  
  plugins: [],
}