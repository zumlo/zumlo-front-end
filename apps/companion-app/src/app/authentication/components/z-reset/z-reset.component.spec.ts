import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZResetComponent } from './z-reset.component';

describe('ZResetComponent', () => {
  let component: ZResetComponent;
  let fixture: ComponentFixture<ZResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZResetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
