import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeekersCardComponent } from './seekers-card.component';

describe('SeekersCardComponent', () => {
  let component: SeekersCardComponent;
  let fixture: ComponentFixture<SeekersCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeekersCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SeekersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
