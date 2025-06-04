import { test, expect } from '@playwright/test';
import { AuthPage } from '../pages/auth.page';
import { CalculatorPage } from '../pages/calculator.page';

test.describe('Проверка калькулятора', () => {
  test.beforeEach(async ({ page }) => {
    const authPage = new AuthPage(page);
    await authPage.goto();
    await authPage.login('tester@inzhenerka.tech', 'LetsTest!');
  });

  test('Скрытие столешницы', async ({ page }) => {
    const calculatorPage = new CalculatorPage(page);
    
    await test.step('Активация переключателя', async () => {
      await calculatorPage.hideCountertopSwitch();
    });

    await test.step('Проверка скрытия элемента', async () => {
      await expect(page.getByTestId('show-main')).toBeVisible();
    });
  });

  test('Выбор П-образной столешницы', async ({ page }) => {
    const calculatorPage = new CalculatorPage(page);
    
    await test.step('Переключение на П-образную форму', async () => {
      await calculatorPage.selectUshaped();
    });

    await test.step('Проверка отображения', async () => {
      await expect(page.locator('div[data-testid=order-list] h4:nth-of-type(1)')).toContainText('П-образная');
    });
  });
});
