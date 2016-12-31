exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['src/test/test.spec.e2e.js'],
  useAllAngular2AppRoots: true,
  onPrepare: function() {
    // Override the timeout for webdriver.
    browser.manage().timeouts().setScriptTimeout(10000);
  }
};