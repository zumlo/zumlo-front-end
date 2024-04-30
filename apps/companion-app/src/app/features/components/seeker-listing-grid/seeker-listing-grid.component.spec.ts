import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeekerListingGridComponent } from './seeker-listing-grid.component';

describe('SeekerListingGridComponent', () => {
  let component: SeekerListingGridComponent;
  let fixture: ComponentFixture<SeekerListingGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeekerListingGridComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SeekerListingGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
