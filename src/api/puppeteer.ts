import { REDSTONE_IS_DUMB } from "astro:env/server";
import puppeteer from "puppeteer-extra";
import stealth from "puppeteer-extra-plugin-stealth";

puppeteer.use(stealth());

export const getPageText = async (url: string) => {
    const browser =
        REDSTONE_IS_DUMB == 1
            ? await puppeteer.launch({
                  executablePath: "/usr/bin/firefox-nightly",
                  headless: true,
                  browser: "firefox",
                  protocol: "cdp",
              })
            : await puppeteer.launch({
                  headless: true,
                  protocol: "cdp",
              });

    const page = await browser.newPage();

    await page.goto(url);
    await new Promise((r) => setTimeout(r, 2000));

    const data = await page.content();

    await browser.close();

    return data;
};
