// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import PrivateLayout from 'src/layouts/PrivateLayout'
import PublicLayout from 'src/layouts/PublicLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={PublicLayout}>
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
      <Set private unauthenticated="home" wrap={PrivateLayout}>
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        <Route path="/profile" page={ProfilePage} name="profile" />
      </Set>
    </Router>
  )
}

export default Routes
