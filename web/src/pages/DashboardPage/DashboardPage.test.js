import { render, cleanup, screen } from '@redwoodjs/testing'

import DashboardPage from './DashboardPage'

describe('DashboardPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<DashboardPage />)
    }).not.toThrow()
  })
  it('has a hero component', () => {
    render(<DashboardPage />)
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
  })
})
