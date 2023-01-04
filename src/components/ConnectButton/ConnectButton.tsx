import React, { useState } from 'react'
import { useTernoaConnect } from '../../hooks';
import styles from './styles';

export function ConnectButton(): JSX.Element {
  const [isHover, setIsHover] = useState(false);

  const { toggleModal, currentActiveAccount, extensions, connect } = useTernoaConnect()

  const onClick = extensions && extensions.length > 0 ? toggleModal : connect

  return <button type="button"
    style={{
      ...styles.container,
      ...{ backgroundColor: isHover ? '#3817B8' : '#3817E8' }

    }}
    onMouseEnter={() => {
      setIsHover(true);
    }}
    onMouseLeave={() => {
      setIsHover(false);
    }}
    onClick={onClick}
  >
    {
      currentActiveAccount ? `${currentActiveAccount?.meta.name} - ${currentActiveAccount.address}` : 'Connect Wallet'
    }
  </button>
}


