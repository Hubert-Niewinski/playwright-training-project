import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class ProductPage extends BasePage {
  readonly path: string;
  readonly buttonAddToCart: Locator;

  constructor(page: Page) {
    super(page);
    this.path = 'index.php?rt=product/product&product_id=';
    this.buttonAddToCart = page.locator('.productpagecart');
  }

  async addProductToCart() {
    this.buttonAddToCart.click();
  }
}
