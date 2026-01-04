import { createAPIProxy } from "@app/ipc-bridge/client";
import { sha256sum } from "./nodeCrypto.js";
import { versions } from "./versions.js";
import { ipcRenderer } from "electron";
import type { IPCBridge } from "@app/api";

function send(channel: string, message: string) {
  return ipcRenderer.invoke(channel, message);
}

// NOTE: There is no need for an actual API implementation since we just invoke ipcRenderer
export const { getProjects, getMilestones, getTasks, getProject } =
  createAPIProxy<IPCBridge>();

export { sha256sum, versions, send };
