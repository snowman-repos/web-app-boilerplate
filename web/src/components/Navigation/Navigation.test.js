import { render, cleanup, screen } from '@redwoodjs/testing'

import Navigation from './Navigation'

describe('Navigation', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders successfully', () => {
    expect(() => {
      render(<Navigation />)
    }).not.toThrow()
  })
  it('has a "Profile" navigation menu item', () => {
    render(<Navigation />)
    expect(screen.getByText('Profile')).toBeInTheDocument()
  })
})
