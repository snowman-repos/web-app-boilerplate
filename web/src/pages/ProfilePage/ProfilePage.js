import PrivateLayout from 'src/layouts/PrivateLayout'
import Typography from '@material-ui/core/Typography'
import { useAuth } from '@redwoodjs/auth'

const ProfilePage = () => {
  const { isAuthenticated, currentUser } = useAuth()
  return (
    <PrivateLayout>
      <Typography component="h1" variant="h4" gutterBottom>
        {isAuthenticated && currentUser.email}&apos;s Profile
      </Typography>
    </PrivateLayout>
  )
}

export default ProfilePage
