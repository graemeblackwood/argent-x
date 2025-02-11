import Emittery from "emittery"
import type { MinimalWalletSessionService } from "./decorators"
import type { Events } from "../../../wallet/session/interface"
import { Locked } from "../../../wallet/session/interface"

interface MockSssionServiceManager {
  setLocked(locked: boolean): Promise<void>
}

export const getMockSessionService = (): [
  MockSssionServiceManager,
  MinimalWalletSessionService,
] => {
  const emitter = new Emittery<Events>()
  let locked = false
  const setLocked = (newLocked: boolean) => {
    locked = newLocked
    return emitter.emit(Locked, locked)
  }
  const sessionService: MinimalWalletSessionService = {
    get locked() {
      return locked
    },
    emitter,
  }
  return [
    {
      setLocked,
    },
    sessionService,
  ]
}
