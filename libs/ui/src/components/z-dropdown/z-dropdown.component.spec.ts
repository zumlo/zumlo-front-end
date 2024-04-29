import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZDropdownComponent } from './z-dropdown.component';

describe('DropdownComponent', () => {
  let component: ZDropdownComponent;
  let fixture: ComponentFixture<ZDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZDropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
