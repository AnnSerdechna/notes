import {FC} from 'react'
import {Box, Typography} from '@mui/material'
import {NoteProps} from '../../../types'


const Note: FC<NoteProps> = ({ title, note, bgColor}) => (
  <Box sx={{background: `${bgColor}`}}>
    <Typography>{title}</Typography>
    <Typography>{note}</Typography>
  </Box>
)

export { Note }
