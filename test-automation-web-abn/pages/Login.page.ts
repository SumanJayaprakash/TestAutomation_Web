import { Page } from "@playwright/test";
import * as selectors from '../utils/selectors.json';

export default class LoginPage {

    constructor(public page: Page) {
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
       // await this.page.locator('#logout i').click();
        await this.page.getByText('Sign Out').click();
      }
    //get getErrorMessage() {
    //    return this.page.locator(selectors.LoginPage.errorMessage).textContent();
    //}

}