import { ipcMain } from "electron";
import { APIProxyProps } from "../types";

// Very primitive implementation of the ICP API Server...
export function serveAPIProxy<T extends Record<string, Function>>({
  api,
}: APIProxyProps<T>) {
  Object.entries(api).forEach(([channel, handler]) => {
    ipcMain.on(channel, (_, args) => handler(args));
  });
}
