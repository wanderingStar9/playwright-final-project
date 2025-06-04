import { test, expect } from '@playwright/test';
import { AuthPage } from '../pages/auth.page';

test.describe('Авторизация', () => {
  test('Успешный вход с валидными данными', async ({ page }) => {
    const authPage = new AuthPage(page);

    const email = 'tester@inzhenerka.tech';
    const password = 'LetsTest!';
    
    await test.step('Переход на страницу авторизации', async () => {
      await authPage.goto();
    });

    await test.step('Ввод учетных данных', async () => {
      await authPage.login(email, password);
    });

    await test.step('Проверка заголовка h1 в ЛК', async () => {
      await authPage.checkUserName('Tester');
    });
  });
});
