// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  "default e2e tests": (browser) => {
    browser
      .init()
      .waitForElementVisible("#app")
      .assert.visible('button[id=btn]')
      .assert.visible('span')
      .click('button[id=btn]')
      .assert.containsText('span', 'There have been 1 clicks made.')
      .end();
  },
};
