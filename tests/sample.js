// sample.js
const { Builder, By, until } = require("selenium-webdriver");

(async () => {
  const driver = await new Builder().forBrowser("MicrosoftEdge").build();
  try {
    await driver.get("https://nikkei.com");
    await driver.wait(until.titleContains("日本経済新聞"), 5000);
    console.log(await driver.getTitle());
  } finally {
    await driver.quit();
  }
})();
