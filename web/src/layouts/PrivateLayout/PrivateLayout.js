import AppBar from 'src/components/AppBar'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  spacer: {
    ...theme.mixins.toolbar,
  },
}))

const PrivateLayout = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      <AppBar />
      <div className={classes.spacer} />
      {children}
    </>
  )
}

export default PrivateLayout
