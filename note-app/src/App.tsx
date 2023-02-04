import {FC} from 'react'
import {grey} from '@mui/material/colors'
import {createTheme, ThemeProvider} from '@mui/material'

import {CreateNote, Header} from './components'

const theme = createTheme({
  palette: {
    primary: {
      main: grey[50],
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'transparent'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      }
    }
  },
});

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <Header />

    <CreateNote />
  </ThemeProvider>
)

export { App }
