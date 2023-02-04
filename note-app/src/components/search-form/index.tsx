import {FC, useRef} from 'react'
import {Button, Input} from '../ui'
import {MdClose, MdSearch} from 'react-icons/md'

import './index.scss'
import {IconButton} from '../icon-button'

const SearchForm: FC = () => {

  return (
    <form className={'search-form'}>
      <IconButton icon={<MdSearch />} />
      <Input placeholder={'Search'} className={'search-form-input'} />
      <div className={'search-form-close-btn'}>
        <IconButton icon={<MdClose />} />
      </div>
    </form>
  )
}

export { SearchForm }
