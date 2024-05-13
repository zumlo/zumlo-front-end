import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GridCommonCardComponent } from './grid-common-card.component';

describe('GridCommonCardComponent', () => {
  let component: GridCommonCardComponent;
  let fixture: ComponentFixture<GridCommonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridCommonCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GridCommonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
