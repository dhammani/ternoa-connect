import { createContext, useState } from 'react'

import {
  web3Accounts,
  web3Enable,
  web3FromSource,
} from '@polkadot/extension-dapp'

import type {
  InjectedAccountWithMeta,
  InjectedExtension,
} from '@polkadot/extension-inject/types'
import {
  WaitUntil,
  getRawApi,
  isApiConnected,
  query,
  submitTxBlocking,
} from 'ternoa-js'
import { Modal } from '../../components/Modal'
import {
  ITernoaConnectProvider,
  TernoaConnectContextType,
} from './TernoaConnect.types'
import { HexType } from '../../types'

const DAPP_NAME = 'NFT Manager'

const defaultTernoaConnectValues = {
  isAccountConnected: false,
  extensions: null,
  currentActiveExtension: null,
  accounts: null,
  currentActiveAccount: null,
  connect: () => {},
  toggleModal: () => {},
  selectNewActiveAccount: (_account: InjectedAccountWithMeta) => {},
  sign: (_txHex: HexType) => {},
  signAndSubmit: (_txHex: HexType, _waitUntil?: WaitUntil) => {},
}

export const TernoaConnectContext = createContext<TernoaConnectContextType>(
  defaultTernoaConnectValues
)

export function TernoaConnectProvider({ children }: ITernoaConnectProvider) {
  const [extensions, setExtensions] = useState<InjectedExtension[] | null>(null)
  const [currentActiveExtension, setCurrentActiveExtension] =
    useState<InjectedExtension | null>(null)

  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[] | null>(
    null
  )
  const [currentActiveAccount, setCurrentActiveAccount] =
    useState<InjectedAccountWithMeta | null>(null)

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const connect = async () => {
    const _extensions = await web3Enable(DAPP_NAME)
    console.log('_extensions', _extensions)
    setExtensions(_extensions)

    const _accounts = await web3Accounts()
    console.log('_accounts', _accounts)
    setAccounts(_accounts)
    setIsModalOpen(true)
  }

  const selectNewActiveAccount = (_account: InjectedAccountWithMeta): void => {
    if (_account.address === currentActiveAccount?.address) return
    console.log('_account', _account)
    setCurrentActiveAccount(_account)

    const _currentExtension =
      extensions?.find(
        (_extension) => _extension.name === _account?.meta.source
      ) || null
    console.log('_currentExtension', _currentExtension)
    setCurrentActiveExtension(_currentExtension)
  }

  const sign = async (_txHex: HexType) => {
    try {
      if (!currentActiveExtension?.signer) throw new Error('Signer not found!')
      if (!currentActiveAccount) throw new Error('No current account found!')
      if (!isApiConnected) throw new Error('Blockchain API not connected!')

      const api = getRawApi()

      const nonce = (
        (await query('system', 'account', [
          currentActiveAccount!.address,
        ])) as any
      ).nonce.toNumber()

      const signedTxHex = (
        await api.tx(_txHex).signAsync(currentActiveAccount!.address, {
          nonce,
          signer: currentActiveExtension!.signer,
        })
      ).toHex()

      return signedTxHex
    } catch (err: any) {
      throw new Error(err)
    }
  }

  const signAndSubmit = async (
    _txHex: HexType,
    _waitUntil: WaitUntil = WaitUntil.BlockFinalization
  ) => {
    try {
      const signedTxHex = await sign(_txHex)
      return await submitTxBlocking(signedTxHex, _waitUntil)
    } catch (err: any) {
      throw new Error(err)
    }
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <TernoaConnectContext.Provider
      value={{
        isAccountConnected: (accounts && accounts?.length > 0) || false,
        extensions,
        currentActiveExtension,
        accounts,
        currentActiveAccount,
        connect,
        toggleModal,
        selectNewActiveAccount,
        sign,
        signAndSubmit,
      }}
    >
      <Modal isModalVisible={isModalOpen} />
      {children}
    </TernoaConnectContext.Provider>
  )
}
