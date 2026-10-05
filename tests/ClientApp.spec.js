const {test, expect} = require ('@playwright/test');

test.only("Assignment1", async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/client/dashboard/dash");
    await expect( await page.locator("h1.login-title").textContent == "Log In");
    await page.locator("input#userEmail").fill("");
    await page.locator("input#userEmail").fill("testing_user@google.com");
     await page.locator("input#userPassword").fill("");
    await page.locator("input#userPassword").fill("Testing_User123");
    await page.locator("input#login").click();
    //await page.waitForLoadState('networkidle');
    const cardTitle = page.locator(".card-body h5");
    //console.log(await cardTitle.first().textContent());
    //expect(await cardTitle.first()).toContainText("ADIDAS ORIGINAL");
    console.log(await cardTitle.allTextContents());
});
