import type {
  InjectedAccountWithMeta,
  InjectedExtension,
} from '@polkadot/extension-inject/types'
import { SubmitTxBlockingType, WaitUntil } from 'ternoa-js'
import { HexType } from '../../types'

export interface ITernoaConnectProvider {
  children: React.ReactNode
}

export type TernoaConnectContextType = {
  isAccountConnected: boolean
  extensions: InjectedExtension[] | null
  currentActiveExtension: InjectedExtension | null
  accounts: InjectedAccountWithMeta[] | null
  currentActiveAccount: InjectedAccountWithMeta | null
  connect: () => void
  toggleModal: () => void
  selectNewActiveAccount: (_account: InjectedAccountWithMeta) => void
  sign: (txHex: HexType) => void | Promise<HexType>
  signAndSubmit: (
    txHex: HexType,
    waitUntil?: WaitUntil
  ) => void | Promise<SubmitTxBlockingType>
}
