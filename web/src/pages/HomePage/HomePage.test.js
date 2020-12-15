import { render, cleanup, screen } from '@redwoodjs/testing'

import HomePage from './HomePage'

describe('HomePage', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders successfully', () => {
    expect(() => {
      render(<HomePage />)
    }).not.toThrow()
  })
  it('has a hero component', () => {
    render(<HomePage />)
    expect(screen.getByTestId('hero')).toBeInTheDocument()
  })
})
