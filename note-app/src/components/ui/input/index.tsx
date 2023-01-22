import {FC, InputHTMLAttributes} from 'react'

import './index.scss'

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({...props}) => {

  return (
    <input className={'input'} {...props} />
  )
}

export { Input }
