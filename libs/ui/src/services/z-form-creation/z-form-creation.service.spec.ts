import { TestBed } from '@angular/core/testing';

import { ZFormCreationService } from './z-form-creation.service';

describe('ZFormCreationService', () => {
  let service: ZFormCreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZFormCreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
