import { useTernoaConnect } from '../../hooks'
import { IModalHeader } from './ModalHeader.types'
import styles from './styles'

export function ModalHeader({
  title,
  currentView,
  setCurrentView
}: IModalHeader): JSX.Element {
  const { toggleModal } = useTernoaConnect()

  return (
    <div style={styles.container}>
      <div style={styles.titleContainer}>

        <h1>{title}</h1>
        <button style={styles.close} onClick={toggleModal}>
          <img 
            src={'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS4wMTM1IDAuOTg2MzdDMTAuODA3NCAwLjc4MDI2IDEwLjQ3MzMgMC43ODAyNiAxMC4yNjcxIDAuOTg2MzdMNS45OTk5NSA1LjI1MzU3TDEuNzMyNzYgMC45ODYzODRMMS42ODk5MSAwLjk0NzkxMUMxLjQ4MjY2IDAuNzgxMTkgMS4xNzg3NCAwLjc5NDAxNSAwLjk4NjM3IDAuOTg2Mzg0QzAuNzgwMjYgMS4xOTI0OSAwLjc4MDI2IDEuNTI2NjYgMC45ODYzNyAxLjczMjc3TDUuMjUzNTYgNS45OTk5NkwwLjk4NjM3IDEwLjI2NzFMMC45NDc4OTYgMTAuMzFDMC43ODExNzYgMTAuNTE3MiAwLjc5NCAxMC44MjEyIDAuOTg2MzcgMTEuMDEzNUMxLjE5MjQ4IDExLjIxOTYgMS41MjY2NSAxMS4yMTk2IDEuNzMyNzYgMTEuMDEzNUw1Ljk5OTk1IDYuNzQ2MzVMMTAuMjY3MSAxMS4wMTM2TDEwLjMxIDExLjA1MkMxMC41MTcyIDExLjIxODcgMTAuODIxMiAxMS4yMDU5IDExLjAxMzUgMTEuMDEzNkMxMS4yMTk2IDEwLjgwNzQgMTEuMjE5NiAxMC40NzMzIDExLjAxMzUgMTAuMjY3Mkw2Ljc0NjM0IDUuOTk5OTZMMTEuMDEzNSAxLjczMjc2TDExLjA1MiAxLjY4OTkxQzExLjIxODcgMS40ODI2NiAxMS4yMDU5IDEuMTc4NzQgMTEuMDEzNSAwLjk4NjM3WiIgZmlsbD0iYmxhY2siLz4KPG1hc2sgaWQ9Im1hc2swXzEwMjk3XzU1MjMiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuMDEzNSAwLjk4NjM3QzEwLjgwNzQgMC43ODAyNiAxMC40NzMzIDAuNzgwMjYgMTAuMjY3MSAwLjk4NjM3TDUuOTk5OTUgNS4yNTM1N0wxLjczMjc2IDAuOTg2Mzg0TDEuNjg5OTEgMC45NDc5MTFDMS40ODI2NiAwLjc4MTE5IDEuMTc4NzQgMC43OTQwMTUgMC45ODYzNyAwLjk4NjM4NEMwLjc4MDI2IDEuMTkyNDkgMC43ODAyNiAxLjUyNjY2IDAuOTg2MzcgMS43MzI3N0w1LjI1MzU2IDUuOTk5OTZMMC45ODYzNyAxMC4yNjcxTDAuOTQ3ODk2IDEwLjMxQzAuNzgxMTc2IDEwLjUxNzIgMC43OTQgMTAuODIxMiAwLjk4NjM3IDExLjAxMzVDMS4xOTI0OCAxMS4yMTk2IDEuNTI2NjUgMTEuMjE5NiAxLjczMjc2IDExLjAxMzVMNS45OTk5NSA2Ljc0NjM1TDEwLjI2NzEgMTEuMDEzNkwxMC4zMSAxMS4wNTJDMTAuNTE3MiAxMS4yMTg3IDEwLjgyMTIgMTEuMjA1OSAxMS4wMTM1IDExLjAxMzZDMTEuMjE5NiAxMC44MDc0IDExLjIxOTYgMTAuNDczMyAxMS4wMTM1IDEwLjI2NzJMNi43NDYzNCA1Ljk5OTk2TDExLjAxMzUgMS43MzI3NkwxMS4wNTIgMS42ODk5MUMxMS4yMTg3IDEuNDgyNjYgMTEuMjA1OSAxLjE3ODc0IDExLjAxMzUgMC45ODYzN1oiIGZpbGw9IndoaXRlIi8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMF8xMDI5N181NTIzKSI+CjxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0iI0ZGRiIvPgo8L2c+Cjwvc3ZnPgo='}
            style={{ height: 12, width: 12}}  
          />
        </button>
      </div>
      <div style={styles.selectorContainer}>
        <div
          style={{
            ...styles.section,
            backgroundColor: currentView === 'EXTENSIONS' ? '#000' : 'rgba(56,23,184,0.5)',
            fontWeight: currentView === 'EXTENSIONS' ? '100' : '900',

          }}
          onClick={() => setCurrentView('EXTENSIONS')}
        >
          Extensions
        </div>
        <div
          style={{
            ...styles.section,
            backgroundColor: currentView === 'ACCOUNTS' ? '#000' : 'rgba(56,23,184,0.5)',
          }}
          onClick={() => setCurrentView('ACCOUNTS')}
        >
          Accounts
        </div>
      </div>
    </div>
  )
}
