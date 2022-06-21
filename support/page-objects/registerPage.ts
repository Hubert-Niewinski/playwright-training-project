import { Locator, Page } from '@playwright/test';
import { Register } from '../../test-data/types';

import { BasePage } from './basePage';

export class RegisterPage extends BasePage {
  readonly path: string;

  // Personal details section
  readonly inputFirstName: Locator;
  readonly inputLastName: Locator;
  readonly inputEmail: Locator;
  readonly inputTelephone: Locator;
  readonly inputFax: Locator;

  // Your adress section
  readonly inputCompany: Locator;
  readonly inputAddress1: Locator;
  readonly inputAddress2: Locator;
  readonly inputCity: Locator;
  readonly dropdownRegionState: Locator;
  readonly inputZipCode: Locator;
  readonly dropdownCountry: Locator;

  // Login details section
  readonly inputLoginName: Locator;
  readonly inputPassword: Locator;
  readonly inputPasswordConfirm: Locator;

  // Newsletter section
  readonly radioSubscribe: Locator;
  readonly radioNotSubscribe: Locator;
  readonly checkboxAgreePolicy: Locator;
  readonly buttonContinue: Locator;

  // Registration Success section
  readonly urlSuccess: Locator;
  readonly headerMainSuccess: Locator;

  readonly buttonSuccessContinue: Locator;

  constructor(page: Page) {
    super(page);
    this.path = 'index.php?rt=account/create';
    this.inputFirstName = page.locator('input[name="firstname"]');
    this.inputLastName = page.locator('input[name="lastname"]');
    this.inputEmail = page.locator('fieldset input[name="email"]');
    this.inputTelephone = page.locator('input[name="telephone"]');
    this.inputCompany = page.locator('input[name="company"]');
    this.inputAddress1 = page.locator('input[name="address_1"]');
    this.inputAddress2 = page.locator('input[name="address_2"]');
    this.inputCity = page.locator('input[name="city"]');
    this.dropdownRegionState = page.locator('select[name="zone_id"]');
    this.inputZipCode = page.locator('input[name="postcode"]');
    this.dropdownCountry = page.locator('select[name="country_id"]');
    this.inputLoginName = page.locator('input[name="loginname"]');
    this.inputPassword = page.locator('input[name="password"]');
    this.inputPasswordConfirm = page.locator('input[name="confirm"]');
    this.radioSubscribe = page.locator('input#AccountFrm_newsletter1');
    this.radioNotSubscribe = page.locator('input#AccountFrm_newsletter0');
    this.buttonContinue = page.locator('button[title="Continue"]');
    this.checkboxAgreePolicy = page.locator('input#AccountFrm_agree');
    this.buttonSuccessContinue = page.locator('a[title="Continue"]');
  }

  async registerUser(data: Register) {
    await this.inputFirstName.type(data.firstName);
    await this.inputLastName.type(data.lastName);
    await this.inputEmail.type(data.email);
    await this.inputAddress1.type(data.address1);
    await this.inputCity.type(data.city);
    await this.dropdownCountry.selectOption({ label: data.country });
    await this.dropdownRegionState.selectOption({ label: data.region });
    await this.inputZipCode.type(data.zipCode);
    await this.inputLoginName.type(data.username);
    await this.inputPassword.type(data.password);
    await this.inputPasswordConfirm.type(data.passwordConfirm);
    if (data.subscribeNewsletter) await this.radioSubscribe.check();
    if (data.telephone) await this.inputTelephone.type(data.telephone);
    if (data.fax) await this.inputFax.type(data.toString());
    if (data.company) await this.inputCompany.type(data.company);
    if (data.address2) await this.inputAddress2.type(data.address2);
    await this.checkboxAgreePolicy.check();
    await this.buttonContinue.click();
    await this.buttonSuccessContinue.click();
  }
}
