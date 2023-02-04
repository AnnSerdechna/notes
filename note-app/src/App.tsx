import {CreateNote, Header} from './components'
import {grey} from '@mui/material/colors'
import {createTheme, ThemeProvider} from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: grey[50],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // textTransform: 'capitalize'
        }
      }
    },
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <CreateNote />
    </ThemeProvider>
  );
}

export default App;
