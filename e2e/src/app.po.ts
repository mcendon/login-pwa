import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  fillEmailInput(): Promise<string> {
    let el = element(by.css("input[type='text']"));
    el.sendKeys('user1@test.com');
    return el.getAttribute('value') as Promise<string>;
  }

  fillPasswordInput(): Promise<string> {
    let el = element(by.css("input[type='password']"));
    el.sendKeys('123456');
    return el.getAttribute('value') as Promise<string>;
  }

  fillInvalidEmailInput(): Promise<string> {
    let el = element(by.css("input[type='text']"));
    el.sendKeys('user1241');
    return el.getAttribute('value') as Promise<string>;
  }

  fillInvalidPasswordInput(): Promise<string> {
    let el = element(by.css("input[type='password']"));
    el.sendKeys('1');
    return el.getAttribute('value') as Promise<string>;
  }

  submitForm(): Promise<void> {
    let el = element(by.css("button[type='submit']"));
    return el.click() as Promise<void>;
  }
}
