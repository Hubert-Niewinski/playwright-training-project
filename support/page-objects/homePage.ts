import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class HomePage extends BasePage {
  readonly path: string;
  readonly linkProduct: Locator;

  constructor(page: Page) {
    super(page);
    this.path = '/';
    this.linkProduct = page.locator('a.prdocutname');
  }

  async selectProduct(product: string) {
    await this.linkProduct.filter({ hasText: product }).click();
  }
}
