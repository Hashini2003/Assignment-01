import { test, expect } from '@playwright/test';

test('Pos_UI_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50'
  );
  await inputBox.type('mama adha gedhara inne');
  await expect(outputBox).toContainText('මම අද ගෙදර ඉන්නේ');
});
