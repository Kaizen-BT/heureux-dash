import { ipcRenderer } from "electron";
import { APIProxyProps } from "../types";

// Very primitive implementation of a proxy api
export function createAPIProxy<T extends Record<string, Function>>({
  api,
}: APIProxyProps<T>) {
  const proxyHandler: ProxyHandler<T> = {
    get: (target, channel, receiver) => {
      console.log(`Calling: ${String(channel)}`);
      const handler = Reflect.get(target, channel, receiver);

      if (typeof channel !== "string") {
        throw Error("Unsupported channel...");
      }

      return (...args: any[]) => {
        return ipcRenderer.invoke(channel, ...args);
      };
    },
  };

  return new Proxy(api, proxyHandler);
}
