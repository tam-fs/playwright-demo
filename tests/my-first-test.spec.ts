import {test, expect} from '@playwright/test';
test('My first test ', async ({page}) => {
    await page.goto('https://demoqa.com/checkbox');
    await page.locator('label[for="tree-node-home"]').check();
    await expect(page.locator('label[for="tree-node-home"]')).toBeChecked();
})