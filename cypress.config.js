const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const execSync = require('child_process').execSync;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", require('cypress-cucumber-preprocessor').default());
      allureWriter(on, config);
      on('before:run', (details) => {
        execSync("if exist allure-report rmdir allure-report /s /q");
        execSync("if exist allure-results rmdir allure-results /s /q");
      })
      on('after:run', (details) => {
        execSync('npx allure generate allure-results --clean -o allure-report && node ./node_modules/allure-single-html-file-js/combine.js allure-report && npx allure open allure-report');
      })
      return config;
    },
    env: {
      allure: true,
      allureReuseAfterSpec: true,
      allureAttachRequests: true,
      allureClearSkippedTests: false,
      allureAddVideoOnPass: false,
    },
    specPattern: "cypress/e2e/**/*.feature"
  },
});
