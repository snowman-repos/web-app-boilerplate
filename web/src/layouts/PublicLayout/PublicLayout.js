import Footer from 'src/components/Footer'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}))

const PublicLayout = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {children}
      <Footer />
    </div>
  )
}

export default PublicLayout
