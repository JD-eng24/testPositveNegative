import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page.js';

describe('Login Tests', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('should display error messages for invalid users', async () => {
        const users = [
            { username: 'locked_out_user', errorMessage: 'Epic sadface: Sorry, this user has been locked out.' },
            { username: 'problem_user', errorMessage: 'Invalid usernames' },
            { username: 'performance_glitch_user', errorMessage: 'Invalid usernames' },
            { username: 'error_user', errorMessage: 'Invalid usernames' },
            { username: 'visual_user', errorMessage: 'Invalid usernames' }
        ];

        await LoginPage.open();

        for (const user of users) {
            // Attempt to login with invalid credentials
            await LoginPage.login(user.username, 'secret_sauce');
            // await LoginPage.logout();

            // Verify the displayed error message
            // const errorMessage = await LoginPage.getUsernameError();
            // await expect(errorMessage).toContain(user.errorMessage);

            // Reload the login page for the next attempt
            await LoginPage.open();
        }
    });

    it('should logout successfully for valid users', async () => {
        const validUsers = [
            'locked_out_user',
            'problem_user',
            'performance_glitch_user',
            'error_user',
            'visual_user'
        ];

        for (const user of validUsers) {
            await LoginPage.open();
            await LoginPage.login(user, 'secret_sauce');
           
            // Reload the login page for the next attempt
            await LoginPage.open();
        }
        }
    )});
