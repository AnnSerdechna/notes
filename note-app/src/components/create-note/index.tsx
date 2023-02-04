import {FC, useState} from 'react'
import classNames from 'classnames'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'
import {Button, IconButton, Stack} from '@mui/material'
import {
  AddAlertOutlined,
  PersonAddAltOutlined,
  ColorLensOutlined,
  PhotoOutlined,
  ArchiveOutlined,
  MoreVertOutlined,
  PushPinOutlined,
  UndoOutlined,
  RedoOutlined,
  CheckBoxOutlined,
} from '@mui/icons-material'

import './index.scss'

const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& textarea': {
      resize: 'none',
    },
    '& fieldset': {
      border: 'none',
    },
  },
});

const CreateNote: FC = () => {
  const [isActive, setActive] = useState(false)
  const [noteValue, setNoteValue] = useState('');

  const onNoteChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => setNoteValue(evt.target?.value)

  return (
    <>
      <div
        className={classNames('create-note', {'active': isActive})}
        onClick={() => setActive(true)}
      >
        {!isActive ? (
          <>
            <p className={'create-note-paragraph'}>Take a note...</p>

            <Stack direction={'row'} spacing={1}>
              <IconButton color={'primary'}>
                <CheckBoxOutlined />
              </IconButton>
              <IconButton color={'primary'}>
                <PhotoOutlined />
              </IconButton>
            </Stack>
          </>
        ) : (
          <>
            <div className={'create-note-active-top'}>
              <CustomTextField placeholder={'Title'} fullWidth />
              <IconButton color={'primary'}>
                <PushPinOutlined fontSize={'small'} />
              </IconButton>
            </div>

            <CustomTextField
              value={noteValue}
              placeholder={'Take a note...'}
              onChange={onNoteChange}
              multiline
              autoFocus
              fullWidth
            />

            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
              <div>
                <IconButton color={'primary'}>
                  <AddAlertOutlined fontSize={'small'} />
                </IconButton>

                <IconButton color={'primary'}>
                  <PersonAddAltOutlined />
                </IconButton>

                <IconButton color={'primary'}>
                  <ColorLensOutlined fontSize={'small'} />
                </IconButton>

                <IconButton color={'primary'}>
                  <PhotoOutlined fontSize={'small'} />
                </IconButton>

                <IconButton color={'primary'}>
                  <ArchiveOutlined fontSize={'small'} />
                </IconButton>

                <IconButton color={'primary'}>
                  <MoreVertOutlined fontSize={'small'} />
                </IconButton>

                <IconButton color={'primary'}>
                  <UndoOutlined fontSize={'small'} />
                </IconButton>

                <IconButton color={'primary'}>
                  <RedoOutlined fontSize={'small'} />
                </IconButton>
              </div>

              <Button
                onClick={(e) => {
                  e.stopPropagation()
                  setActive(false)
                }}
                size={'small'}
              >
                Close
              </Button>
            </Stack>
          </>
        )}
      </div>
    </>
  )
}

export { CreateNote }
