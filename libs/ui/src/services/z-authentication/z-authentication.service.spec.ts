import { TestBed } from '@angular/core/testing';

import { ZAuthenticationService } from './z-authentication.service';

describe('ZAuthenticationService', () => {
  let service: ZAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
