const fs = require("fs");
const scriptFile = 'cypress/plugins/script.txt';
const htmlFile = 'allure-report/index.html';
let scriptText = fs.readFileSync(scriptFile, 'utf8');
scriptText = scriptText.replace("{{allureReportTitle}}",process.env['allureReportTitle']);
scriptText = scriptText.replace("{{allureReportName}}",process.env['allureReportName']);

let htmlText = fs.readFileSync(htmlFile, 'utf8');
htmlText = htmlText.replace("</body>",scriptText+"</body>");
fs.writeFileSync(htmlFile,htmlText,'utf8');
