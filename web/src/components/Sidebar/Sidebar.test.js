import { render, cleanup, screen } from '@redwoodjs/testing'

import Sidebar from './Sidebar'

describe('Sidebar', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders successfully', () => {
    expect(() => {
      render(<Sidebar />)
    }).not.toThrow()
  })
  it('has a navigation component', () => {
    render(<Sidebar />)
    expect(screen.getByTestId('navigation')).toBeInTheDocument()
  })
})
