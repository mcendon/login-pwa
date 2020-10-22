import { AppPage } from './app.po';
import { browser, by, element, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should fill email input', () => {
    page.navigateTo();
    expect(page.fillEmailInput()).toEqual('user1@test.com');
  });

  it('should fill password input', () => {
    page.navigateTo();
    expect(page.fillPasswordInput()).toEqual('T3stuser1$');
  });

  it('should validate form', () => {
    page.navigateTo();
    page.fillInvalidEmailInput();
    page.fillInvalidPasswordInput();
    page.submitForm();
    const errorTexts = element.all(by.css('small.text-danger'));
    expect(errorTexts.count()).toEqual(2);
    expect(errorTexts.get(0).getText()).toContain(
      'Enter a valid email address (mail@example.com)'
    );
    expect(errorTexts.get(1).getText()).toContain(
      'Enter a valid password (6 characters minimum)'
    );
  });

  it('should login success', async () => {
    page.navigateTo();
    page.fillEmailInput();
    page.fillPasswordInput();
    await page.submitForm();
    browser.waitForAngularEnabled(false);
    await browser.sleep(3000);
    expect(browser.getCurrentUrl()).toContain('/welcome');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
