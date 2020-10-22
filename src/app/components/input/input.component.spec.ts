import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputComponent],
    }).compileComponents();
  });

  it('should create component', () => {
    const fixture = TestBed.createComponent(InputComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render', () => {
    const fixture = TestBed.createComponent(InputComponent);
    const app = fixture.componentInstance;
    app.type = 'text';
    app.placeholder = 'Custom Input';
    app.isInvalid = false;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('input');
    expect(button.attributes.getNamedItem('type').value).toEqual('text');
    expect(button.attributes.getNamedItem('placeholder').value).toEqual(
      'Custom Input'
    );
  });

  it('should render invalid state', () => {
    const fixture = TestBed.createComponent(InputComponent);
    const app = fixture.componentInstance;
    app.type = 'text';
    app.placeholder = 'Custom Input';
    app.isInvalid = true;
    app.invalidText = 'This input is invalid';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('input');
    const small = compiled.querySelector('small');
    expect(button.attributes.getNamedItem('type').value).toEqual('text');
    expect(button.attributes.getNamedItem('placeholder').value).toEqual(
      'Custom Input'
    );
    expect(small).toBeDefined();
    expect(small.textContent).toContain('This input is invalid');
  });
});
