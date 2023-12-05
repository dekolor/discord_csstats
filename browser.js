import puppeteer from "puppeteer-extra";
import players from "./players.json" assert { type: "json" };
import StealthPlugin from "puppeteer-extra-plugin-stealth";
puppeteer.use(StealthPlugin());

players.forEach((element) => {
  puppeteer
    .launch({
      headless: true,
    })
    .then(async (browser) => {
      const page = await browser.newPage();
      await page.goto("https://csstats.gg/player/" + element);
      await page.setViewport({ width: 1080, height: 1024 });
      await page.waitForTimeout(2000);
      await page.mouse.click(500, 980);
      await page.waitForTimeout(1000);
      await page.mouse.wheel({ deltaY: +110 });
      await page.mouse.reset();
      await page.screenshot({ path: "pics/" + element + ".png" });
      await browser.close();
    });
});
