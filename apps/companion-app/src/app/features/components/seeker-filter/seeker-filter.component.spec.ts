import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeekerFilterComponent } from './seeker-filter.component';

describe('SeekerFilterComponent', () => {
  let component: SeekerFilterComponent;
  let fixture: ComponentFixture<SeekerFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeekerFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SeekerFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
