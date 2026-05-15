import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/beauty-hub-landing/",
  plugins: [react()],
});
