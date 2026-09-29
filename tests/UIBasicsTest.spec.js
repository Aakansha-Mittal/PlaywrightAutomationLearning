const {test, expect} = require('@playwright/test');

test("FirstTest", async function( {browser}) {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.instagram.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Instagram");


});

test("FirstTestAnonymousMethodBrowserFixture", async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/");
    console.log(await page.title());
});

test("FirstTestPageFixture", async ({page}) => {
    await page.goto("https://www.google.com/");
    console.log(await page.title());
});