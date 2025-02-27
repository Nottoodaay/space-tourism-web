/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-page-bg": "url('assets/home/background-home-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
