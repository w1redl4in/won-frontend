import { render, screen } from '@testing-library/react'

import Main from '.'
describe('<Main />', () => {
  it('should render the heading', () => {
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
  })

  it('should render the correct colors', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({
      'background-color': '#06092b'
    })
  })
})
