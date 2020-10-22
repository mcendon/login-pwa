import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
  });

  it('should create component', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const app = fixture.componentInstance;
    app.type = 'submit';
    app.text = 'My Button';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('button');
    expect(button.textContent).toContain('My Button');
    expect(button.attributes.getNamedItem('type').value).toEqual('submit');
  });
});
