import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App Component', () => {
  it('increments the counter when the button is clicked', async () => {
    render(<App />)

    const button = screen.getByRole('button', { name: /count is 0/i })

    expect(button).toHaveTextContent('Count is 0')

    await userEvent.click(button)
    expect(button).toHaveTextContent('Count is 1')
  })
})
