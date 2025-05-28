import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  preview: {
    port: 4173,
    host: true,
    allowedHosts: ["dev.wolff-kevin.fr", "www.dev.wolff-kevin.fr"],
  },
});
