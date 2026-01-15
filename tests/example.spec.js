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

    test('Test Case 6', async ({ page }) => {
      await tools.ContactUs(page);
    });

    test('Test Case 7', async ({ page }) => {
      await tools.TestCases(page);
    });

    test('Test Case 8', async ({ page }) => {
      await tools.Products(page);
    });

    test('Test Case 9', async ({ page }) => {
      await tools.SearchProducts(page);
    });

    test('Test Case 10', async ({ page }) => {
      await tools.Subscription(page);
    });

    test('Test Case 11', async ({ page }) => {
      await tools.Cart(page);
    });

    test('Test Case 12', async ({ page }) => {
      await tools.AddProductToCart(page);
    });

    test('Test Case 13', async ({ page }) => {
      await tools.AddMultipleProductsToCart(page);
    });
});
