import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { tinyFrontendName } from "../contract/package.json";
import { rollupExternals } from "../contract/rollupExternals";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./lib/index.tsx",
      name: `tinyFrontendExports.${tinyFrontendName}`,
      fileName: (format) => `elyra-canvas-final.${format}.js`,
      formats: ["umd"],
    },
    rollupOptions: {
      ...rollupExternals,
    },
  },
  server: {
    port: 3333
  },
  define: {
    "global": {},
  },
});
