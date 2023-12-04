Install Node.js from below URL.
https://nodejs.org/en/download/

Open the commnad prompt in root directory.

Run the **"npm install"** command to install the dependencies.

Run one of the below command to run the tests in the open-mode.

**npx cypress open**

Run the below command to run the tests in the run-mode.

**npx cypress run**

After test execution is completed using **run** mode then report is generated in the root directory of the project inside **"allure-reports"** folder and report is automatically open in the default browser.

This folder also contains the **"complete.html"** file which is single file version of allure report and does not have any dependency on web server to be displayed and easily can be shared to anyone.

Run the below command to open the report manually.
**npm run allure:open:report**
