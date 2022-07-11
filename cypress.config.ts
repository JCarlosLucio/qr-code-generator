import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, _config) {
      // implement node event listeners here
      // modify browser launch arguments
      // https://on.cypress.io/browser-launch-api
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'chromium') {
          launchOptions.args.push('--force-dark-mode=true');
          return launchOptions;
        }
      });
    },
    baseUrl: 'http://localhost:3000/qr-code-generator/',
    video: false,
    screenshotOnRunFailure: false,
  },
});
