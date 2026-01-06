import { ipcRenderer } from "electron";

// Very primitive implementation of a proxy api
export function createAPIProxy<T extends object>() {
  const proxyHandler: ProxyHandler<T> = {
    get: (_, channel, __) => {
      if (typeof channel !== "string") {
        throw Error("Unsupported channel...");
      }

      return (...args: any[]) => {
        console.log(`Calling: ${String(channel)}`);
        return ipcRenderer.invoke(channel, ...args);
      };
    },
  };

  return new Proxy<T>({} as T, proxyHandler);
}
