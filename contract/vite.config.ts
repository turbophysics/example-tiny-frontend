import { defineConfig } from "vite";

import { rollupExternals } from "./rollupExternals";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "./src/main.ts",
      name: "elyra-test-contract",
      fileName: (format) => `elyra-test-contract.${format}.js`,
    },
    rollupOptions: {
      ...rollupExternals,
    },
  },
});
