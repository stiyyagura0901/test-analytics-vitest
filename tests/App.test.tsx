import { render } from 'vitest-browser-react'
import { screen, waitFor } from '@testing-library/react'
import { worker } from '../src/mocks/browser.js'
import App from '../src/App.tsx'

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

  // ROBUSTNESS SUGGESTION: The App component's state changes from an empty posts array
  // to a populated array after the fetch completes (App.tsx:13-16). A more robust fix
  // would be to wait for the component's loading state to change or poll the posts state
  // instead of using a fixed timeout. The mock handler adds a 995ms delay (handlers.ts:8).
  //
  // Example robust approach:
  // await waitFor(() => expect(screen.queryByText('My Posts')).toBeInTheDocument())  
  // await waitFor(() => expect(posts.length).toBeGreaterThan(0), { timeout: 2000 })
  
  // Wait for the posts to appear with increased retry interval for browser environment
  let posts: HTMLElement[]
  await waitFor(
    async () => {
      posts = screen.getAllByRole('listitem')
    },
    { timeout: 10000, interval: 100 }
  )

  expect(posts).toEqual([
    // @ts-expect-error Bug in Vitest.
    expect.toHaveTextContent('First post'),
    // @ts-expect-error Bug in Vitest.
    expect.toHaveTextContent('Second post'),
  ])
})
