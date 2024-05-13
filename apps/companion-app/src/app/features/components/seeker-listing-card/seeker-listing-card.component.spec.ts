import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeekerListingCardComponent } from './seeker-listing-card.component';

describe('SeekerListingCardComponent', () => {
  let component: SeekerListingCardComponent;
  let fixture: ComponentFixture<SeekerListingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeekerListingCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SeekerListingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
