import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ckd-ultrasound-ai.vercel.app/');
  await page.getByRole('textbox', { name: 'Email address' }).fill('admin@ckdhealium.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Admin@CKD123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByText('Good Morning, Dr. Neeraj')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Expand sidebar' })).toBeVisible();
  await page.getByRole('button', { name: 'Expand sidebar' }).click();
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.getByRole('link', { name: 'Study Lists' }).click();
  await expect(page.getByRole('heading', { name: 'Today\'s Studies List' })).toBeVisible();
  await page.getByRole('button', { name: 'Expand sidebar' }).click();
  await expect(page.getByRole('link', { name: 'Patients' })).toBeVisible();
});