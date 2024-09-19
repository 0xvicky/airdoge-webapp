/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/src/assets/hero.svg')",
        "hero1-bg": "url('/src/assets/HeroImg1.svg')",
        "tokenomics-bg": "url('/src/assets/tokenomics1.svg')",
        "roadmap-bg": "url('/src/assets/roadmapbg.svg')"
      }
    }
  },
  plugins: []
};
