import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonInnerTrendingCardComponent } from './common-inner-trending-card.component';

describe('CommonInnerTrendingCardComponent', () => {
  let component: CommonInnerTrendingCardComponent;
  let fixture: ComponentFixture<CommonInnerTrendingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonInnerTrendingCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommonInnerTrendingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
