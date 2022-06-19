import { deployBundle } from "@tiny-frontend/deploy-cloudflare";
import dotenv from "dotenv";
import { readFile } from "fs/promises";
import { exec } from 'child_process'

exec("../elyra-type-dec.sh", (error, stdout, stderr) => {
  if (error) {
      console.log(`error: ${error.message}`);
      return;
  }
  if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
  }
  console.log(`stdout: ${stdout}`);
});


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
