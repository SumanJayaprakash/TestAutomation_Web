import type {PlaywrightTestConfig} from '@playwright/test';
import { defineConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {

    //testMatch: ["test/"],
    use: {
        
        baseURL: "file://C:/Users/Gebruiker/TEST-AUTOMATION-ABN-AMRO/test-automation-abn-amro/src/index.html",
        headless: false,
        screenshot: "on",
        video: "on",
        launchOptions: {
             //slowMo: 1000
        },
    },

    timeout: 60 * 1000 * 5,
    retries: 0,
    // reporter: [["dot"], ["json", {
      // outputFile: "jsonReports/jsonReport.json"
    //}], ["html", {
    //    open: "never"
    //}]]


};

//export default config;

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect:{
    timeout: 5000
  },
  /* Run tests in files in parallel */  
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  //retries: process.env.CI ? 2 : 0,
  retries: 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
 // reporter: 'html',
  //reporter: [['html', { open: 'never' }]],
  //reporter: [['html', { outputFolder: 'my-report' }]],
   reporter: [
    ['list'],
    ['json', {  outputFile: 'test-results.json' }]
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    
  },

  /* Configure projects for major browsers */
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

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
