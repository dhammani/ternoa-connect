import React from 'react'
import styles from './styles'
import { AccountItem } from '../AccountItem'
import { useTernoaConnect } from '../../hooks'

export function AccountList() {
  const {
    accounts,
    currentActiveAccount,
    selectNewActiveAccount
  } = useTernoaConnect()

  return (
    <div style={styles.container}>
      {
        accounts?.map((account) => {
          const key = `${account.address}_${account?.meta.source}`;
          const isActiveAccount = ((currentActiveAccount?.address === account.address) && (currentActiveAccount?.meta.source === account?.meta.source));

          return (
            <AccountItem
              key={key}
              account={account}
              selectActiveAccount={selectNewActiveAccount}
              isActiveAccount={isActiveAccount}
            />
          )
        })
      }
    </div>
  )
}
