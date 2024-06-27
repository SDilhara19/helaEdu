import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets/"),
      "@styles": path.resolve(__dirname, "./src/styles/"),
      "@components": path.resolve(__dirname, "./src/components/"),
    },
  },
});
