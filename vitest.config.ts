import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    browser: {
      enabled: false,
      headless: true,
      provider: "playwright",
      name: "chromium",
      screenshotFailures: true,
    },
    reporters: ["default", "junit"],
    outputFile: "./test-results/results.xml",
    retry: 3,
    pool: "forks",
    poolOptions: {
      forks: {
        singleFork: true
      }
    },
    sequence: {
      shuffle: false,
      concurrent: false
    }
  },
});
