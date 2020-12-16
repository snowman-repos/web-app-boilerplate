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
  it('should have a navigation toggle button', () => {
    render(<AppBar />)
    expect(screen.getByTestId('navigation button')).toBeInTheDocument()
  })
  it('should have an menu toggle button', () => {
    render(<AppBar />)
    expect(screen.getByTestId('menu button')).toBeInTheDocument()
  })
  it('should toggle the menu when the menu button is tapped', () => {
    const onChange = jest.fn()
    render(<AppBar onChange={onChange} />)
    const button = screen.getByTestId('menu button')
    const menu = screen.getByTestId('menu')

    expect(menu).toHaveStyle({
      visibility: 'hidden',
    })

    button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(menu).not.toHaveStyle({
      visibility: 'hidden',
    })
  })
})
