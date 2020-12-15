import { render, cleanup, screen } from '@redwoodjs/testing'

import Hero from './Hero'

describe('Hero', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders successfully', () => {
    expect(() => {
      render(<Hero />)
    }).not.toThrow()
  })
  it('has a heading and 2 buttons', () => {
    render(<Hero />)
    expect(screen.getByText('App name', { exact: false })).toBeInTheDocument()
    expect(
      screen.getByText('Main call to action', { exact: false })
    ).toBeInTheDocument()
    expect(
      screen.getByText('Secondary action', { exact: false })
    ).toBeInTheDocument()
  })
})
