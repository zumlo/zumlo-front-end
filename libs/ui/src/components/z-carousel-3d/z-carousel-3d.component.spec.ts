import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZCarousel3dComponent } from './z-carousel-3d.component';

describe('ZCarousel3dComponent', () => {
  let component: ZCarousel3dComponent;
  let fixture: ComponentFixture<ZCarousel3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZCarousel3dComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZCarousel3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
