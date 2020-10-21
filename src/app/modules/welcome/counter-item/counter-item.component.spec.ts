import { TestBed } from '@angular/core/testing';
import { CounterItemComponent } from './counter-item.component';
import { ZerofillPipe } from '../../shared/pipes/zerofill.pipe';

describe('CounterItemComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ZerofillPipe],
      declarations: [CounterItemComponent, ZerofillPipe],
    }).compileComponents();
  });

  it('should create component', () => {
    const fixture = TestBed.createComponent(CounterItemComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render a value', () => {
    const fixture = TestBed.createComponent(CounterItemComponent);
    const app = fixture.componentInstance;
    app.label = 'Minutes';
    app.value = '52';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('52');
  });

  it('should render a label', () => {
    const fixture = TestBed.createComponent(CounterItemComponent);
    const app = fixture.componentInstance;
    app.label = 'Days';
    app.value = '01';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('small').textContent).toContain('Days');
  });
});
