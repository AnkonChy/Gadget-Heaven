/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "bg-violet": "#9538E2",
      },
      fontFamily: {
        Inter: "Inter",
        Sora: "Sora",
      },
    },
  },
  plugins: [require("daisyui")],
};
