import React, { useRef, useState } from 'react'
import { IModal } from './Modal.types'

import { VIEWS } from '../../constants'
import { useTernoaConnect } from '../../hooks'
import { ViewsKeyType } from '../../types'
import { AccountList } from '../AccountList'
import { ExtensionList } from '../ExtensionList'
import { ModalHeader } from '../ModalHeader'
import styles from './styles'

export function Modal({ isModalVisible }: IModal): JSX.Element | null {
  if (!isModalVisible) return null
  const [currentView, setCurrentView] = useState<ViewsKeyType>('ACCOUNTS')

  const modalRef = useRef<any>()

  const { toggleModal } = useTernoaConnect()

  const closeModal = (event: React.MouseEvent): void => {
    if (modalRef.current === event.target) {
      toggleModal()
    }
  }

  return (
    <div ref={modalRef} style={{ ...styles.container }} onClick={closeModal}>
      <div style={{ ...styles.modal }}>
        <ModalHeader
          title={'Ternoa Connect'}
          currentView={currentView}
          setCurrentView={setCurrentView}
        />
        {currentView === VIEWS.EXTENSIONS ? <ExtensionList /> : null}
        {currentView === VIEWS.ACCOUNTS ? <AccountList /> : null}
      </div>
    </div>
  )
}
