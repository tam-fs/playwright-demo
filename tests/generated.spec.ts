import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.applitools.com/');
  await page.getByRole('textbox', { name: 'Enter your username' }).click();
  await page.getByRole('textbox', { name: 'Enter your username' }).fill('nhutam03');
  await page.getByRole('textbox', { name: 'Enter your username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('nhutam03');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByText('Jack Gomez Customer Actions').click();
});