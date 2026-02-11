import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Use "/cv-website-no/" for GitHub Pages, "/" for Vercel and other deployments
export default defineConfig({
  plugins: [react()],
  base: process.env.VERCEL ? "/" : "/cv-website-no/",
});
