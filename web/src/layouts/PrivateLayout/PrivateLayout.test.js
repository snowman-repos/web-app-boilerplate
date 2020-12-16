import { render, cleanup, screen } from '@redwoodjs/testing'

import PrivateLayout from './PrivateLayout'

describe('PrivateLayout', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders successfully', () => {
    expect(() => {
      render(<PrivateLayout />)
    }).not.toThrow()
  })
  it('has an AppBar component', () => {
    render(<PrivateLayout />)
    expect(screen.getByTestId('appbar')).toBeInTheDocument()
  })
})
