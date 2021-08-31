import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer"

import module from "./index"

export function setupProdMockServer(): void {
  return createProdMockServer([...module])
}
