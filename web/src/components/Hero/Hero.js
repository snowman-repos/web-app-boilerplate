import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  /* stylelint-disable-next-line */
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  /* stylelint-disable-next-line */
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}))

const Hero = () => {
  const classes = useStyles()

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          App Name
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Something short and leading about the value proposition below — who
          it&apos;s for, what it does, what problem it solves, etc. Make it
          short and sweet, but not too short so folks don&apos;t simply skip
          over it entirely.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="outlined" color="secondary">
                Main call to action
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                Secondary action
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default Hero
