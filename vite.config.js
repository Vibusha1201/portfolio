import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// ✅ Set base to your GitHub repo name (important for GitHub Pages)
export default defineConfig({
  base: "/portfolio/",
  plugins: [react(), tailwindcss()],
});
