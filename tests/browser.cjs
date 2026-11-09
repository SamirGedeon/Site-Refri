const {chromium} = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
(async () => {
  fs.mkdirSync('artifacts', {recursive:true});
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.goto((process.env.BASE_URL || 'http://localhost:8000') + '/refrigerante/');
    for (const width of [1440, 390]) {
      await page.setViewportSize({width, height:900});
      await page.locator('#next').click();
      assert.equal(await page.locator('.active .title').innerText(), 'Abacate');
      await page.locator('#next').click();
      assert.equal(await page.locator('.active .title').innerText(), 'Laranja');
      await page.locator('#next').click();
      assert.equal(await page.locator('.active .title').innerText(), 'Morango');
      await page.locator('#prev').click();
      assert.equal(await page.locator('.active .title').innerText(), 'Laranja');
      await page.locator('[data-slide="0"]').click();
      await page.locator('main').focus();
      await page.keyboard.press('ArrowRight');
      assert.equal(await page.locator('.active .title').innerText(), 'Abacate');
      assert.equal(await page.locator('[aria-current="true"]').count(), 1);
      await page.locator('[data-slide="0"]').click();
      await page.waitForFunction(() => [...document.images].every(i => i.complete && i.naturalWidth > 0));
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
      await page.screenshot({path:`artifacts/vitrine-${width}.png`,fullPage:true});
    }
    assert.deepEqual(errors, []);
    console.log('OK: carrossel, teclado, seleção, imagens e duas larguras.');
  } finally { await browser.close(); }
})().catch(e => {console.error(e);process.exitCode=1;});
