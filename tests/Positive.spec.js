import { test, expect } from '@playwright/test';

test('Pos_Fun_0001',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('oyaata kohomadha?');
  await expect(outputBox).toContainText('ඔයාට කොහොමද?');
  
});

test('Pos_Fun_0002', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('mama gedhara yanavaa.');
  await expect(outputBox).toContainText('මම ගෙදර යනවා.');
});

test('Pos_Fun_0003', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('vahaama enna.');
  await expect(outputBox).toContainText('වහාම එන්න.');
});

test('Pos_Fun_0004', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('issarahata poddak yanna.');
  await expect(outputBox).toContainText('ඉස්සරහට පොඩ්ඩක් යන්න.');
});

test('Pos_Fun_0005', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('karuNaakaralaa eeka poddak balanna.');
  await expect(outputBox).toContainText('කරුණාකරලා ඒක පොඩ්ඩක් බලන්න.');
});

test('Pos_Fun_0006', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('ehema karapan.');
  await expect(outputBox).toContainText('එහෙම කරපන්.');
});

test('Pos_Fun_0007', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('api dhaen lunch kanavaa.');
  await expect(outputBox).toContainText('අපි දැන් lunch කනවා.');
});

test('Pos_Fun_0008', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('mama iiyee office giyaa.');
  await expect(outputBox).toContainText('මම ඊයේ office ගියා.');
});

test('Pos_Fun_0009', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('api heta meeting ekata yamu.');
  await expect(outputBox).toContainText('අපි හෙට meeting එකට යමු.');
});

test('Pos_Fun_0010', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('oyaalaa raeta kaala enne dha?');
  await expect(outputBox).toContainText('ඔයාලා රැට කාල එන්නෙ ද?');
});

test('Pos_Fun_0011', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('tikak tikak hari lassanayi.');
  await expect(outputBox).toContainText('ටිකක් ටිකක් හරි ලස්සනයි.');
});

test('Pos_Fun_0012', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('adhamamakanthooruyannaoone');
  await expect(outputBox).toContainText('අදමමකන්තෝරුයන්නඕනෙ');
});


test('Pos_Fun_0013', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('suba raathriyak!');
  await expect(outputBox).toContainText('සුබ රාත්‍රියක්!');
});

test('Pos_Fun_0014', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('WhatsApp maeseej ekak yavanna.');
  await expect(outputBox).toContainText('WhatsApp මැසේජ් එකක් යවන්න.');
});

test('Pos_Fun_0015', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('api Colombo yanavaa.');
  await expect(outputBox).toContainText('අපි Colombo යනවා.');
});

test('Pos_Fun_0016', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('Rs. 2500 vitharayi');
  await expect(outputBox).toContainText('Rs. 2500 විතරයි');
});

test('Pos_Fun_0017', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('8.00 AM enne.');
  await expect(outputBox).toContainText('8.00 AM එන්නෙ.');
});

test('Pos_Fun_0018', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('oyaa adha piinanna yanavadha?');
  await expect(outputBox).toContainText('ඔයා අද පීනන්න යනවද?');
});

test('Pos_Fun_0019', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('eekane machan!');
  await expect(outputBox).toContainText('ඒකනෙ මචන්!');
});



test('Pos_Fun_0020', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('mama   adha   inne   gedhara.');
  await expect(outputBox).toContainText('මම අද ඉන්නේ ගෙදර');
});

test('Pos_Fun_0021', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('yaaluvanee api vinoodha chaarikaavak yamudha mokadha kiyannee dhavas dhekak, nuvara eliye saha badhulle gihin naalaa kaalaa aevidhalaa emu. samanta yi nayanata yi kiyamu needha.');
  await expect(outputBox).toContainText('යාලුවනේ අපි විනෝද චාරිකාවක් යමුද මොකද කියන්නේ දවස් දෙකක්, නුවර එලියෙ සහ බදුල්ලෙ ගිහින් නාලා කාලා ඇවිදලා එමු. සමන්ට යි නයනට යි කියමු නේද.');
});

test('Pos_Fun_0022', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('puLuvannam mata call ekak dhenna.');
  await expect(outputBox).toContainText('පුළුවන්නම් මට call එකක් දෙන්න');
});

test('Pos_Fun_0023', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('mata poddak nidhimathayi.');
  await expect(outputBox).toContainText('මට පොඩ්ඩක් නිදිමතයි');
});

test('Pos_Fun_0024', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('hari, mama karannam.');
  await expect(outputBox).toContainText('හරි, මම කරන්නම්');
});
