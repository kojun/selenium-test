const {Builder, By, Key, until} = require('selenium-webdriver');
const {Options} = require('selenium-webdriver/ie');

(async () => {
  let ieOptions = new Options();
  ieOptions.setEdgeChromium(true);
  ieOptions.setEdgePath('C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe');

  let driver = await new Builder().
                         forBrowser('ie').
                         setIeOptions(ieOptions).
                         build();
  try {
    await driver.get('http://www.bing.com');
    let elem = await driver.findElement(By.id('sb_form_q'));
    await elem.sendKeys('WebDriver', Key.RETURN);
    await driver.wait(until.titleIs('WebDriver - Bing'), 1000);
  } finally {
    await driver.quit();
  }
})();
