import { sha256sum } from "./nodeCrypto.js";
import { versions } from "./versions.js";
import { ipcRenderer } from "electron";
import { createAPIProxy } from "@app/ipcBridge/client";

function send(channel: string, message: string) {
  return ipcRenderer.invoke(channel, message);
}

const myAPI = {
  getName: (name: string) => `${name}`,
};

const proxy = createAPIProxy({ api: myAPI });
console.log(proxy.getName("Alen"));

export { sha256sum, versions, send };
