import {FC} from 'react'
import {grey, teal} from '@mui/material/colors'
import {createTheme, ThemeProvider} from '@mui/material'

import Pages from './pages'

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900]
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent'
        }
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          margin: 0,
          // color: '#fff'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          // color: "#fff",
        },
      }
    }
  },
});

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <Pages />
  </ThemeProvider>
)

export { App }
