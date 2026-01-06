// @ts-check
import { test, expect } from '@playwright/test';
import { Tools } from './Tools.js';

const tools = new Tools();

test.describe('Automatisation Exercises', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://automationexercise.com', { waitUntil: 'domcontentloaded' });
    await page.getByRole('button', { name: /accept all|tout accepter|consent/i }).click();
  });

    test('créer compte et le supprimer', async ({ page }) => {
      await tools.CreateAcountAndDelete(page);
    });

    test('se connecter et supprimer le compte', async ({ page }) => {
      await tools.CreateAcountAndLogout(page);
      await tools.Login(page);
      await tools.DeleteAccount(page);
    });

    test('se connecter avec erreur', async ({ page }) => {
      await tools.LoginWithError(page);
    });
});
