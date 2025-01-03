const { defineConfig } = require("cypress");

module.exports = defineConfig({

    /*
  // set screen size
  viewportHeight: 500,
  viewportWidth: 600,
  
  // defaultCommandTimeout change in ms
  defaultCommandTimeout:2000
  
  // retry logic -- openMode: when using cypress dashboard, runMode: using commamd Line
 retries:{openMode: 2,runMode:1}
 */
 //video: true,
 reporter: 'cypress-mochawesome-reporter',
 chromeWebSecurity: false,


  e2e: {

    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
