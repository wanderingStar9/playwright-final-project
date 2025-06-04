import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class AuthPage extends BasePage {
  private emailInput: Locator;
  private passwordInput: Locator;
  private submitButton: Locator;
  private userName: Locator;

  constructor(page: Page) {
    super(page);
    this.emailInput = page.locator('input[name="login"]');
    this.passwordInput = page.locator('input[type="password"]');
    this.submitButton = page.locator('button:has-text("Войти")');
    this.userName = page.locator('h2:has-text("Tester")');
  }

 async fillLogin(login: string) {
        await this.emailInput.fill(login);
    }

    async fillPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickSubmit() {
        await this.submitButton.click();
    }

    async login(login: string, password: string) {
        await this.fillLogin(login);
        await this.fillPassword(password);
        await this.clickSubmit();
    }

    async checkUserName(checkedName: string) {
        await expect(this.userName).toHaveText(checkedName);
    }
}
