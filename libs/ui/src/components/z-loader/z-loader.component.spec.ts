import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZLoaderComponent } from './z-loader.component';

describe('LoaderComponent', () => {
  let component: ZLoaderComponent;
  let fixture: ComponentFixture<ZLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZLoaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
