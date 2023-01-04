import type { InjectedAccountWithMeta } from '@polkadot/extension-inject/types'

export interface IAccountItem {
  account: InjectedAccountWithMeta
  selectActiveAccount: (_account: InjectedAccountWithMeta) => void
  isActiveAccount: boolean
}
