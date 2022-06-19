import { deployBundle } from "@tiny-frontend/deploy-cloudflare";
import dotenv from "dotenv";
import { readFile } from "fs/promises";

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

const contractPackageJsonPath = new URL(
  "../../contract/package.json",
  import.meta.url
).pathname;
const packageJsonAsBuffer = await readFile(contractPackageJsonPath);

const { tinyFrontendName, version } = JSON.parse(
  packageJsonAsBuffer.toString()
);

dotenv.config({
  path: new URL(".env", import.meta.url).pathname,
});

await deployBundle({
  name: tinyFrontendName,
  contractVersion: version,
  umdBundlePath: new URL(
    "../dist/elyra-canvas-final.umd.js",
    import.meta.url
  ).pathname,
  cssBundlePath: new URL("../dist/style.css", import.meta.url).pathname,
  cloudflare: {
    accountIdentifier: process.env.CF_ACCOUNT_ID,
    apiToken: process.env.CF_API_TOKEN,
    kvNamespaceIdentifier: process.env.CF_KV_NAMESPACE,
  },
});
