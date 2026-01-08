// tests/sample.spec.js
const assert = require("assert");
const { Builder, until } = require("selenium-webdriver");

describe("smoke", function () {
  this.timeout(30000);

  let driver;
  before(async () => {
    driver = await new Builder().forBrowser("MicrosoftEdge").build();
  });

  after(async () => {
    await driver.quit();
  });

  it("opens example.com", async () => {
    await driver.get("https://nikkei.com");
    await driver.wait(until.titleContains("日本経済新聞"), 5000);
    const title = await driver.getTitle();
    assert(title.includes("日本経済新聞"));
  });
});
