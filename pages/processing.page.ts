import { Page, Locator } from 'playwright';
import { BasePage } from './base.page';

export class ProcessingPage extends BasePage {
    private openCalcReportButton: Locator;
    public finalPriceField: Locator;


    constructor(page: Page) {
        super(page);
        this.openCalcReportButton = page.locator('button[data-testid="open-report-button"]');
        this.finalPriceField = page.locator('div[data-testid=price-button] h3');
  
    }

    async clickOpenCalcReportButton() {
        await this.openCalcReportButton.click();
    }

}