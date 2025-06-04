# Test info

- Name: E2E Сценарий >> Сборка заказа и проверка расчета
- Location: /Users/mleejee/Desktop/inzhenerkaTech/playwright-final-project/tests/e2e.spec.ts:8:7

# Error details

```
Error: Timed out 10000ms waiting for expect(locator).toContainText(expected)

Locator: locator('h4:has-text("Параметры столешницы 1") + table.table tbody tr:nth-child(6) td:nth-child(3)')
Expected string: "Проточки для стока воды"
Received string: ""
Call log:
  - expect.toContainText with timeout 10000ms
  - waiting for locator('h4:has-text("Параметры столешницы 1") + table.table tbody tr:nth-child(6) td:nth-child(3)')
    13 × locator resolved to <td class="col-2"></td>
       - unexpected value ""

    at ResultPage.verifyOptions (/Users/mleejee/Desktop/inzhenerkaTech/playwright-final-project/pages/result.page.ts:27:36)
    at /Users/mleejee/Desktop/inzhenerkaTech/playwright-final-project/tests/e2e.spec.ts:44:24
    at /Users/mleejee/Desktop/inzhenerkaTech/playwright-final-project/tests/e2e.spec.ts:41:5
```

# Page snapshot

```yaml
- img "Tester"
- heading "Tester" [level=2]
- button "Выйти"
- heading "Калькулятор столешниц" [level=1]
- heading "Основная часть" [level=3]
- button "Прямая"
- button "Г–образная"
- button "П–образная"
- img "toggle"
- text: Скрыть столешницу
- paragraph: Размеры столешницы надо указывать по стенам с каждой стороны, не вырезая глубину на 60. Калькулятор автоматически сам кроит на детали.
- textbox: "300"
- textbox: "60"
- textbox: "150"
- textbox: "150"
- textbox: "60"
- textbox: "60"
- text: Толщина
- button "4 arrow-down-white":
  - text: "4"
  - img "arrow-down-white"
- button "plus-blue":
  - img "plus-blue"
- button "К"
- button "П"
- button "К"
- button "П"
- button "К"
- button "П"
- button "К"
- button "П"
- button "К"
- button "П"
- button "К"
- button "П"
- button "К"
- button "П"
- button "Без мойкиarrow-down-black":
  - text: Без мойки
  - img "arrow-down-black"
- button "Без варочной панелиarrow-down-black":
  - text: Без варочной панели
  - img "arrow-down-black"
- button "Прямая 1 k arrow-down-white ok-white":
  - text: Прямая 1
  - img "k"
  - img "arrow-down-white"
  - img "ok-white"
- button "Стеновая панель plus-blue":
  - text: Стеновая панель
  - img "plus-blue"
- button "Плинтус b ok-green":
  - text: Плинтус
  - img "b"
  - img "ok-green"
- button "plus-blue":
  - img "plus-blue"
- text: Добавить столешницу/подоконник
- heading "Остров" [level=4]
- paragraph: многофункциональный стол в центре кухни и отличный элемент интерьера
- img "ok-white"
- heading "Барная стойка" [level=4]
- paragraph: столешница на опорах для продолжения рабочей области
- img "plus-blue"
- heading "Остров" [level=3]
- img "bar"
- text: Удалить К О К О К О К О
- textbox: "300"
- textbox: "60"
- text: Толщина
- button "2 arrow-down-white":
  - text: "2"
  - img "arrow-down-white"
- text: Высота острова
- textbox: "100"
- button "Без мойкиarrow-down-black":
  - text: Без мойки
  - img "arrow-down-black"
- button "Без варочной панелиarrow-down-black":
  - text: Без варочной панели
  - img "arrow-down-black"
- button "Прямая 1 k arrow-down-white ok-white":
  - text: Прямая 1
  - img "k"
  - img "arrow-down-white"
  - img "ok-white"
- button "Опора ok-green":
  - text: Опора
  - img "ok-green"
- heading "Опции для комфорта и удовольствия" [level=2]
- heading "Вырезы под смеситель/дозатор/розетки" [level=4]
- paragraph: дополнительные отверстия в столешнице
- img "plus-blue"
- heading "Вентиляционные решетки для батареи" [level=4]
- paragraph: сохраняют от конденсата и плесени
- img "plus-blue"
- heading "Проточки для стока воды" [level=4]
- paragraph: устраняют скапливание влаги в районе мойки
- img "plus-blue"
- heading "Подставка под горячее" [level=4]
- paragraph: защищает от перепадов температур
- img "plus-blue"
- heading "Материалы и цвет" [level=2]
- button "Акрил"
- button "Кварц"
- img "all"
- textbox "Поиск"
- img "Grandex"
- text: Grandex
- img "Hanex"
- text: Hanex
- img "Neomarm"
- text: Neomarm
- img "HI-MACS"
- text: HI-MACS
- img "Staron"
- text: Staron N-010 White от 5700₽ за м2 N-101 Crystal Beige от 6800₽ за м2
- img "ok-blue"
- text: N-103 Gray Onix от 6800₽ за м2 N-159 Sanded Grizzle от 6800₽ за м2 N-218 Clay от 6800₽ за м2 N-420 Sanded Grey от 6800₽ за м2 N-421 Sanded Cream от 6800₽ за м2 N-423 Sanded Night от 6800₽ за м2 N-430 Sanded Dust от 6800₽ за м2 N-440 Sahara от 6800₽ за м2 N-510 Mettalic White от 6800₽ за м2 N-539 Earl Grey от 6800₽ за м2 N-610 Milk Snow от 6800₽ за м2 N-612 White Glacier от 6800₽ за м2 N-593 Abstraction от 6800₽ за м2 N-810 Cobble Grey от 6800₽ за м2
- button "left":
  - img "left"
- button "1"
- button "2"
- button "3"
- button "4"
- button "5"
- button "6"
- button "7"
- button "8"
- button "9"
- button "..."
- button "29"
- button "right":
  - img "right"
- heading "Обработчики" [level=1]
- text: Изготовление
- heading "10 дней" [level=4]
- text: ТОП КЛИК Демо версия сервиса
- heading "338 400 ₽" [level=3]
- button "Расчет":
  - heading "Расчет" [level=4]
- button "Создать КП":
  - heading "Создать КП" [level=4]
- heading "П-образная столешница" [level=4]
- list:
  - listitem: 300см х 60см х 60см х 150см х 60см х 150см х 4см
  - listitem: "Материал: Акрил Neomarm N-103 Gray Onix"
  - listitem: Без мойки
  - listitem: Без варочной панели
  - listitem: "Кромка: Прямая 1"
  - listitem: С бортиком
- heading "Остров" [level=4]
- list:
  - listitem: 300см х 60см х 2см
  - listitem: "Высота острова: 100см"
  - listitem: "Кромка: Прямая 1"
  - listitem: Без мойки
  - listitem: Без варочной панели
- textbox "Комментарий к заказу" [disabled]
- button "edit Редактировать":
  - img "edit"
  - heading "Редактировать" [level=4]
- heading "П-образная столешница" [level=4]
- list:
  - listitem: 300см х 60см х 60см х 150см х 60см х 150см х 4см
  - listitem: "Материал: Акрил Neomarm N-103 Gray Onix"
  - listitem: Без мойки
  - listitem: Без варочной панели
  - listitem: "Кромка: Прямая 1"
  - listitem: С бортиком
- heading "Остров" [level=4]
- list:
  - listitem: 300см х 60см х 2см
  - listitem: "Высота острова: 100см"
  - listitem: "Кромка: Прямая 1"
  - listitem: Без мойки
  - listitem: Без варочной панели
- textbox "Комментарий к заказу"
- button "plus-blue":
  - img "plus-blue"
- button "edit Редактировать":
  - img "edit"
  - heading "Редактировать" [level=4]
- text: ТопКлик
- link "Обратиться за помощью":
  - /url: https://t.me/Topklik_help
- img "T"
- link "+7 903 130-54-77":
  - /url: tel:+7 903 130-54-77
- link "info@topklik.online":
  - /url: mailto:info@topklik.online
- separator
- text: © 2023 ТопКлик. Все права защищены
```

