import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureWrapperComponent } from './feature-wrapper.component';

describe('FeatureWrapperComponent', () => {
  let component: FeatureWrapperComponent;
  let fixture: ComponentFixture<FeatureWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
