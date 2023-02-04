import {Button} from '../ui'
import {FC, ReactNode} from 'react'

const IconButton: FC<{ icon: ReactNode, size?: 'small' | string}> = ({ icon, size }) => (
  <Button icon={icon} btnType={'icon-button'} size={size} />
)

export { IconButton }
