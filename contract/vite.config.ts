import { defineConfig } from "vite";

import { rollupExternals } from "./rollupExternals";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "./src/main.ts",
      name: "elyraCanvasFinalContract",
      fileName: (format) => `elyra-canvas-final-contract.${format}.js`,
    },
    rollupOptions: {
      ...rollupExternals,
    },
  },
});
