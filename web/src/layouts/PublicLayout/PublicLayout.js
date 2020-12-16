import Footer from 'src/components/Footer'
import { makeStyles } from '@material-ui/core/styles'
import { navigate, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { useEffect } from 'react'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}))

const PublicLayout = ({ children }) => {
  const classes = useStyles()
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated) navigate(routes.dashboard())
  })

  return (
    <div className={classes.root}>
      {children}
      <Footer />
    </div>
  )
}

export default PublicLayout
