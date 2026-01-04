import type { AppModule } from "../AppModule.js";
import { ModuleContext } from "../ModuleContext.js";
import { APICONTRACT } from "@app/api";
import { serveAPIProxy } from "@app/ipc-bridge/server";
/**
 * ApplicationDatabase module responsible for applying migrations
 * and initializing the connection to the Database
 */
class APIModule implements AppModule {
  async enable({ app }: ModuleContext): Promise<void> {
    serveAPIProxy({ api: APICONTRACT });
  }
}

export function createAPIModule() {
  return new APIModule();
}
