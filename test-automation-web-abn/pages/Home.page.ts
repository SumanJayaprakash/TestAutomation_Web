//import { Page } from "@playwright/test";
import * as selectors from '../utils/selectors.json';
import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly getStartedLink: Locator;
  readonly gettingStartedHeader: Locator;
  readonly pomLink: Locator;
  readonly tocList: Locator;
  readonly homelink : Locator;

  constructor(page: Page) {
    this.page = page;
    this.homelink = page.locator('div').filter({ hasText: 'Home' });
  }
  get getByText() {
    //return this.page.locator(selectors.HomePage.pageTittle).textContent();
    return this.page.locator('div').filter({ hasText: 'Home' }).locator('i').textContent();
  }
  get getTitle() {
    return this.page.locator(selectors.HomePage.pageTittle).textContent();
}
  async enterUsername(username: string) {
    //await this.page.locator(selectors.LoginPage.usernameInput).type(username);
    await this.page.getByLabel('User').fill('username');
}

async enterPassword(password: string) {
   // await this.page.locator(selectors.LoginPage.passwordInput).type(password);
    await this.page.getByLabel('Password').fill('password');
}


async clickLoginButon() {
    //await this.page.click(selectors.LoginPage.loginButton);
    await this.page.getByRole('button', { name: 'LOGIN' }).click();
}

async clickShowUser() {
  //await this.page.click(selectors.LoginPage.loginButton);
  await this.page.locator('i').nth(3).click();
}

async clickLogOutButon() {
  //await this.page.click(selectors.LoginPage.loginButton);
  await this.page.locator('#logout i').click();
}

}

