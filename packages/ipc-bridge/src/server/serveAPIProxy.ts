import { ipcMain } from "electron";
import { APIProxyProps } from "../types";

// Very primitive implementation of the ICP API Server...
export function serveAPIProxy<T extends object>({ api }: APIProxyProps<T>) {
  Object.entries(api).forEach(([channel, handler]) => {
    ipcMain.handle(channel, (_, args) => handler(...args));
    console.log(`Registered: ${channel}`);
  });
}
