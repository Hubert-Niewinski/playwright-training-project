import { expect, Locator, Page } from '@playwright/test';
import { OrderProduct } from '../../test-data/types';
import { BasePage } from './basePage';

export class ShoppingCartPage extends BasePage {
  readonly path: string;
  readonly productsTable: Locator;
  readonly buttonCheckout: Locator;
  readonly inputQuantity: Locator;

  constructor(page: Page) {
    super(page);
    this.path = 'index.php?rt=product/product&product_id=';
    this.productsTable = page.locator('.product-list table');
    this.buttonCheckout = page.locator('.product-list a[title="Checkout"]');
    this.inputQuantity = page.locator('input#cart_quantity50');
  }

  async verifyProductInCart(data: OrderProduct) {
    let productRow = this.productsTable.locator('tr').nth(data.selectionNumber);
    await expect(productRow).toContainText(data.productName);
    await expect(productRow).toContainText(data.productModel);
    await expect(productRow).toContainText(data.productPrice);
    await expect(productRow).toContainText(data.productName);
    // await expect(productRow).toContainText(quantity)
  }

  async goToCheckout() {
    this.buttonCheckout.click();
  }
}
