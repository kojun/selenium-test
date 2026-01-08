const {Builder, By, Key, until} = require('selenium-webdriver');
const {Options} = require('selenium-webdriver/ie');

(async () => {
  let ieOptions = new Options();
  ieOptions.setEdgeChromium(true);
  ieOptions.setEdgePath('C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe');

  ieOptions.ignoreZoomSetting(true);  //ズーム100%問題を回避
  ieOptions.initialBrowserUrl("https://nikkei.com");  // 遷移ハング回避の「効くことがある」手

  let driver = await new Builder().
                         forBrowser('ie').
                         setIeOptions(ieOptions).
                         build();
  try {
    console.log("BEFORE get");
    await driver.get('http://nikkei.com');
    console.log("AFTER get");

    // titleはIEモードだと変わる or 遅いことがあるので少し長めに
    await driver.wait(until.titleContains("日本経済新聞"), 20000);
    console.log("TITLE: " + await driver.getTitle());
  } finally {
    await driver.quit();
  }
})();
