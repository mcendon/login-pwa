import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  fillEmailInput(): Promise<string> {
    const el = element(by.css('input[type="text"]'));
    el.sendKeys('user1@test.com');
    return el.getAttribute('value') as Promise<string>;
  }

  fillPasswordInput(): Promise<string> {
    const el = element(by.css('input[type="password"]'));
    el.sendKeys('T3stuser1$');
    return el.getAttribute('value') as Promise<string>;
  }

  fillInvalidEmailInput(): Promise<string> {
    const el = element(by.css('input[type="text"]'));
    el.sendKeys('user1241');
    return el.getAttribute('value') as Promise<string>;
  }

  fillInvalidPasswordInput(): Promise<string> {
    const el = element(by.css('input[type="password"]'));
    el.sendKeys('1');
    return el.getAttribute('value') as Promise<string>;
  }

  submitForm(): Promise<void> {
    const el = element(by.css('button[type="submit"]'));
    return el.click() as Promise<void>;
  }
}
