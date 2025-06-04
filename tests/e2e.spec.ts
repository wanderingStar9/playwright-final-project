import { test } from '@playwright/test';
import { AuthPage } from '../pages/auth.page';
import { CalculatorPage } from '../pages/calculator.page';
import { ResultPage } from '../pages/result.page';
import { ProcessingPage } from '../pages/processing.page';

test.describe('E2E Сценарий', () => {
  test('Сборка заказа и проверка расчета', async ({ page, context }) => {
    const authPage = new AuthPage(page);
    const calculatorPage = new CalculatorPage(page);
    const processingPage = new ProcessingPage(page);

    await test.step('Авторизация', async () => {
      await authPage.goto();
      await authPage.login('tester@inzhenerka.tech', 'LetsTest!');
    });

    await test.step('Настройка параметров', async () => {
      await calculatorPage.selectUshaped();
      await calculatorPage.setThickness();
      await calculatorPage.chooseDropdownListThicknessSelector();
      await calculatorPage.togglePlinth();
      await calculatorPage.addIsland();
      await calculatorPage.enableWaterDrain();
      await calculatorPage.selectColor();
    });

    await test.step('Расчет стоимости', async () => {
      await calculatorPage.calculate();
    });

    const [newPage] = await Promise.all([
      context.waitForEvent('page'), // Ожидание открытия новой вкладки
      processingPage.clickOpenCalcReportButton()
    ]);

    await newPage.waitForLoadState(); // Дожидаемся загрузки страницы

    const resultPage = new ResultPage(newPage);

    await test.step('Проверка результатов', async () => {
      await resultPage.verifyMaterial('acryl:Neomarm:N-103 Gray Onix');
      await resultPage.verifyCountertopType('П-образная');
      await resultPage.verifyOptions('Проточки для стока воды');
      await resultPage.verifyTotalPrice(processingPage.finalPriceField);
    });
  });
});
