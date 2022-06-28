/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg":
          "url('https://images.ctfassets.net/oydui2rqm15t/5uiGxfACGExx4JowrU5YyT/5a1db774cf6968169ccf5b9a16f6d085/home.png')",
      },
      fontSize: {
        dynamic: "clamp(20.5vw, 12vw, 5vw)",
        normal: "clamp(2vw, 1.5vw, 1vw)",
        bigger: "clamp(3.8vw, 2vw, 1vw)",
      },
    },
  },
  plugins: [],
};
