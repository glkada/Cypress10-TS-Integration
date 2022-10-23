import { defineConfig } from 'cypress'

let config = {
  video: true,
  retries: 3,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    // setupNodeEvents(on, config) {
    //   return require('./cypress/plugins/index.js')(on, config)
    // },
    baseUrl: 'https://demoqa.com/',
  }
}

if (process.platform === "linux") {
  config.downloadsFolder = "/Users/test1/Documents/cypress_test/cypress_test_folder/cypress/downloads";
}

export default defineConfig(config)
