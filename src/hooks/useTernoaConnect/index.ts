import { useContext } from 'react'
import { TernoaConnectContext, TernoaConnectContextType } from '../../providers'

export function useTernoaConnect() {
  const context = useContext<TernoaConnectContextType>(TernoaConnectContext)
  if (context === undefined) {
    throw new Error(
      'useTernoaConnect must be used within TernoaConnectProvider'
    )
  }
  return context
}
