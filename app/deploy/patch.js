import fs from 'fs'

console.log("PATCH STARTING")

const replaceGlobal = async () => {
  const buffer = await fs.promises.readFile('node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js');
  const data = buffer.toString()
  const result = data.replace(/global\$1/g, 'globalObject');
  fs.writeFileSync('node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js', result);
}

const removeWindowOrGlobalFromFloatingMenu = async () => {
  const buffer = await fs.promises.readFile('node_modules/carbon-components-react/es/internal/FloatingMenu.js');
  const data = buffer.toString()
  const result = data.replace(/import window from \'window-or-global\'\;/g, '');
  fs.writeFileSync('node_modules/carbon-components-react/es/internal/FloatingMenu.js', result);
}
const removeWindowOrGlobalFromOptimizeResize = async () => {
  let buffer = await fs.promises.readFile('node_modules/carbon-components-react/es/internal/OptimizedResize.js');
  let data = buffer.toString()
  let result = data.replace(/import window from \'window-or-global\'\;/g, '');
  fs.writeFileSync('node_modules/carbon-components-react/es/internal/OptimizedResize.js', result);
}

const removeBogusImport = async () => {
  let buffer = await fs.promises.readFile('node_modules/react-virtualized/dist/es/WindowScroller/utils/onScroll.js');
  let data = buffer.toString()
  let result = data.replace(/import \{ bpfrpt_proptype_WindowScroller \} from \"\.\.\/WindowScroller\.js\"\;/g, '');
  fs.writeFileSync('node_modules/react-virtualized/dist/es/WindowScroller/utils/onScroll.js', result);
}

const elyraTypeDec = "declare module '@elyra/canvas'";
try {
  console.log("\nPatching in @elya/canvas module declaration ..")
  fs.writeFileSync('node_modules/@elyra/canvas/dist/common-canvas.d.ts', elyraTypeDec, { flag: 'w+' });
  console.log("Module declaration complete!")
  
} catch (err) {
  console.error(err);
}

try {
  console.log("\nPatching resize-observer-polyfill 'global$1' variable name ..")
  replaceGlobal()
  console.log("Variable name change complete!")
} catch (err) {
  console.error(err);
}

try {
  console.log("\nRemoving window-or-global from FloatingMenu.js ..")
  removeWindowOrGlobalFromFloatingMenu()
  console.log("Removal complete!")
} catch (err) {
  console.error(err);
}

try {
  console.log("\nRemoving window-or-global from OptimizeResize.js ..")
  removeWindowOrGlobalFromOptimizeResize()
  console.log("Removal complete!")
} catch (err) {
  console.error(err);
}

try {
  console.log("\nRemoving weird import from OnScroll.js ..")
  removeBogusImport()
  console.log("Removal complete!")
} catch (err) {
  console.error(err);
}

console.log("PATCH TERMINATING")