import { expect, test } from "@playwright/test";
import { HomePage } from "../../support/page-objects/homePage";
import { LoginPage } from "../../support/page-objects/loginPage";
import { MyAccountPage } from "../../support/page-objects/myAccountPage";
import { RegisterPage } from "../../support/page-objects/registerPage";
import { happyPath } from "../../support/test-data/test-data";

test.describe("Smoke Tests Suite", () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    await homePage.goto();
    await homePage.buttonLoginOrRegister.click();
    await loginPage.verifyUrl();
  });

  test("TC_01 - Register a new user", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const registerPage = new RegisterPage(page);
    const myAccountPage = new MyAccountPage(page);
    await loginPage.goto();
    await loginPage.buttonContinueRegistration.click();
    await registerPage.registerUser(
      happyPath.register.firstName,
      happyPath.register.lastName,
      happyPath.register.email,
      happyPath.register.address1,
      happyPath.register.city,
      happyPath.register.region,
      happyPath.register.zipCode,
      happyPath.register.country,
      happyPath.register.login,
      happyPath.register.password,
      happyPath.register.passwordConfirm,
      happyPath.register.subscribeNewsletter
    );
    await myAccountPage.verifyUrl();
  });

  test("TC_02 - Login as already registered user", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const myAccountPage = new MyAccountPage(page);
    await loginPage.verifyPageContent();
    await loginPage.login(happyPath.login.username, happyPath.login.password);
    await myAccountPage.verifyUrl();
    await myAccountPage.verifyPageContent();
  });
});
