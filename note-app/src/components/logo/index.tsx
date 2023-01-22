import {FC} from 'react'
import {GiNotebook} from 'react-icons/gi'

import './index.scss'

const Logo: FC = () => (
  <div className={'logo'}>
    NOTES
    <GiNotebook />
  </div>
)

export { Logo }
