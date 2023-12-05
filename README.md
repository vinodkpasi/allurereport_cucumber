Install Node.js from below URL.
https://nodejs.org/en/download/

Open the commnad prompt in root directory.

Run the **"npm install"** command to install the dependencies.

Run one of the below command to run the tests in the open-mode.

**npx cypress open**

Run the below command to run the tests in the run-mode.

**npx cypress run**

Using **run** mode when test execution is completed then single file version report file **"index.html"** is generated in the root directory of the project inside **"allure-reports"** folder and report is automatically open in the default browser.

Run the below command to open the report manually.
**npm run allure:open:report**
