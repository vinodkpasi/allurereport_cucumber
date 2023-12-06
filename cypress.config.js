const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const execSync = require('child_process').execSync;
const fs = require('fs');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", require('cypress-cucumber-preprocessor').default());
      allureWriter(on, config);
      on('before:run', (details) => {
        fs.rmSync("allure-report", { recursive: true, force: true });
        fs.rmSync("allure-results", { recursive: true, force: true });
      })
      on('after:run', (details) => {
        process.env['allureReportTitle'] = config.env.allureReportTitle;
        process.env['allureReportName'] = config.env.allureReportName;
        execSync('npx allure generate allure-results --single-file --clean -o allure-report &&  node cypress/plugins/scriptwriter.js && npx allure open allure-report');
      })
      return config;
    },
    env: {
      allure: true,
      allureReuseAfterSpec: true,
      allureAttachRequests: true,
      allureClearSkippedTests: false,
      allureAddVideoOnPass: false,
      allureReportTitle:"DriveBuddyAI Report",
      allureReportName:"DriveBuddyAI Report"
    },
    specPattern: "cypress/e2e/**/*.feature"
  },
});
