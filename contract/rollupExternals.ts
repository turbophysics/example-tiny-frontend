export const rollupExternals = {
  external: [
    "react",
    "resize-observer-polyfill",
    "carbon-components-react",
  ],
  output: {
    globals: {
      react: "tinyFrontendDeps.react",
      resizeObserver: "tinyFrontendDeps.resize-observer-polyfill",
      carbonComponentsReact: "tinyFrontendDeps.carbon-components-react"
    },
  },
};
