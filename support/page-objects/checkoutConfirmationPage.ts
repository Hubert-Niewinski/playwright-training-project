import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class CheckoutConfirmationPage extends BasePage {
  readonly path: string;
  readonly urlSuccess: string;
  readonly buttonCofirmOrder: Locator;
  readonly buttonContinue: Locator;
  readonly headerMain: Locator;

  constructor(page: Page) {
    super(page);
    this.path = 'index.php?rt=checkout/confirm';
    this.urlSuccess = 'index.php?rt=checkout/success';
    this.buttonCofirmOrder = page.locator('button#checkout_btn');
    this.buttonContinue = page.locator('a[title="Continue"]');
    this.headerMain = page.locator('h1.heading1');
  }
}
