const { expect } = require('@playwright/test');

class Tools {

    locatorSignUpLogin = 'a[href="/login"]';
    locatorSingupName = 'input[data-qa="signup-name"]';
    locatorSingupEmail = 'input[data-qa="signup-email"]';
    locatorSingupButton = 'button[data-qa="signup-button"]';
    locatorGender1 = 'input[id="id_gender1"]';
    locatorPassword = 'input[data-qa="password"]';
    locatorDays = '#days';
    locatorMonths = '#months';
    locatorYears = '#years';
    locatorNewsletter = 'input[id="newsletter"]';
    locatorOptin = 'input[id="optin"]';
    locatorFirstName = 'input[data-qa="first_name"]';
    locatorLastName = 'input[data-qa="last_name"]';
    locatorAddress = 'input[data-qa="address"]';
    locatorCountry = '#country';
    locatorState = 'input[data-qa="state"]';
    locatorCity = 'input[data-qa="city"]';
    locatorZipcode = 'input[data-qa="zipcode"]';
    locatorMobile = 'input[data-qa="mobile_number"]';
    locatorCreateAccountBtn = 'button[data-qa="create-account"]';
    locatorContinueBtn = 'a[data-qa="continue-button"]';
    locatorDeleteAccountBtn = 'a[href="/delete_account"]';
    locatorLogoutBtn = 'a[href="/logout"]';
    locatorLoginEmail = 'input[data-qa="login-email"]';
    locatorLoginPassword = 'input[data-qa="login-password"]';
    locatorLoginBtn = 'button[data-qa="login-button"]';

    RandomAlpha(length = 8) {
        const letters = "abcdefghijklmnopqrstuvwxyz";
        let result = "";

        for (let i = 0; i < length; i++) {
            result += letters.charAt(Math.floor(Math.random() * letters.length));
        }

        return result;
    }

    generatedEmail = this.RandomAlpha(12) + '@outlook.fr';

    async CreateAcountAndDelete(page) {
        const name = this.RandomAlpha(12);
        // 4) Click on 'Signup / Login'
        await page.locator(this.locatorSignUpLogin).click();
        // 5) Verify 'New User Signup!' is visible
        await expect(page.getByRole('heading', { name: /new user signup!/i })).toBeVisible();
        // 6) Enter name and email address
        await page.locator(this.locatorSingupName).fill(name);
        await page.locator(this.locatorSingupEmail).fill(this.generatedEmail);
        // 7) Click 'Signup' button
        await page.locator(this.locatorSingupButton).click();
        // 8) Verify 'ENTER ACCOUNT INFORMATION' is visible
        await expect(page.getByRole('heading', { name: /Enter Account Information/i })).toBeVisible();
        // 9, 10, 11, 12) Enter les informations de la page Signup
        await page.locator(this.locatorGender1).click();
        await page.locator(this.locatorPassword).fill('Azerty123');
        await page.locator(this.locatorDays).selectOption('10');
        await page.locator(this.locatorMonths).selectOption('May');
        await page.locator(this.locatorYears).selectOption('1995'); 
        await page.locator(this.locatorNewsletter).click();
        await page.locator(this.locatorOptin).click();
        await page.locator(this.locatorFirstName).fill(name);
        await page.locator(this.locatorLastName).fill('SADKI');
        await page.locator(this.locatorAddress).fill('3 BD des Lilas');
        await page.locator(this.locatorCountry).selectOption('Canada'); 
        await page.locator(this.locatorState).fill('Quebec');
        await page.locator(this.locatorCity).fill('Montreal');
        await page.locator(this.locatorZipcode).fill('H2R 1A7');
        await page.locator(this.locatorMobile).fill('514-555-5555');
        // 13) Click 'Create Account button
        await page.locator(this.locatorCreateAccountBtn).click();
        // 14) Verify 'ACCOUNT CREATED!' is visible
        await expect(page.getByRole('heading', { name: /Account Created!/i })).toBeVisible();
        // 15) Click 'Continue' button
        await page.locator(this.locatorContinueBtn).click();
        // 16) Verify 'Logged in as username' is visible
        await expect(page.getByText(/logged in as/i)).toContainText(name);
        //17) Click 'Delete Account' button
        await page.locator(this.locatorDeleteAccountBtn).click();
        // 18) Verify 'ACCOUNT DELETED!' is visible and click 'Continue' button
        await expect(page.getByRole('heading', { name: /Account Deleted!/i })).toBeVisible();
        await page.locator(this.locatorContinueBtn).click();
    }  

