import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZSimpleButtonComponent } from './z-simple-button.component';

describe('ZSimpleButtonComponent', () => {
  let component: ZSimpleButtonComponent;
  let fixture: ComponentFixture<ZSimpleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZSimpleButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZSimpleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
