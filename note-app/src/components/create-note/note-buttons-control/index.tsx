import {FC} from 'react'
import {Box, Button, IconButton, Stack} from '@mui/material'
import {
  CheckBoxOutlined,
  LabelOutlined,
  ArchiveOutlined,
  ColorLensOutlined,
  MoreVertOutlined,
  PhotoOutlined,
  RedoOutlined,
  UndoOutlined,
  DeleteOutlineOutlined,
} from '@mui/icons-material'

type NoteButtonsControlProps = {
  bgColor: string
  onOpenColorsPalette: () => void
  onCloseNote: () => void
}

const NoteButtonsControl: FC<NoteButtonsControlProps> = (
  {
    bgColor,
    onOpenColorsPalette,
    onCloseNote
  }
) => {
  return (
    <Stack
      direction={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={'100%'}
      sx={{ p: 2, background: `${bgColor}`}}
    >
      <Box component={'div'}>
        <IconButton onClick={onOpenColorsPalette}>
          <ColorLensOutlined fontSize={'small'} />
        </IconButton>

        <IconButton>
          <CheckBoxOutlined fontSize={'small'} />
        </IconButton>


        <IconButton>
          <PhotoOutlined fontSize={'small'} />
        </IconButton>

        <IconButton>
          <ArchiveOutlined fontSize={'small'} />
        </IconButton>

        <IconButton>
          <LabelOutlined fontSize={'small'} />
        </IconButton>

        {/*<IconButton>*/}
        {/*  <MoreVertOutlined fontSize={'small'} />*/}
        {/*</IconButton>*/}

        <IconButton>
          <DeleteOutlineOutlined fontSize={'small'} />
        </IconButton>

        <IconButton>
          <UndoOutlined fontSize={'small'} />
        </IconButton>

        <IconButton>
          <RedoOutlined fontSize={'small'} />
        </IconButton>
      </Box>

      <Button
        onClick={(e) => {
          e.stopPropagation()
          onCloseNote()
        }}
        size={'small'}
      >
        Close
      </Button>
    </Stack>
  )
}

export { NoteButtonsControl }
