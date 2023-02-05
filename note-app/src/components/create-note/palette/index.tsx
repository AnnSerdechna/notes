import {FC} from 'react'
import {Box, Paper, Stack} from '@mui/material'

import Img1 from './images/ocean-3605547__340.jpg'
import Img2 from './images/360_F_551697909_rtYht64PTPVmrdTKYVX99RKvX2flRHMO.jpg'

const colors = ['teal', '#004d40', '#1b5e20', '#1a237e', '#ef9a9a', '#e1bee7', '#e040fb', '#4a148c', '#ff5722', '#795548', '#607d8b', '#263238']
const images = [Img1, Img2]

const BackgroundComponent: FC<{ backgroundColor?: string, backgroundImage?: string, onSelectBackground: (e:any) => void}> = ({ backgroundColor, backgroundImage, onSelectBackground }) => {
  return (
    <Box
      component={'button'}
      onClick={onSelectBackground}
      sx={{
        position: 'relative',
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: backgroundColor,
        backgroundImage: backgroundImage,
        border: 'none',
        cursor: 'pointer',
      }}
    />
  )
}

const BackgroundsPalette: FC<{ onSelectBackgroundImage: (e:any) => void, onSelectBackgroundColor: (e:any) => void, onResetColor: () => void, onResetImage: () => void}> = (
  { onResetColor, onResetImage, onSelectBackgroundImage, onSelectBackgroundColor }) => {
  return (
    <>
      <Paper sx={{ p: 2}}>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <button onClick={onResetColor}>x</button>
          {colors.map((color, index) => (
            <BackgroundComponent key={index} backgroundColor={color} onSelectBackground={() => onSelectBackgroundColor(color)} />
          ))}
        </Stack>
      </Paper>
      <Paper sx={{ p: 2}}>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <button onClick={onResetImage}>x</button>
          {images.map((image, index) => (
            <BackgroundComponent key={index} backgroundImage={`url(${image})`} onSelectBackground={() => onSelectBackgroundImage(image)} />
          ))}
        </Stack>
      </Paper>
    </>
  )
}

export { BackgroundsPalette }
