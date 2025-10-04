// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// ✅ Important: Set base to the repo name
export default defineConfig({
  base: "/portfolio/",
  plugins: [react(), tailwindcss()],
  base: "/portfolio/", // <-- ADD THIS LINE
});
