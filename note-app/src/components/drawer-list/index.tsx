import {FC} from 'react'
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import {
  ArchiveOutlined,
  DeleteOutlineOutlined,
  LabelOutlined,
  NotificationsNoneOutlined,
  StickyNote2Outlined,
} from '@mui/icons-material'
import {NavLink} from 'react-router-dom'

const drawerList = [
  {
    item: 'Notes',
    Icon: StickyNote2Outlined,
    path: '/'
  },
  {
    item: 'Reminders',
    Icon: NotificationsNoneOutlined,
    path: '/reminders'
  },
  {
    item: 'Label',
    Icon: LabelOutlined,
    path: '/label'
  },
  {
    item: 'Archive',
    Icon: ArchiveOutlined,
    path: '/archive'
  },
  {
    item: 'Trash',
    Icon: DeleteOutlineOutlined,
    path: '/trash'
  },
]

const DrawerList: FC<{ open: boolean }> = ({ open}) => {

  return (
    <List>
      {drawerList.map(({ item, path, Icon}) => (
        <ListItem key={item} disablePadding sx={{ display: 'block' }}>
          <NavLink to={path}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <Icon />
              </ListItemIcon>
              <ListItemText primary={item} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </NavLink>
        </ListItem>
      ))}
    </List>
  )
}

export { DrawerList }
