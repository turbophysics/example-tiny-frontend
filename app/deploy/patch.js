const fs = require('fs');

const content = "declare module '@elyra/canvas'";
// echo "declare module '@elyra/canvas';" >> node_modules/@elyra/canvas/dist/common-canvas.d.ts
try {
  console.log("Patching in @elya/canvas module declaration ..")
  fs.writeFileSync('../node_modules/@elyra/canvas/dist/common-canvas.d.ts', content);
  console.log("Module declaration complete!")

} catch (err) {
  console.error(err);
}