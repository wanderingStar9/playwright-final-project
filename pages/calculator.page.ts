import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class CalculatorPage extends BasePage{
  // Локаторы
  private countertopSwitch: Locator;
  private uShapedButton: Locator;
  private thicknessSelect: Locator;
  private dropdownListThicknessSelector: Locator;
  private plinthToggle: Locator;
  private addIslandButton: Locator;
  private waterDrainCheckbox: Locator;
  private colorSelect: Locator;
  private calculateButton: Locator;

  constructor(page: Page) {
    super(page);
    this.countertopSwitch = page.getByTestId('hide-countertop');
    this.uShapedButton = page.getByTestId('countertop-type-u');
    this.thicknessSelect = page.locator('div[data-testid=select-thickness] label:has-text("Толщина") + button');
    this.dropdownListThicknessSelector = page.locator('div[data-testid=select-thickness] div button');
    this.plinthToggle = page.locator('button[data-testid=top-button]:nth-child(3)');
    this.addIslandButton = page.locator('[data-testid="product-item"]').filter({ hasText: 'Остров' });
    this.waterDrainCheckbox = page.locator('[data-testid="options-item"]').filter({ hasText: 'Проточки для стока воды' });
    this.colorSelect = page.locator('[data-testid="stone-block"]').filter({ hasText: 'N-103 Gray Onix' });
    this.calculateButton = page.getByTestId('calc-button');
  }

  async hideCountertopSwitch() {
    await this.countertopSwitch.click();
  }

  async selectUshaped() {
    await this.uShapedButton.click();
  }

  async setThickness() {
    await this.thicknessSelect.click();
  }

  async chooseDropdownListThicknessSelector() {
        await this.dropdownListThicknessSelector.click();
    }

  async togglePlinth() {
    await this.plinthToggle.click();
  }

  async addIsland() {
    await this.addIslandButton.click();
  }

  async enableWaterDrain() {
    await this.waterDrainCheckbox.click();
  }

  async selectColor() {
    await this.colorSelect.click();
  }

  async calculate() {
    await this.calculateButton.click();
  }
}
