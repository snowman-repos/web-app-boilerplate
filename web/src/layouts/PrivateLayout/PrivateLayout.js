import AppBar from 'src/components/AppBar'
import { makeStyles } from '@material-ui/core/styles'
import Sidebar from 'src/components/Sidebar'
import { useState } from 'react'

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(0, 3),
  },

  root: {
    display: 'flex',
  },

  spacer: {
    width: '100%',
    ...theme.mixins.toolbar,
  },
}))

const PrivateLayout = ({ children }) => {
  const classes = useStyles()
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen)
  }

  return (
    <div className={classes.root}>
      <AppBar toggleSidebar={toggleSidebar} />
      <Sidebar sidebarIsOpen={sidebarIsOpen} />
      <main className={classes.content}>
        <div className={classes.spacer} />
        {children}
      </main>
    </div>
  )
}

export default PrivateLayout
