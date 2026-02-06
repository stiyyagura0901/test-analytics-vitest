# Test Analytics in Vitest

A minimal example showing Codecov Test Analytics with Vitest Browser Mode.

## Quick Start

1) Configure Vitest
- Add `junit` to `test.reporters` and set `test.outputFile`.
- See `vitest.config.ts` for a working config: [`vitest.config.ts`](./vitest.config.ts).

2) Install the Codecov GitHub App
- Install for your repo: https://github.com/apps/codecov/installations/select_target

3) Upload test results in CI
- Use `codecov/test-results-action@v1` in your workflow (example here): [`.github/workflows/ci.yml`](./.github/workflows/ci.yml).
- Set `CODECOV_TOKEN` as a repository secret. Find it in your Codecov project under Configuration → General.

## Resources
- Test Analytics docs: https://docs.codecov.com/docs/test-analytics
- Blog: Find failing and flaky tests: https://about.codecov.io/blog/find-failing-and-flaky-tests-with-codecov-test-analytics/
- Be S.M.A.R.T. About Flaky Tests: https://www.epicweb.dev/be-smart-about-flaky-tests
