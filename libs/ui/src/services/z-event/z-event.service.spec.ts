import { TestBed } from '@angular/core/testing';

import { ZEventService } from './z-event.service';

describe('ZEventService', () => {
  let service: ZEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
