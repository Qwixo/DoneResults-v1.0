/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      colors: {
        transparent: "transparent",
        white: "white",
        black: "black",
        blue: {
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
        },
        indigo: {
          300: "#a5b4fc",
        },
        violet: {
          200: "#ddd6fe",
        },
      },
    },
  },
  plugins: [],
  safelist: [
    "--white",
    "--black",
    "--transparent",
    "--blue-300",
    "--blue-400",
    "--blue-500",
    "--indigo-300",
    "--violet-200",
  ],
}
