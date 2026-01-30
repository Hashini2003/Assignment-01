import { test, expect } from '@playwright/test';

test('Neg_Fun_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('mmaa geddhara yannavaa');
  await expect(outputBox).not.toContainText('මම ගෙදර යනවා');
});

test('Neg_Fun_0002', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('@@@ ### !!!');
  await expect(outputBox).toBeEmpty();
});

test('Neg_Fun_0003', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('u ok bro?');
  await expect(outputBox).not.toContainText('ඔයා හොඳද');
});

test('Neg_Fun_0004', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('mama $$$ gedhara ### yanavaa');
  await expect(outputBox).not.toContainText('මම ගෙදර යනවා');
});

test('Neg_Fun_0005', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('');
  await expect(outputBox).toBeEmpty();
});

test('Neg_Fun_0006', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('123456789');
  await expect(outputBox).not.toContainText('මම');
});

test('Neg_Fun_0007', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('mama mama mama mama yanavaa');
  await expect(outputBox).not.toContainText('මම මම');
});


test('Neg_Fun_0008', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('yanavaa gedhara mama');
  await expect(outputBox).not.toContainText('මම ගෙදර යනවා');
});

test('Neg_Fun_0009', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('mama gedhara yanavaa 😊');
  await expect(outputBox).not.toContainText('😊');
});

test('Neg_Fun_0010', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('abc abc abc abc abc abc abc abc abc abc abc abc');
  await expect(outputBox).not.toContainText('අබ්');
});
