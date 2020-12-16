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
  it('should have a sidebar toggle button', () => {
    render(<AppBar />)
    expect(screen.getByTestId('sidebar button')).toBeInTheDocument()
  })
  it('should toggle the sidebar when the sidebar button is tapped', () => {
    let sidebarIsOpen = false

    const toggleSidebar = () => {
      sidebarIsOpen = !sidebarIsOpen
    }
    render(<AppBar toggleSidebar={toggleSidebar} />)
    const button = screen.getByTestId('sidebar button')

    button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    expect(sidebarIsOpen).toBe(true)

    button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    expect(sidebarIsOpen).toBe(false)
  })
  it('should have an menu toggle button', () => {
    render(<AppBar />)
    expect(screen.getByTestId('menu button')).toBeInTheDocument()
  })
  it('should toggle the menu when the menu button is tapped', () => {
    render(<AppBar />)
    const button = screen.getByTestId('menu button')
    const menu = screen.getByTestId('menu')

    expect(menu).toHaveStyle({
      visibility: 'hidden',
    })

    button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    expect(menu).not.toHaveStyle({
      visibility: 'hidden',
    })
  })
})
