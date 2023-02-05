import {FC} from 'react'

import {NoteProps} from '../../../types'
import {Note} from '../note'
import {Grid} from '@mui/material'

const Notes: FC<{ data: NoteProps[]}> = ({ data}) => (
  <Grid container spacing={3} alignItems={'center'} sx={{pt:4, pb: 4}}>
    {data.map(props => (
      <Grid key={props.title} item xs={3}>
        <Note {...props} />
      </Grid>
      ))}
  </Grid>
)

export { Notes }
