import {FC, InputHTMLAttributes} from 'react'

import './index.scss'
import classNames from 'classnames'

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props}) => {

  return (
    <input className={classNames('input', className)} {...props} />
  )
}

export { Input }
