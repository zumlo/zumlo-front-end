import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZForgetComponent } from './z-forget.component';

describe('ZForgetComponent', () => {
  let component: ZForgetComponent;
  let fixture: ComponentFixture<ZForgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZForgetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZForgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
