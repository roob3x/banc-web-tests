const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,

  e2e: {
    baseUrl: 'http://localhost:4000',
    reporter: 'cypress-mochawesome-reporter',
    //video: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      // implement node event listeners here
    },
  },
});
