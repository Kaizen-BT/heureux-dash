import { createAPIProxy } from "@app/ipc-bridge/client";
import { sha256sum } from "./nodeCrypto.js";
import { versions } from "./versions.js";
import { ipcRenderer } from "electron";
import { APICONTRACT } from "@app/api";

function send(channel: string, message: string) {
  return ipcRenderer.invoke(channel, message);
}

const { sayHi } = createAPIProxy({ api: APICONTRACT });

export { sha256sum, versions, send, sayHi };
