import path from "node:path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { stylex } from "vite-plugin-stylex-dev";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    stylex(
      {
        manuallyControlCssOrder: {
          id: path.join(import.meta.dirname, "src/styles/index.css"),
          symbol: "@stylex-styles",
        },
      },
    ),
  ],
});
