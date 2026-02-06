# Test Analytics in Vitest

Example project using [Codecov Test Analytics](https://docs.codecov.com/docs/test-analytics) with [Vitest Browser Mode](https://vitest.dev/guide/browser/).

## Quick Start

- Configure Vitest to emit JUnit results:
  - In `vitest.config.ts`:
    ```ts
    test: {
      reporters: ['default', 'junit'],
      outputFile: './test-report.junit.xml',
    }
    ```
  - See the full config in `vitest.config.ts`.
- Install the Codecov GitHub App: https://github.com/apps/codecov/installations/select_target
- Upload test results in CI:
  - Use `codecov/test-results-action@v1` (see `.github/workflows/ci.yml`).
  - Add a `CODECOV_TOKEN` repository secret using the "Repository upload token" from your Codecov project settings.

## Resources

- [Test Analytics documentation](https://docs.codecov.com/docs/test-analytics)
- [Find failing and flaky tests with Codecov Test Analytics](https://about.codecov.io/blog/find-failing-and-flaky-tests-with-codecov-test-analytics/)
- [Be S.M.A.R.T. About Flaky Tests](https://www.epicweb.dev/be-smart-about-flaky-tests)
