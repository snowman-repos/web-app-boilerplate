import { render } from '@redwoodjs/testing'

import PrivateLayout from './PrivateLayout'

describe('PrivateLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PrivateLayout />)
    }).not.toThrow()
  })
})
