import {ButtonHTMLAttributes, FC, ReactNode} from 'react'
import classNames from 'classnames'

import './index.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string
  btnType?: 'button' | 'icon-button'
  icon?: ReactNode
}

const Button: FC<ButtonProps> = ({ text, icon, btnType = 'button' }) => {
  const btnStyles = classNames({
    'button': true,
    'icon-button': btnType === 'icon-button',
  })

  return (
    <button className={btnStyles}>
      {icon}
      {text}
    </button>
  )
}

export { Button }
