import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZInputTextComponent } from './z-input-text.component';

describe('ZInputTextComponent', () => {
  let component: ZInputTextComponent;
  let fixture: ComponentFixture<ZInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZInputTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
