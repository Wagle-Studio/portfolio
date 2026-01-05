import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const uiPath = new URL("./src/ui", import.meta.url).pathname;
const dataPath = new URL("./src/data", import.meta.url).pathname;

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@/ui",
        replacement: uiPath,
      },
      {
        find: "@/data",
        replacement: dataPath,
      },
    ],
  },
  preview: {
    port: 4173,
    host: true,
    allowedHosts: ["wolff-kevin.fr", "www.wolff-kevin.fr"],
  },
});
