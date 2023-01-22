import {FC} from 'react'
import {MdNotes, MdOutlineViewAgenda, MdOutlineSettings, MdOutlineGridView, MdOutlineAccountCircle} from 'react-icons/md'

import {Button} from '../ui'
import {SearchForm} from '../search-form'
import {Logo} from '../logo'
import './index.scss'

const Header: FC = () => {

  return (
    <header className={'header'}>
      <div className={'header-left'}>
        <Button icon={<MdNotes />} btnType={'icon-button'} />
        <Logo />
      </div>

      <SearchForm />

      <div className={'header-right'}>
        <Button icon={<MdOutlineViewAgenda />} btnType={'icon-button'} />
        {/*<Button icon={<MdOutlineGridView />} btnType={'icon-button'} />*/}
        <Button icon={<MdOutlineSettings />} btnType={'icon-button'} />
        <Button icon={<MdOutlineAccountCircle />} btnType={'icon-button'} />
      </div>

    </header>
  )
}

export { Header }
