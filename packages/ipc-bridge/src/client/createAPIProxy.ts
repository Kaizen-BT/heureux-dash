import { ipcRenderer } from "electron";
import type { APIProxyProps } from "../types";

// Very primitive implementation of a proxy api
export function createAPIProxy<T extends Record<string, Function>>({
  api,
}: APIProxyProps<T>) {
  const proxyHandler: ProxyHandler<T> = {
    get: (_, channel, __) => {
      console.log(`Calling: ${String(channel)}`);

      if (typeof channel !== "string") {
        throw Error("Unsupported channel...");
      }

      return (...args: any[]) => {
        return ipcRenderer.invoke(channel, args);
      };
    },
  };

  return new Proxy(api, proxyHandler);
}
