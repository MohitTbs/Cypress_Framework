// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

import 'cypress-mochawesome-reporter/register';

require('cypress-xpath');

import { logger, removeFiles } from '../utilities/utils';



Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  /*
    if(err.message.includes('Unexpected token')){
      console.log('Application Error Javascript Token');
      return false;
    }  // for this return true;
    */
  return false;
});

before(() => {

  //cy.deleteFile('.\\Logging\\logs.log')

})



beforeEach(() => {
  logger('Inside test: ' + Cypress.currentTest.titlePath + ' ' + new Date())
})


afterEach(() => {
  //logger(this.currentTest.state)

  //it will tell you status as passed or failed
  //You only need to integrate mocha plugin with the cypress project.
  logger(Cypress.currentTest.titlePath + ' ' + Cypress.mocha.getRunner().suite.ctx.currentTest.state + '--' + new Date())
})
