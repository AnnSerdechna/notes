import {FC} from 'react'
import { Search, Menu, ViewAgendaOutlined, GridViewOutlined, SettingsOutlined, AccountCircleOutlined } from '@mui/icons-material'
import './index.scss'
import {IconButton, InputBase, Paper} from '@mui/material'
const Header: FC = () => {

  return (
    <header className={'header'}>
      <div className={'header-left'}>
        <IconButton color={'primary'} type="button" sx={{ p: '10px' }} aria-label="search">
          <Menu />
        </IconButton>
      </div>

      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={'Search'}
        />
        <IconButton color={'primary'} type="button" sx={{ p: '10px' }} aria-label="search">
          <Search />
        </IconButton>
      </Paper>

      <IconButton color={'primary'}>
        <ViewAgendaOutlined />
      </IconButton>
      <IconButton color={'primary'}>
        <GridViewOutlined />
      </IconButton>
      <IconButton color={'primary'}>
        <SettingsOutlined />
      </IconButton>
      <IconButton color={'primary'}>
        <AccountCircleOutlined fontSize={'large'} />
      </IconButton>
    </header>
  )
}

export { Header }
