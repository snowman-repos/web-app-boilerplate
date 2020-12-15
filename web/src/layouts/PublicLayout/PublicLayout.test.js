import { render, cleanup, screen } from '@redwoodjs/testing'

import PublicLayout from './PublicLayout'

describe('PublicLayout', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders successfully', () => {
    expect(() => {
      render(<PublicLayout />)
    }).not.toThrow()
  })
  it('has a footer component', () => {
    render(<PublicLayout />)
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})
