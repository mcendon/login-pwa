import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: FormBuilder,
          useFactory: (fn) => ({
            group: () => ({
              get: () => ({
                invalid: false,
                touched: false,
              }),
            }),
            control: () => {},
          }),
        },
        {
          provide: AuthService,
          useFactory: (fn) => ({
            login: new Promise<void>((resolve) => {
              resolve();
            }),
          }),
        },
        {
          provide: Router,
          useFactory: (fn) => ({
            navigate: new Promise<void>((resolve) => {
              resolve();
            }),
          }),
        },
      ],
      declarations: [LoginFormComponent],
    }).compileComponents();
  });

  it('should create component', () => {
    const fixture = TestBed.createComponent(LoginFormComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should contains a form tag', () => {
    const fixture = TestBed.createComponent(LoginFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('form')).toBeDefined();
  });

  it('should contains an email input', () => {
    const fixture = TestBed.createComponent(LoginFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("input[type='text']")).toBeDefined();
  });

  it('should contains a password input', () => {
    const fixture = TestBed.createComponent(LoginFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("input[type='password']")).toBeDefined();
  });

  it('should contains a submit button', () => {
    const fixture = TestBed.createComponent(LoginFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("button[type='submit']")).toBeDefined();
  });
});
