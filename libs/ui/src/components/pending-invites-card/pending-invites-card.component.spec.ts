import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PendingInvitesCardComponent } from './pending-invites-card.component';

describe('PendingInvitesCardComponent', () => {
  let component: PendingInvitesCardComponent;
  let fixture: ComponentFixture<PendingInvitesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingInvitesCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PendingInvitesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
