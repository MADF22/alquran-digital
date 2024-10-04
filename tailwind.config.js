export default {
  content: [
    "./index.html", // Jika file ini berada di root proyek
    "./src/**/*.{js,ts,jsx,tsx}", // Untuk semua file JS/TS/JSX/TSX di dalam folder src
    "node_modules/daisyui/dist/**/*.js", // Untuk komponen DaisyUI jika ada
    "node_modules/react-daisyui/dist/**/*.js", // Untuk React DaisyUI jika ada
  ],
  theme: {
    extend: {}, // Jika kamu ingin menambahkan custom styles di sini
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [require("daisyui")], // DaisyUI sebagai plugin Tailwind
};
