import { test, expect } from '@playwright/test';

test('Login test', async({page}) => {
    await page.goto('https://demo.applitools.com/');
    //await page.pause();

    await page.getByRole('textbox', { name: 'Enter your username' }).fill('Nhu Tam');
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('334455');
    await page.getByRole('link', { name: 'Sign in' }).click();

    await expect (page).toHaveURL('https://demo.applitools.com/app.html');

})  