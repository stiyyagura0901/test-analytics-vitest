import { render } from 'vitest-browser-react'
import { screen } from '@testing-library/react'
import { worker } from '../src/mocks/browser.js'
import App from '../src/App.jsx'

beforeAll(async () => {
  await worker.start({
    quiet: true,
  })
})

afterAll(() => {
  worker.stop()
})

it('renders the list of posts', async () => {
  render(<App />)

  const posts = await screen.findAllByRole('listitem', {}, { timeout: 2000 })

  expect(posts).toEqual([
    // @ts-expect-error Bug in Vitest.
    expect.toHaveTextContent('First post'),
    // @ts-expect-error Bug in Vitest.
    expect.toHaveTextContent('Second post'),
  ])
})
