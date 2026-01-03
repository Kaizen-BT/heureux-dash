import { sha256sum } from "./nodeCrypto.js";
import { versions } from "./versions.js";
import { ipcRenderer } from "electron";
import { exposeElectronTRPC } from "electron-trpc/main";

function send(channel: string, message: string) {
  return ipcRenderer.invoke(channel, message);
}

// Expose tRPC
process.once("loaded", async () => {
  exposeElectronTRPC();
});

export { sha256sum, versions, send };
