import { render, cleanup } from '@redwoodjs/testing'

import ProfilePage from './ProfilePage'

describe('ProfilePage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<ProfilePage />)
    }).not.toThrow()
  })
})
