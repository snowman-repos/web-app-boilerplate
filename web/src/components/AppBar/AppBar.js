import AppBar from '@material-ui/core/AppBar'
import AccountCircle from '@material-ui/icons/AccountCircle'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Toolbar from '@material-ui/core/Toolbar'
import { useAuth } from '@redwoodjs/auth'
import { useState } from 'react'

// sidebar menu

const useStyles = makeStyles((theme) => ({
  root: {
    /* stylelint-disable-next-line */
    zIndex: theme.zIndex.drawer + 1,
  },

  menu: {
    /* stylelint-disable-next-line */
    zIndex: theme.zIndex.drawer + 2,
  },

  spacer: {
    flexGrow: 1,
  },
}))

const AppBarComponent = (props) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const classes = useStyles()
  const { logOut } = useAuth()
  const isMenuOpen = Boolean(anchorEl)
  const menuId = 'account-menu'
  const { onChange = () => {} } = props

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
    onChange(event.currentTarget)
  }

  const logout = () => {
    handleMenuClose()
    logOut()
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      className={classes.menu}
      data-testid="menu"
      id={menuId}
      keepMounted
      onClose={handleMenuClose}
      open={isMenuOpen}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <MenuItem onClick={logout}>Logout</MenuItem>
    </Menu>
  )

  return (
    <div className={classes.root} data-testid="appbar">
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton
            aria-label="navigation toggle"
            color="inherit"
            data-testid="navigation button"
            edge="start"
            onClick={() => {}}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.spacer} />
          <IconButton
            aria-controls=""
            aria-haspopup="true"
            aria-label="menu toggle"
            color="inherit"
            data-testid="menu button"
            edge="end"
            onClick={handleMenuOpen}
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  )
}

export default AppBarComponent
