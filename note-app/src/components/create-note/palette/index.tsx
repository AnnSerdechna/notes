import {FC, PropsWithChildren} from 'react'
import {Box, Paper, Stack} from '@mui/material'

import Img1 from './images/ocean-3605547__340.jpg'
import Img2 from './images/360_F_551697909_rtYht64PTPVmrdTKYVX99RKvX2flRHMO.jpg'

const colors: Array<string> = ['teal', '#004d40', '#1b5e20', '#1a237e', '#ef9a9a', '#e1bee7', '#e040fb', '#4a148c', '#ff5722', '#795548', '#607d8b', '#263238']
const images: Array<string> = [Img1, Img2]

type BackgroundsPaletteProps = {
  onSelectBackgroundImage: (e:any) => void,
  onSelectBackgroundColor: (e:any) => void,
  onResetColor: () => void,
  onResetImage: () => void
}

type BackgroundComponentProps = {
  width?: number
  height?: number
  backgroundColor?: string,
  backgroundImage?: string,
  onSelectBackground: (e:any) => void
}

const BackgroundComponent: FC<BackgroundComponentProps> = (
  {
    width = 40,
    height = 40,
    backgroundColor,
    backgroundImage,
    onSelectBackground
  }) => (
  <Box
    component={'button'}
    onClick={onSelectBackground}
    sx={{
      position: 'relative',
      width: width,
      height: height,
      borderRadius: '50%',
      background: backgroundColor,
      backgroundImage: backgroundImage,
      border: 'none',
      cursor: 'pointer',
    }}
  />
)

const BackgroundStack: FC<PropsWithChildren<{ onResetColor: () => void }>> = ({ children, onResetColor }) => (
  <Stack direction={'row'} justifyContent={'space-between'}>
    <button onClick={onResetColor}>x</button>
    {children}
  </Stack>
)

const BackgroundsPalette: FC<BackgroundsPaletteProps> = (
  {
    onResetColor,
    onResetImage,
    onSelectBackgroundImage,
    onSelectBackgroundColor
  }) => (
  <Paper sx={{ p: 1, width: 400}}>
    <Stack spacing={2}>
      <BackgroundStack onResetColor={onResetColor}>
        {colors.map((color, index) => (
          <BackgroundComponent
            key={index}
            width={28}
            height={28}
            backgroundColor={color}
            onSelectBackground={() => onSelectBackgroundColor(color)}
          />
        ))}
      </BackgroundStack>

      <BackgroundStack onResetColor={onResetImage}>
        {images.map((image, index) => (
          <BackgroundComponent
            key={index}
            backgroundImage={`url(${image})`}
            onSelectBackground={() => onSelectBackgroundImage(image)}
          />
        ))}
      </BackgroundStack>
    </Stack>
  </Paper>
)

export { BackgroundsPalette }
