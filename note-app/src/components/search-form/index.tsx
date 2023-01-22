import {FC} from 'react'
import {Button, Input} from '../ui'
import {MdClose, MdSearch} from 'react-icons/md'

import './index.scss'

const SearchForm: FC = () => {
  return (
    <form className={'search-form'}>
      <Button icon={<MdSearch />} btnType={'icon-button'} />
      <Input placeholder={'Search'} />
      <Button icon={<MdClose />} btnType={'icon-button'} />
    </form>
  )
}

export { SearchForm }
