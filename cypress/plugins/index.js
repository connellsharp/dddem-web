const { pa11y, prepareAudit } = require("@cypress-audit/pa11y");

module.exports = (on, config) => {
  on("before:browser:launch", (browser = {}, launchOptions) => {
    prepareAudit(launchOptions);
  });

  on("task", {
    pa11y: pa11y()
  })
}