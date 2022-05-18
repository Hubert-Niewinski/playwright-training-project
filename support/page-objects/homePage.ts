import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class HomePage extends BasePage {
  url: string
  constructor(page: Page) {
    super(page);
    this.url = '/'
  }
}
