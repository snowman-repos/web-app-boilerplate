import { AuthProvider } from '@redwoodjs/auth'
import netlifyIdentity from 'netlify-identity-widget'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'

import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#1c2531',
    },
    secondary: {
      main: '#01a78f',
    },
    error: {
      main: '#ff686b',
    },
    text: {
      primary: '#edf6f9',
    },
    background: {
      default: '#0b1017',
      paper: '#040507',
    },
    divider: '#1c2531',
  },
})

netlifyIdentity.init()

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <AuthProvider client={netlifyIdentity} type="netlify">
      <RedwoodProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Routes />
        </ThemeProvider>
      </RedwoodProvider>
    </AuthProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
