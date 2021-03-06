import { expect, Locator, Page } from '@playwright/test';
import { Login } from '../../test-data/types';
import texts from '../texts/texts.json';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {
  readonly path: string;
  readonly mainHeader: Locator;

  // New Customer Section
  readonly newCustomerSection: Locator;
  readonly radioRegisterAccount: Locator;
  readonly buttonContinueRegistration: Locator;

  // Returning Customer Section
  readonly returningCustomerSection: Locator;
  readonly inputLoginName: Locator;
  readonly inputPassword: Locator;
  readonly buttonLogin: Locator;
  readonly linkForgotYourPassword: Locator;
  readonly linkForgotYourLogin: Locator;

  constructor(page: Page) {
    super(page);
    this.path = 'index.php?rt=account/login';
    this.mainHeader = page.locator('h1.heading1 span', {
      hasText: texts.homePage.headerMain,
    });
    this.newCustomerSection = page.locator('div.newcustomer');
    this.returningCustomerSection = page.locator('div.returncustomer');
    this.radioRegisterAccount = page.locator('input#accountFrm_accountregister');
    this.buttonContinueRegistration = page.locator('button[title="Continue"]');
    this.inputLoginName = page.locator('input[name="loginname"]');
    this.inputPassword = page.locator('input[name="password"]');
    this.buttonLogin = page.locator('button[title="Login"]');
    this.linkForgotYourPassword = page.locator('a', {
      hasText: texts.homePage.linkForgotPassword,
    });
    this.linkForgotYourLogin = page.locator('a', {
      hasText: texts.homePage.linkForgotLogin,
    });
  }

  async verifyPageContent() {
    const elements = [
      this.mainHeader,
      this.newCustomerSection,
      this.radioRegisterAccount,
      this.radioRegisterAccount,
      this.buttonContinueRegistration,
      this.inputLoginName,
      this.inputPassword,
      this.buttonLogin,
      this.linkForgotYourPassword,
      this.linkForgotYourLogin,
    ];
    await super.verifyPageContent(elements);
  }

  async login(data: Login) {
    await this.inputLoginName.type(data.username);
    await this.inputPassword.type(data.password);
    await this.buttonLogin.click();
    await this.page.context().storageState({ path: 'test-data/loggedUser.json' });
  }
}
