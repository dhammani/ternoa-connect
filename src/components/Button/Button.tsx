import React from 'react'

import './Button.css'
import { ButtonProps } from './Button.types'

function Button({ type, text, onClick }: ButtonProps): JSX.Element {
  return (
    <button type="button" className={`Button Button-${type}`} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
