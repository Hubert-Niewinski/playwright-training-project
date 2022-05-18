import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class RegisterPage extends BasePage {
  readonly url: string;

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
    this.url = "index.php?rt=account/create";
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
    this.radioSubscribe = page.locator("input#AccountFrm_newsletter1");
    this.radioNotSubscribe = page.locator("input#AccountFrm_newsletter0");
    this.buttonContinue = page.locator('button[title="Continue"]');
    this.checkboxAgreePolicy = page.locator("input#AccountFrm_agree");
    this.buttonSuccessContinue = page.locator('a[title="Continue"]');
  }

  async registerUser(
    firstName: string,
    lastName: string,
    email: string,
    adress1: string,
    city: string,
    regionState: string,
    zipCode: string,
    country: string,
    loginName: string,
    password: string,
    passwordConfirm: string,
    newsletter: boolean,
    telephone?: number,
    fax?: number,
    company?: string,
    address2?: string
  ) {
    await this.inputFirstName.type(firstName);
    await this.inputLastName.type(lastName);
    await this.inputEmail.type(email);
    await this.inputAddress1.type(adress1);
    await this.inputCity.type(city);
    await this.dropdownCountry.selectOption({ label: country });
    await this.dropdownRegionState.selectOption({ label: regionState });
    await this.inputZipCode.type(zipCode);
    await this.inputLoginName.type(loginName);
    await this.inputPassword.type(password);
    await this.inputPasswordConfirm.type(passwordConfirm);
    if (newsletter) await this.radioSubscribe.check();
    if (telephone) await this.inputTelephone.type(telephone.toString());
    if (fax) await this.inputFax.type(fax.toString());
    if (company) await this.inputCompany.type(company);
    if (address2) await this.inputAddress2.type(address2);
    await this.checkboxAgreePolicy.check();
    await this.buttonContinue.click();
    await this.buttonSuccessContinue.click()
  }
}
