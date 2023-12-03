import { test, expect } from "@playwright/test";
import LoginPage from "../pages/Login.page";
import {HomePage} from "../pages/Home.page";
import * as users from "../data/credentials.json";

test.describe("Home Feature @home", async () => {
    let loginPage: LoginPage;
    let homepage: HomePage;

    test.beforeEach(async ({ page }, testInfo) => {
        loginPage = new LoginPage(page);
        await page.goto('file://C:/Users/Gebruiker/TEST-AUTOMATION-ABN-AMRO/test-automation-abn-amro/src/index.html');
        //await page.goto(`${baseURL}`);
        await loginPage.enterUsername(users.admin.username);
        await loginPage.enterPassword(users.admin.password);

        await loginPage.clickLoginButon();
        homepage = new HomePage(page);
        testInfo.setTimeout(testInfo.timeout + 30000);
        
        
    })

    test("TC07:Positive: Home Page - Expected titles Home Product Contact and Signout", async ({ page },testInfo) => {
        
        //Assertions
        expect(await homepage.homelink).toContainText;
        await expect(page.getByText('Home')).toHaveText('Home')
        expect(page.getByText('Home Products Contact Sign Out')).toBeTruthy()
        expect(page.locator('#content')).toBeTruthy()
        expect(page.getByText('Home')).toBeTruthy()
        expect(page.getByText('Products')).toBeTruthy()
        expect(page.getByText('Contact')).toBeTruthy()
        testInfo.setTimeout(testInfo.timeout + 30000);
                 
    });



})