    async CreateAcountAndLogout(page) {
        const name = this.RandomAlpha(12);
        // 4) Click on 'Signup / Login'
        await page.locator(this.locatorSignUpLogin).click();
        // 5) Verify 'New User Signup!' is visible
        await expect(page.getByRole('heading', { name: /new user signup!/i })).toBeVisible();
        // 6) Enter name and email address
        await page.locator(this.locatorSingupName).fill(name);
        await page.locator(this.locatorSingupEmail).fill(this.generatedEmail);
        // 7) Click 'Signup' button
        await page.locator(this.locatorSingupButton).click();
        // 8) Verify 'ENTER ACCOUNT INFORMATION' is visible
        await expect(page.getByRole('heading', { name: /Enter Account Information/i })).toBeVisible();
        // 9, 10, 11, 12) Enter les informations de la page Signup
        await page.locator(this.locatorGender1).click();
        await page.locator(this.locatorPassword).fill('Azerty123');
        await page.locator(this.locatorDays).selectOption('10');
        await page.locator(this.locatorMonths).selectOption('May');
        await page.locator(this.locatorYears).selectOption('1995'); 
        await page.locator(this.locatorNewsletter).click();
        await page.locator(this.locatorOptin).click();
        await page.locator(this.locatorFirstName).fill(name);
        await page.locator(this.locatorLastName).fill('SADKI');
        await page.locator(this.locatorAddress).fill('3 BD des Lilas');
        await page.locator(this.locatorCountry).selectOption('Canada'); 
        await page.locator(this.locatorState).fill('Quebec');
        await page.locator(this.locatorCity).fill('Montreal');
        await page.locator(this.locatorZipcode).fill('H2R 1A7');
        await page.locator(this.locatorMobile).fill('514-555-5555');
        // 13) Click 'Create Account button
        await page.locator(this.locatorCreateAccountBtn).click();
        // 14) Verify 'ACCOUNT CREATED!' is visible
        await expect(page.getByRole('heading', { name: /Account Created!/i })).toBeVisible();
        // 15) Click 'Continue' button
        await page.locator(this.locatorContinueBtn).click();
        // 16) Verify 'Logged in as username' is visible
        await expect(page.getByText(/logged in as/i)).toContainText(name);
        //17) Click 'Logout' button
        await page.locator(this.locatorLogoutBtn).click();
    }  

    async Login(page) {
        const name = this.RandomAlpha(12);
        // 4) Click on 'Signup / Login'
        await page.locator(this.locatorSignUpLogin).click();
        await page.locator(this.locatorLoginEmail).fill(this.generatedEmail);
        await page.locator(this.locatorLoginPassword).fill('Azerty123');
        await page.locator(this.locatorLoginBtn).click();
    }

    async DeleteAccount(page) {
        await page.locator(this.locatorDeleteAccountBtn).click();
        // 18) Verify 'ACCOUNT DELETED!' is visible and click 'Continue' button
        await expect(page.getByRole('heading', { name: /Account Deleted!/i })).toBeVisible();
        await page.locator(this.locatorContinueBtn).click();
    }

    async LoginWithError(page) {
        const name = this.RandomAlpha(12);
        // 4) Click on 'Signup / Login'
        await page.locator(this.locatorSignUpLogin).click();
        await page.locator(this.locatorLoginEmail).fill(this.generatedEmail);
        await page.locator(this.locatorLoginPassword).fill('Azerty1234');
        await page.locator(this.locatorLoginBtn).click();
        await expect(page.getByText(/Your email or password is incorrect!/i)).toBeVisible();
    }
}
    module.exports = {Tools};