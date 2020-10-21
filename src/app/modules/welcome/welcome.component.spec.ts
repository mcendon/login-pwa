import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: AuthService,
          useFactory: (fn) => ({
            login: new Promise<void>((resolve) => {
              resolve();
            }),
            getLastSignInTime: () => new Date().getTime(),
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
      declarations: [WelcomeComponent],
    }).compileComponents();
  });

  it('should create component', () => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should contains a welcome message', () => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome');
    expect(compiled.querySelector('small').textContent).toContain(
      'The last time you accessed was'
    );
  });

  it('should contains an app counter element', () => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-counter')).toBeDefined();
  });

  it('should contains an app logout button', () => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-logout')).toBeDefined();
  });
});
