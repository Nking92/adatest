import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('localhost:8080');
  const title = page.locator('head > title');
  await expect(title).toHaveText('AdaTest');
});