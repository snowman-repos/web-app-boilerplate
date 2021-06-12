import { AuthProvider } from '@redwoodjs/auth'
import netlifyIdentity from 'netlify-identity-widget'
import { isBrowser } from '@redwoodjs/prerender/browserUtils'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { FatalErrorBoundary } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

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

isBrowser && netlifyIdentity.init()

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <AuthProvider client={netlifyIdentity} type="netlify">
      <RedwoodApolloProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Routes />
        </ThemeProvider>
      </RedwoodApolloProvider>
    </AuthProvider>
  </FatalErrorBoundary>
)

export default App
