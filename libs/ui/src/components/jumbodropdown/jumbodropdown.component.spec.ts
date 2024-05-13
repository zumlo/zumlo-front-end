import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JumbodropdownComponent } from './jumbodropdown.component';

describe('JumbodropdownComponent', () => {
  let component: JumbodropdownComponent;
  let fixture: ComponentFixture<JumbodropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JumbodropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JumbodropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
