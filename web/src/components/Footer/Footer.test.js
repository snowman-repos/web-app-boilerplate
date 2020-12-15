import { render, cleanup, screen } from '@redwoodjs/testing'

import Footer from './Footer'

describe('Footer', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<Footer />)
    }).not.toThrow()
  })
  it('has a copyright', () => {
    render(<Footer />)
    expect(screen.getByText('Copyright', { exact: false })).toBeInTheDocument()
  })
})
