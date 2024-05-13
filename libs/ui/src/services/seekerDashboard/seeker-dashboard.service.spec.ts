import { TestBed } from '@angular/core/testing';

import { SeekerDashboardService } from './seeker-dashboard.service';

describe('SeekerDashboardService', () => {
  let service: SeekerDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeekerDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
