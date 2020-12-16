import { useAuth } from '@redwoodjs/auth'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import AccountCircle from '@material-ui/icons/AccountCircle'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'

// menu with logout button
// sidebar menu

const useStyles = makeStyles((theme) => ({
  root: {
    /* stylelint-disable-next-line */
    zIndex: theme.zIndex.drawer + 1,
  },

  spacer: {
    flexGrow: 1,
  },
}))

const AppBarComponent = () => {
  const classes = useStyles()
  const { logOut } = useAuth()

  return (
    <div className={classes.root} data-testid="appbar">
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton
            aria-label="menu"
            color="inherit"
            data-testid="menu button"
            edge="start"
            onClick={() => {}}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.spacer} />
          <IconButton
            aria-controls=""
            aria-haspopup="true"
            aria-label="Current user"
            color="inherit"
            data-testid="account button"
            edge="end"
            onClick={logOut}
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default AppBarComponent
