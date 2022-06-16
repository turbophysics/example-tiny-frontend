import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { tinyFrontendName } from "../contract/package.json";
import { rollupExternals } from "../contract/rollupExternals";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3210
  },
  plugins: [react()],
  build: {
    lib: {
      entry: "./lib/index.tsx",
      name: `elyraTestAppExports.${tinyFrontendName}`,
      fileName: (format) => `elyra-test-app.${format}.js`,
      formats: ["umd"],
    },
    rollupOptions: {
      ...rollupExternals,
    },
  },
});
