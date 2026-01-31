import { test, expect } from '@playwright/test';

test('Neg_Fun_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('mama gedarat yanawa.');
  await expect(outputbox).toContainText('මම ගෙදරට යනවා.');

});

test('Neg_Fun_0002', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('api het kampus enava.');
  await expect(outputbox).toContainText('අපි හෙට කැම්පස් එනවා.');

});

test('Neg_Fun_0003', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('Apiii watadDaRA yAnaVaA.');
  await expect(outputbox).toContainText('අපි වටද්දර යනවා.');

});

test('Neg_Fun_0004', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('mamaaaaa udaraaaaataaa yanavaaaa.');
  await expect(outputbox).toContainText('මම උඩරට යනවා.');

});

test('Neg_Fun_0005', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('oy@l@ N*@ra yanawa.');
  await expect(outputbox).toContainText('ඔයලා නුවර යනවා.');

});

test('Neg_Fun_0006', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('mama heta nanawa.');
  await expect(outputbox).toContainText('මම හෙට නානවා.');

});

test('Neg_Fun_0007', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('mama h3ta p0l3 yana8a.');
  await expect(outputbox).toContainText('මම හෙට පොළේ යනවා.');

});

test('Neg_Fun_0008', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('apii @#$% illamu.  ');
  await expect(outputbox).toContainText('අපි සල්ලි ඉල්ලමු.');

});

test('Neg_Fun_0009', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('api pnsal yanawaa!!!!!!.');
  await expect(outputbox).toContainText('අපි පන්සල් යනවා!!!!!!.');

});

test('Neg_Fun_0010', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('mama dean nidagannwa.');
  await expect(outputbox).toContainText('මම දැන් නිදාගන්නවා.');

});

