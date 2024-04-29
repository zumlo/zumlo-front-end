import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZTextareaComponent } from './z-textarea.component';

describe('TextareaComponent', () => {
  let component: ZTextareaComponent;
  let fixture: ComponentFixture<ZTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZTextareaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
