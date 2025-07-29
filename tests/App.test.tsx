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

  // ROBUSTNESS SUGGESTION: The App component's state changes from empty posts array []
  // to populated array after the fetch completes. A more robust fix would be to wait for
  // the loading state to be reflected in the UI instead of using a fixed timeout.
  //
  // Example approaches:
  // 1. Add a loading indicator to App component and wait for it to disappear:
  //    await waitForElementToBeRemoved(() => screen.queryByText('Loading...'))
  // 2. Wait for the posts state to be populated by checking for the ul element:
  //    await screen.findByRole('list')
  // 3. Mock the fetch to control timing or add loading states for better UX
  const posts = await screen.findAllByRole('listitem', { timeout: 2000 })

  expect(posts).toEqual([
    // @ts-expect-error Bug in Vitest.
    expect.toHaveTextContent('First post'),
    // @ts-expect-error Bug in Vitest.
    expect.toHaveTextContent('Second post'),
  ])
})
