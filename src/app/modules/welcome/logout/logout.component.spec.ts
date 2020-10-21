import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LogoutComponent } from './logout.component';

describe('LogoutComponent', () => {
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
      declarations: [LogoutComponent],
    }).compileComponents();
  });

  it('should create component', () => {
    const fixture = TestBed.createComponent(LogoutComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should contains logout button element', () => {
    const fixture = TestBed.createComponent(LogoutComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button')).toBeDefined();
  });

  it('should call logout() function on button click', () => {
    const fixture = TestBed.createComponent(LogoutComponent);
    const app = fixture.componentInstance;
    spyOn(app, 'logout').and.callThrough();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    compiled.querySelector('button').click();
    fixture.detectChanges();
    expect(app.logout).toHaveBeenCalled();
  });
});
