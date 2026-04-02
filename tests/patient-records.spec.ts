import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ckd-ultrasound-ai.vercel.app/');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('admin@ckdhealium.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Admin@CKD123');
  await page.getByRole('button', { name: 'Show password' }).click();
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByRole('button', { name: 'Expand sidebar' })).toBeVisible();
  await page.getByRole('button', { name: 'Expand sidebar' }).click();
  await expect(page.getByRole('link', { name: 'Patients' })).toBeVisible();
  await page.getByRole('link', { name: 'Patients' }).click();
  await expect(page.getByText('Today\'s Patients ListAllAdd')).toBeVisible();
  await expect(page.getByText('DS✓Dereje Seifu27 yrs, Male')).toBeVisible();
  await page.getByText('Dereje Seifu').click();
  await expect(page.getByRole('button', { name: 'View' }).first()).toBeVisible();
  await page.getByRole('button', { name: 'View' }).first().click();
  await expect(page.getByText('eGFR Progress Over TimeTracking kidney function based on 0 study resultsNo')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Back to Patients' })).toBeVisible();
  await page.getByRole('button', { name: 'Back to Patients' }).click();
  await expect(page.getByText('Today\'s Patients ListAllAdd')).toBeVisible();

});