import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ckd-ultrasound-ai.vercel.app/');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('admin@ckdhealium.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('A');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('Admin@');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('Admin@CKD123');
  await page.getByRole('button', { name: 'Show password' }).click();
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: 'Settings' }).click();
  await expect(page.getByRole('heading', { name: 'Organization Profile' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Eg: Cardiology' }).click();
  await page.getByRole('textbox', { name: 'Eg: Cardiology' }).fill('C');
  await page.getByRole('textbox', { name: 'Eg: Cardiology' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Eg: Cardiology' }).fill('Cardiology');
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await expect(page.getByText(/Organization profile updated/i)).toBeVisible({ timeout: 10000 });
  await page.getByRole('button', { name: 'Security' }).click();
  await expect(page.getByRole('heading', { name: 'Security & Authentication' })).toBeVisible();
  await page.getByRole('button', { name: 'Organization' }).click();
  await expect(page.getByRole('heading', { name: 'Organization Profile' })).toBeVisible();
});