# Test source

```ts
   1 | import { Locator, Page, expect } from '@playwright/test';
   2 | import { BasePage } from './base.page';
   3 |
   4 | export class ResultPage extends BasePage {
   5 |   readonly materialInfo: Locator;
   6 |   readonly countertopType: Locator;
   7 |   readonly optionsList: Locator;
   8 |   readonly totalPrice: Locator;
   9 |
  10 |   constructor(page: Page) {
  11 |     super(page);
  12 |     this.materialInfo = page.locator('h4:has-text("Общие параметры") + table.table tbody tr:nth-child(2) td:nth-child(3)');
  13 |     this.countertopType = page.locator('h4:has-text("Параметры столешницы 1") + table.table tbody tr:nth-child(2) td:nth-child(3)');
  14 |     this.optionsList = page.locator('h4:has-text("Параметры столешницы 1") + table.table tbody tr:nth-child(6) td:nth-child(3)');
  15 |     this.totalPrice = page.locator('h3:has-text("Итоговая стоимость заказа") + table.table tbody tr:nth-child(6) td:nth-child(5)');
  16 |   }
  17 |
  18 |   async verifyMaterial(expected: string) {
  19 |     await expect(this.materialInfo).toContainText(expected);
  20 |   }
  21 |
  22 |   async verifyCountertopType(expected: string) {
  23 |     await expect(this.countertopType).toContainText(expected);
  24 |   }
  25 |
  26 |   async verifyOptions(expected: string) {
> 27 |     await expect(this.optionsList).toContainText(expected);
     |                                    ^ Error: Timed out 10000ms waiting for expect(locator).toContainText(expected)
  28 |   }
  29 |
  30 |   async verifyTotalPrice(expectedTextLocator: Locator) {
  31 |     const expectedText = await expectedTextLocator.textContent();
  32 |         if (expectedText !== null) {
  33 |             const formattedExpectedText = expectedText.replace(/\s+/g, '').replace('₽', '').concat('.00 ₽');
  34 |             await expect(this.totalPrice).toHaveText(formattedExpectedText);
  35 |           } else {
  36 |             throw new Error(`Элемент не содержит текст: ожидалось '${expectedText}'`);
  37 |           }
  38 |   }
  39 | }
  40 |
```