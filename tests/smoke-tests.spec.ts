import { expect, test } from '@playwright/test';
import { CheckoutConfirmationPage } from '../support/page-objects/checkoutConfirmationPage';
import { HomePage } from '../support/page-objects/homePage';
import { LoginPage } from '../support/page-objects/loginPage';
import { MyAccountPage } from '../support/page-objects/myAccountPage';
import { ProductPage } from '../support/page-objects/productPage';
import { RegisterPage } from '../support/page-objects/registerPage';
import { ShoppingCartPage } from '../support/page-objects/shoppingCartPage';
import { registerHappyPath } from '../test-data/test-data';
import texts from '../support/texts/texts.json';
import { loginHappyPath, orderProductHappyPath } from '../test-data/test-data';

test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
});

test.describe('Smoke Tests Suite', () => {
  test('TC_01 - Register a new user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const registerPage = new RegisterPage(page);
    const myAccountPage = new MyAccountPage(page);
    await homePage.buttonLoginOrRegister.click();
    await loginPage.buttonContinueRegistration.click();
    await registerPage.registerUser(registerHappyPath);
    await myAccountPage.verifyUrl();
  });

  test('TC_02 - Login as already registered user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const myAccountPage = new MyAccountPage(page);
    const homePage = new HomePage(page);
    await homePage.buttonLoginOrRegister.click();
    await loginPage.verifyPageContent();
    await loginPage.login(loginHappyPath);
    await myAccountPage.verifyPageContent();
  });

  test.describe('Tests for logged user', () => {
    test.use({ storageState: 'test-data/loggedUser.json' });
    test('TC_03 - Add product to cart as logged user and order it', async ({ page }) => {
      const homePage = new HomePage(page);
      const productPage = new ProductPage(page);
      const shoppingCartPage = new ShoppingCartPage(page);
      const checkoutConfirmationPage = new CheckoutConfirmationPage(page);
      await homePage.selectProduct(orderProductHappyPath.productName);
      await productPage.buttonAddToCart.click();
      await shoppingCartPage.verifyProductInCart(orderProductHappyPath);
      await shoppingCartPage.buttonCheckout.click();
      await checkoutConfirmationPage.buttonCofirmOrder.click();
      expect(checkoutConfirmationPage.headerMain).toContainText(texts.checkoutConfirmationPage.headerMain);
      await checkoutConfirmationPage.buttonContinue.click();
      await homePage.verifyUrl();
    });
  });
});
