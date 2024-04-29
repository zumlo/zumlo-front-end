import { TestBed } from '@angular/core/testing';

import { ZValidationService } from './z-validation.service';

describe('ZValidationService', () => {
  let service: ZValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
