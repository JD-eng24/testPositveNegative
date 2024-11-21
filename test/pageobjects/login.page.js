import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('input[id="login-button"]');
    }

    get errorMessage() {
        return $('#error-message');  // Replace with actual selector for the error message
    }

    get burger() {
        return $('#react-burger-menu-btn');
     }    
    
    get logoutButton() {
        return $('a[id="logout_sidebar_link"]');
     }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    
     async logout() {
       await this.burger.waitForDisplayed();
        await this.burger.click();
        await this.logoutButton.waitForDisplayed();
        await this.logoutButton.click();
        await this.btnSubmit.waitForDisplayed();
    }
    
      async getUsernameError() {
        //Wait for the error message to appear, if necessary
         await this.errorMessage.waitForDisplayed();
         return this.errorMessage.getText();
     }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}



export default new LoginPage();
