import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Navigation from 'src/components/Navigation'
import Toolbar from '@material-ui/core/Toolbar'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  /* stylelint-disable */
  drawer: {
    flexShrink: 0,
    whiteSpace: 'nowrap',
    width: drawerWidth,
    zIndex: theme.zIndex.drawer,
  },

  drawerPaperOpen: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringscreen,
    }),
    width: drawerWidth,
  },

  drawerPaperClosed: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingscreen,
    }),
    width: theme.spacing(6) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1,
    },

    '&:hover': {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringscreen,
      }),
      width: drawerWidth,
    },
  },
  /* stylelint-enable */
}))

const Sidebar = ({ sidebarIsOpen }) => {
  const classes = useStyles()

  return (
    <Drawer
      className={
        sidebarIsOpen
          ? `${classes.drawer} ${classes.drawerPaperOpen}`
          : `${classes.drawer} ${classes.drawerPaperClosed}`
      }
      classes={
        sidebarIsOpen
          ? {
              paper: classes.drawerPaperOpen,
            }
          : {
              paper: classes.drawerPaperClosed,
            }
      }
      data-testid="sidebar"
      open={sidebarIsOpen}
      variant="permanent"
    >
      <Toolbar />
      <Navigation />
    </Drawer>
  )
}

export default Sidebar
