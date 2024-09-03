import puppeteer from "puppeteer-extra";
import stealth from "puppeteer-extra-plugin-stealth";

puppeteer.use(stealth());

export const getPageText = async (url: string) => {
    const browser = await puppeteer.launch({
        executablePath: "/usr/bin/firefox-nightly",
        headless: true,
        browser: "firefox",
        protocol: "cdp",
    });

    const page = await browser.newPage();

    await page.goto(url);
    await new Promise((r) => setTimeout(r, 2000));

    const data = await page.content();

    await browser.close();

    return data;
};
