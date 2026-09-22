/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /** Main page background — warm, not bright white */
        cream: "#F7F0E8",
        /** Cards & letter paper — slightly lighter than cream */
        ivory: "#FFFDF9",
        blush: "#E8C7C3",
        "dusty-rose": "#9A6B63",
        "warm-brown": "#5C4A42",
        charcoal: "#2C2624",
        "deep-brown": "#1F1B19",
        gold: "#B99A65",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
      },
      boxShadow: {
        soft: "0 8px 32px rgba(44, 38, 36, 0.08)",
        polaroid: "0 12px 28px rgba(44, 38, 36, 0.14)",
        glow: "0 0 40px rgba(232, 199, 195, 0.45), 0 0 80px rgba(185, 154, 101, 0.15)",
        "glow-gold": "0 0 28px rgba(185, 154, 101, 0.45)",
        "glow-blush": "0 0 36px rgba(232, 199, 195, 0.5)",
      },
      backgroundImage: {
        "paper-texture":
          "radial-gradient(circle at 20% 20%, rgba(232,221,210,0.9), transparent 50%), radial-gradient(circle at 80% 0%, rgba(233,198,193,0.28), transparent 45%)",
      },
    },
  },
  plugins: [],
};
