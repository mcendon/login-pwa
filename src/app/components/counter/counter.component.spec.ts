import { TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import * as moment from 'moment';

describe('CounterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
    }).compileComponents();
  });

  it('should create component', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have 4 counter-items', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    const compiled = fixture.nativeElement;
    expect(compiled.getElementsByTagName('app-counter-item').length).toEqual(4);
  });

  it('should render timestamp correctly', async () => {
    const fixture = TestBed.createComponent(CounterComponent);
    const app = fixture.componentInstance;
    app.time = 345515;
    fixture.detectChanges();
    const duration = moment.duration(app.time);
    expect(app.days).toEqual(duration.days());
    expect(app.hours).toEqual(duration.hours());
    expect(app.minutes).toEqual(duration.minutes());
    await new Promise<void>((resolve) =>
      setTimeout(() => {
        resolve();
      }, 4000)
    );
    expect(app.seconds).toBeGreaterThan(duration.seconds());
    app.ngOnDestroy();
  });
});
