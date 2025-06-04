import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class ResultPage extends BasePage {
  readonly materialInfo: Locator;
  readonly countertopType: Locator;
  readonly optionsList: Locator;
  readonly totalPrice: Locator;

  constructor(page: Page) {
    super(page);
    this.materialInfo = page.locator('h4:has-text("Общие параметры") + table.table tbody tr:nth-child(2) td:nth-child(3)');
    this.countertopType = page.locator('h4:has-text("Параметры столешницы 1") + table.table tbody tr:nth-child(2) td:nth-child(3)');
    this.optionsList = page.locator('h4:has-text("Параметры столешницы 1") + table.table tbody tr:nth-child(6) td:nth-child(3)');
    this.totalPrice = page.locator('h3:has-text("Итоговая стоимость заказа") + table.table tbody tr:nth-child(6) td:nth-child(5)');
  }

  async verifyMaterial(expected: string) {
    await expect(this.materialInfo).toContainText(expected);
  }

  async verifyCountertopType(expected: string) {
    await expect(this.countertopType).toContainText(expected);
  }

  async verifyOptions(expected: string) {
    await expect(this.optionsList).toContainText(expected);
  }

  async verifyTotalPrice(expectedTextLocator: Locator) {
    const expectedText = await expectedTextLocator.textContent();
        if (expectedText !== null) {
            const formattedExpectedText = expectedText.replace(/\s+/g, '').replace('₽', '').concat('.00 ₽');
            await expect(this.totalPrice).toHaveText(formattedExpectedText);
          } else {
            throw new Error(`Элемент не содержит текст: ожидалось '${expectedText}'`);
          }
  }
}
