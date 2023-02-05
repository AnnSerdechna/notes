import {FC, useState} from 'react'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'
import {
  Box,
  IconButton,
  Stack,
  Paper,
  Grid,
  Typography,
} from '@mui/material'
import {
  PhotoOutlined,
  PushPinOutlined,
  CheckBoxOutlined,
} from '@mui/icons-material'

import {BackgroundsPalette} from './palette'
import {NoteButtonsControl} from './note-buttons-control'
import {Notes} from './notes'

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
  const [noteData, setNoteData] = useState([{
    title: '',
    note: '',
    bgColor: '',
    bgImage: '',
  }])

  const [isActive, setActive] = useState(false)
  const [noteTitle, setNoteTitle] = useState('');
  const [noteValue, setNoteValue] = useState('');
  const [selectedBgColor, setSelectedBgColor] = useState('')
  const [selectedBgImage, setSelectedBgImage] = useState('')
  const [isPaletteOpen, setOpenPalette] = useState(false)


  const openBgPalette = () => setOpenPalette(true)

  const selectBackgroundColor = (backgroundColor: string) => {
    setSelectedBgColor(backgroundColor)
  }

  const selectBackgroundImage = (backgroundImage: string) => {
    setSelectedBgImage(backgroundImage)
  }

  return (
    <>
      <Stack spacing={2} sx={{ p: 2, width: 600, margin: '0 auto'}}>
        <Paper
          component={'form'}
          onClick={() => setActive(true)}
          sx={{ background: `${selectedBgColor}`, backgroundImage: `url(${selectedBgImage})` }}
        >
          {!isActive ? (
            <Box sx={{p: 2,display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
              <Typography variant={'subtitle1'} gutterBottom>
                Take a note...
              </Typography>

              <Stack direction={'row'} spacing={1}>
                <IconButton color={'primary'}>
                  <CheckBoxOutlined />
                </IconButton>
                <IconButton color={'primary'}>
                  <PhotoOutlined />
                </IconButton>
              </Stack>
            </Box>
          ) : (
            <>
              <Box sx={{ p: 2 }}>
                <Grid container justifyContent={'space-between'} alignItems={'center'}>
                  <Grid item xs={10}>
                    <CustomTextField
                      onChange={(event) => setNoteTitle(event.target.value)}
                      placeholder={'Title'}
                      multiline
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={'auto'}>
                    <IconButton color={'primary'}>
                      <PushPinOutlined fontSize={'small'} />
                    </IconButton>
                  </Grid>
                </Grid>

                <CustomTextField
                  value={noteValue}
                  placeholder={'Take a note...'}
                  onChange={(event) => setNoteValue(event.target?.value)}
                  multiline
                  autoFocus
                  fullWidth
                />
              </Box>

              <NoteButtonsControl
                bgColor={selectedBgColor}
                onOpenColorsPalette={openBgPalette}
                onCloseNote={() => {
                  setNoteData((prev) => [...prev, {title: noteTitle, note: noteValue, bgColor: selectedBgColor, bgImage: selectedBgImage}])
                  setActive(false)
                  setNoteValue('')
                  setNoteTitle('')
                  setSelectedBgColor('')
                  setSelectedBgImage('')
                  setOpenPalette(false)
                }}
              />
            </>
          )}
        </Paper>

        {isPaletteOpen && (
          <BackgroundsPalette
            onSelectBackgroundImage={selectBackgroundImage}
            onSelectBackgroundColor={selectBackgroundColor}
            onResetColor={() => setSelectedBgColor('')}
            onResetImage={() => setSelectedBgImage('')}
          />
        )}
      </Stack>

      {noteData.length && (
        <Grid container>
          <Grid item>
            <Notes data={noteData} />
          </Grid>
        </Grid>
      )}
    </>
  )
}

export { CreateNote }
