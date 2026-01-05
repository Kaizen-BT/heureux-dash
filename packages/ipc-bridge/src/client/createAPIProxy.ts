import { ipcRenderer } from "electron";

// Very primitive implementation of a proxy api
export function createAPIProxy<T extends object>() {
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

  return new Proxy({} as T, proxyHandler);
}
