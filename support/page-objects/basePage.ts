/*
  Page containing elements and methods common for all pages
*/

import { expect, Locator, Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly path: string;

  // Header
  readonly logoHeader: Locator;
  readonly buttonLoginOrRegister: Locator;
  readonly dropdownSelectPage: Locator;
  readonly inputFilter: Locator;

  // Header details
  readonly barHeaderDetails: Locator;
  readonly dropdownCurrency: Locator;
  readonly dropdownTopCart: Locator;
  readonly linkFacebook: Locator;
  readonly linkTwitter: Locator;
  readonly linkLinkedin: Locator;

  // Subnavbar
  readonly subnavbar: Locator;
  readonly breadcrumb: Locator;

  // Footer
  readonly sectionFooterSocial: Locator;
  readonly sectionFooterLink: Locator;
  readonly sectionFooterCopyright: Locator;
  readonly inputSubscribeNewsletter: Locator;
  readonly buttonSubscribeNewsletter: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoHeader = page.locator('img[title="Automation Test Store"]');
    this.buttonLoginOrRegister = page.locator('ul#customer_menu_top');
    this.dropdownSelectPage = page.locator('#topnav select');
    this.inputFilter = page.locator('input[name="filter_keyword"]');
    this.barHeaderDetails = page.locator('div.headerdetails');
    this.dropdownCurrency = this.barHeaderDetails.locator('.currency');
    this.dropdownTopCart = this.barHeaderDetails.locator('.topcart ');
    this.linkFacebook = this.barHeaderDetails.locator('.social_icons .facebook');
    this.linkTwitter = this.barHeaderDetails.locator('.social_icons .twitter');
    this.linkLinkedin = this.barHeaderDetails.locator('.social_icons .linkedin');
    this.subnavbar = page.locator('nav.subnav');
    this.breadcrumb = page.locator('ul.breadcrumb');
    this.sectionFooterSocial = page.locator('section.footersocial');
    this.sectionFooterLink = page.locator('section.footerlinks');
    this.sectionFooterCopyright = page.locator('section.copyrightbottom');
    this.inputSubscribeNewsletter = page.locator('input#appendedInputButton');
    this.buttonSubscribeNewsletter = page.locator('#subscribeFrm button');
  }

  async goto() {
    this.path ? await this.page.goto(this.path) : await this.page.goto('/');
  }

  async verifyUrl() {
    expect(this.page.url()).toContain(this.path);
  }

  async verifyPageContent(elements: Locator[]) {
    for (let element of elements) {
      await element.isVisible();
    }
  }
}
