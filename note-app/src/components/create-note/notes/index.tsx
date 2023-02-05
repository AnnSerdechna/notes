import {FC} from 'react'

import {NoteProps} from '../../../types'
import {Note} from '../note'

const Notes: FC<{ data: NoteProps[]}> = ({ data}) => (
  <>
    {data.map(props => (
        <Note {...props} />
      ))}
  </>
)

export { Notes }
