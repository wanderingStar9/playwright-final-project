import { defineConfig, devices } from '@playwright/test';
import { Config } from '@playwright/test';
import { matchers } from 'expect-playwright';

const config: Config = {
  testDir: './tests',
  timeout: 60_000,
  expect: {
    timeout: 10_000,
    toMatchSnapshot: { threshold: 0.2 },
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ["html"],
    ["github"],
    ["allure-playwright"]
  ],
  use: {
    baseURL: 'https://dev.topklik.online',
    actionTimeout: 10_000,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ]
};

export default config;
