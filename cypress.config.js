const { defineConfig } = require("cypress");
const fs = require('fs-extra')
const path = require('path')
//import pluginMocha from 'cypress-mochawesome-reporter/plugin.js'
const  {beforeRunHook} = require('cypress-mochawesome-reporter/lib/index.js')

/*
// This is to get configuration file
const getConfigurationByFile = (file) => {
  const pathToConfigFile = path.resolve('config', `${file}.json`)

  return fs.readJson(pathToConfigFile)
}
*/

module.exports = defineConfig({

  /*
// set screen size
viewportHeight: 500,
viewportWidth: 600,
 
// defaultCommandTimeout change in ms
defaultCommandTimeout:10000
 
// retry logic -- openMode: when using cypress dashboard, runMode: using commamd Line
retries:{openMode: 2,runMode:1}
*/
  //video: true,
  screenshotOnRunFailure: true,
  reporter: 'cypress-mochawesome-reporter',
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000, reporterOptions: {
    charts: true,
    reportPageTitle: `reports_${new Date().toLocaleString().replace(',', '')}`
  },

  e2e: {

    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      require('./setup.js');
      on('before:run', async (details) => {
        await beforeRunHook(details)
      })
      //const file = config.env.configFile || 'dev'
      return config;//  getConfigurationByFile(file);
    },
  },
});
