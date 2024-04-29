import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZTableComponent } from './z-table.component';

describe('ZTableComponent', () => {
  let component: ZTableComponent;
  let fixture: ComponentFixture<ZTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
