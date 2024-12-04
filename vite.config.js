import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/sanaz/",
  server: {
    port: 3000,
  },
  plugins: [react()],
});
