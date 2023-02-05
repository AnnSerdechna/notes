import {FC} from 'react'
import {Box, Typography} from '@mui/material'
import {NoteProps} from '../../../types'
import {NoteButtonsControl} from '../note-buttons-control'


const Note: FC<NoteProps> = ({ title, note, bgColor}) => (
  <Box sx={{background: `${bgColor}`}}>
    <Typography>{title}</Typography>
    <Typography>{note}</Typography>

    <NoteButtonsControl
      bgColor={bgColor}
      onOpenColorsPalette={() => console.log('open palette')}
      onCloseNote={() => console.log('close')}
    />
  </Box>
)

export { Note }
