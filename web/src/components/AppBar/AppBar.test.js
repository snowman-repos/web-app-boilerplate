import { render, cleanup, screen } from '@redwoodjs/testing'

import AppBar from './AppBar'

describe('AppBar', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders successfully', () => {
    expect(() => {
      render(<AppBar />)
    }).not.toThrow()
  })
  it('should have a menu button', () => {
    render(<AppBar />)
    expect(screen.getByTestId('menu button')).toBeInTheDocument()
  })
  it('should have an account button', () => {
    render(<AppBar />)
    expect(screen.getByTestId('account button')).toBeInTheDocument()
  })
})
