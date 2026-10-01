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

test.only("InvalidLoginPractice", async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    const username = page.locator("input#username");
    const signIn = page.locator("input#signInBtn");
    await username.fill("rahulshetty");
    await page.locator("[type='password']").fill("learning");
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(await page.locator("[style*='block']")).toContainText("Incorrect ");
    await username.fill("");
    await username.fill("rahulshettyacademy");
    await signIn.click();

});