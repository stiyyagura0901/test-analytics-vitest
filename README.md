# Test Analytics with Vitest

A minimal example showing how to use Codecov Test Analytics with Vitest (Browser Mode).

## Quick Start

1) Configure Vitest to emit JUnit results

```ts
// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    reporters: ['default', 'junit'],
    outputFile: './test-report.junit.xml',
  },
})
```

2) Install the Codecov GitHub App

Install the app for your repo: https://github.com/apps/codecov/installations/select_target

3) Upload results in CI

Add a step to your GitHub Actions workflow to upload the JUnit report to Codecov. Create or update `.github/workflows/ci.yml`:

```yml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      # ... run your install/build/test steps here

      - name: Upload test results
        if: ${{ !cancelled() }}
        uses: codecov/test-results-action@v1
        with:
          token: ${{ secrets.CODECOV_TOKEN }}
```

Set the `CODECOV_TOKEN` secret in your repository settings using the Repository upload token from your project in Codecov.

> See full examples in `vitest.config.ts` and `.github/workflows/ci.yml`.

## Resources

- Test Analytics docs: https://docs.codecov.com/docs/test-analytics
- Find failing and flaky tests with Codecov Test Analytics: https://about.codecov.io/blog/find-failing-and-flaky-tests-with-codecov-test-analytics/
- Be S.M.A.R.T. About Flaky Tests: https://www.epicweb.dev/be-smart-about-flaky-tests
