import { test, expect, chromium } from '@playwright/test';

test('Login test', async() => {
    const browser = await chromium.launch({
        headless: false,
        slowMo: 1000
    });
    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: { width: 1280, height: 720 }
        }
    });
    const page = await context.newPage();
    await page.goto('https://demo.applitools.com/');
    //await page.pause();

    await page.getByRole('textbox', { name: 'Enter your username' }).fill('Nhu Tam');
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('334455');
    await page.getByRole('link', { name: 'Sign in' }).click();

    await expect (page).toHaveURL('https://demo.applitools.com/app.html');
    await context.close();
})  