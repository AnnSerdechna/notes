import {ButtonHTMLAttributes, FC, ReactNode} from 'react'
import classNames from 'classnames'

import './index.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string
  btnType?: 'button' | 'icon-button'
  icon?: ReactNode
  size?: 'small' | string
}

const Button: FC<ButtonProps> = ({ text, icon, btnType = 'button', size, ...props }) => {
  const btnStyles = classNames({
    'button': true,
    'icon-button': btnType === 'icon-button',
    'small': size === 'small'
  })

  return (
    <button className={btnStyles} {...props}>
      {icon}
      {text}
    </button>
  )
}

export { Button }
