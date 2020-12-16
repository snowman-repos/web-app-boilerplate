import PrivateLayout from 'src/layouts/PrivateLayout'
import Typography from '@material-ui/core/Typography'

const DashboardPage = () => {
  return (
    <PrivateLayout>
      <Typography component="h1" variant="h4" gutterBottom>
        Dashboard
      </Typography>
    </PrivateLayout>
  )
}

export default DashboardPage
