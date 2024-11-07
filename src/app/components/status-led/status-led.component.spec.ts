import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusLedComponent } from './status-led.component';

describe('StatusLedComponent', () => {
  let component: StatusLedComponent;
  let fixture: ComponentFixture<StatusLedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusLedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatusLedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
