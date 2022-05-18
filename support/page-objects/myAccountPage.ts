import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class MyAccountPage extends BasePage {
  readonly url: string;

  // Top Navbar
  readonly linkTopEditAccountDetails: Locator;
  readonly linkTopChangePassword: Locator;
  readonly linkTopManageAddressBook: Locator;
  readonly linkTopMyWishList: Locator;
  readonly linkTopOrderHistory: Locator;
  readonly linkTopTransactionHistory: Locator;
  readonly linkTopDownloads: Locator;
  readonly linkTopNotifications: Locator;
  readonly linkTopLogoff: Locator;

  // Bottom Navbar
  readonly linkBottomManageAdrressBook: Locator;
  readonly linkBottomOrderHistory: Locator;
  readonly linkBottomDownloads: Locator;
  readonly linkBottomTransactionHistory: Locator;

  readonly linkDownloads;

  constructor(page: Page) {
    super(page);
    this.url = "index.php?rt=account/account";
    this.linkTopEditAccountDetails = page.locator(
      '.nav-dash a[data-original-title="Edit account details"]'
    );
    this.linkTopChangePassword = page.locator(
      '.nav-dash a[data-original-title="Change password"]'
    );
    this.linkTopManageAddressBook = page.locator(
      '.nav-dash a[data-original-title="Manage Address Book"]'
    );
    this.linkTopMyWishList = page.locator(
      '.nav-dash a[data-original-title="My wish list"]'
    );
    this.linkTopOrderHistory = page.locator(
      '.nav-dash a[data-original-title="Order history"]'
    );
    this.linkTopTransactionHistory = page.locator(
      '.nav-dash a[data-original-title="Transaction history"]'
    );
    this.linkTopDownloads = page.locator(
      '.nav-dash a[data-original-title="Downloads"]'
    );
    this.linkTopNotifications = page.locator(
      '.dash-tiles a[data-original-title="Notifications"]'
    );
    this.linkTopLogoff = page.locator(
      '.dash-tiles a[data-original-title="Logoff"]'
    );
    this.linkBottomManageAdrressBook = page.locator(
      '.dash-tiles a[data-original-title="Manage Address Book"]'
    );
    this.linkBottomOrderHistory = page.locator(
      '.dash-tiles a[data-original-title="Order history"]'
    );
    this.linkBottomDownloads = page.locator(
      '.dash-tiles a[data-original-title="Downloads"]'
    );
    this.linkBottomTransactionHistory = page.locator(
      '.dash-tiles a[data-original-title="Transaction history"]'
    );
  }

  async verifyPageContent() {
    const elements = [
      this.linkTopEditAccountDetails,
      this.linkTopChangePassword,
      this.linkTopManageAddressBook,
      this.linkTopMyWishList,
      this.linkTopOrderHistory,
      this.linkTopTransactionHistory,
      this.linkTopDownloads,
      this.linkTopNotifications,
      this.linkTopLogoff,
      this.linkBottomManageAdrressBook,
      this.linkBottomOrderHistory,
      this.linkBottomDownloads,
      this.linkBottomTransactionHistory,
    ];
    await super.verifyPageContent(elements);
  }
}
