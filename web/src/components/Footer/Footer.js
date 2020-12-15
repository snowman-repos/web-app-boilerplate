import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        My Web App
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.grey[900],
    marginTop: 'auto',
    padding: theme.spacing(3, 2),
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer} data-testid="footer">
      <Container maxWidth="sm">
        <Typography variant="body1">This is the site footer.</Typography>
        <Copyright />
      </Container>
    </footer>
  )
}

export default Footer
