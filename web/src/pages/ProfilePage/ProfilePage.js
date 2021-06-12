import Typography from '@material-ui/core/Typography'
import { useAuth } from '@redwoodjs/auth'

const ProfilePage = () => {
  const { isAuthenticated, currentUser } = useAuth()
  return (
    <Typography component="h1" variant="h4" gutterBottom>
      {isAuthenticated && currentUser.email}&apos;s Profile
    </Typography>
  )
}

export default ProfilePage
