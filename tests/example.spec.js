// @ts-check
import { test, expect } from '@playwright/test';
import { Tools } from './Tools.js';

const tools = new Tools();

test.describe('Automatisation Exercises', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://automationexercise.com', { waitUntil: 'domcontentloaded' });
    await page.getByRole('button', { name: /accept all|tout accepter|consent/i }).click();
  });

    test('Test Case 1', async ({ page }) => {
      await tools.CreateAcountAndDelete(page);
    });

    test('Test Case 2', async ({ page }) => {
      await tools.CreateAcountAndLogout(page);
      await tools.Login(page);
      await tools.DeleteAccount(page);
    });

    test('Test Case 3', async ({ page }) => {
      await tools.LoginWithError(page);
    });

    test('Test Case 4', async ({ page }) => {
      await tools.CreateAcountAndLogout(page);
    });

    test('Test Case 5', async ({ page }) => {
      await tools.CreateAcountAndLogout(page);
      await tools.CreateAcountExisted(page);
    });
});
