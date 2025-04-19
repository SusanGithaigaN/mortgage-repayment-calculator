import { test, expect } from '@playwright/test';

const BASE_URL = process.env.TEST_ENV === 'production'
  ? 'https://mortgage-repayment-calculate.netlify.app/'
  : 'http://localhost:5173/';

test('E2E Mortgage Calculator Test', async ({ page }) => {
  await page.goto(BASE_URL);

  await page.getByRole('textbox', { name: 'Mortgage Amount' }).click();
  await page.getByRole('textbox', { name: 'Mortgage Amount' }).fill('2345670');
  await page.getByRole('textbox', { name: 'Mortgage Term' }).click();
  await page.getByRole('textbox', { name: 'Mortgage Term' }).fill('8');
  await page.getByRole('textbox', { name: 'Interest Rate' }).click();
  await page.getByRole('textbox', { name: 'Interest Rate' }).fill('14');
  await page.locator('div').filter({ hasText: /^Interest Only$/ }).nth(1).click();
  await page.locator('#radio-1').check();
  await page.getByRole('button', { name: 'calculate Calculate Repayments' }).click();
  await page.getByText('Clear All').click();
  await page.getByRole('textbox', { name: 'Mortgage Amount' }).click();
});

// run test:
// npx playwright test mortgage-calculator.spec.ts
