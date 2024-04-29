import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZDialogComponent } from './z-dialog.component';

describe('ZDialogComponent', () => {
  let component: ZDialogComponent;
  let fixture: ComponentFixture<ZDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
