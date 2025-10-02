import { test } from '@playwright/test';

//annotation
test.skip('Test skipped', async ({ page }) => {
  //await page.goto('https://playwright.dev/');
});

test('not yet ready', async ({ page }) => {
  test.fail();
});

test.fixme('to be fixed', async ({ page }) => {
  
});

test('slow test', async ({ page }) => {
  test.slow();
});

//tag
test('Test login page @smoke', async ({ page }) => {
  
});