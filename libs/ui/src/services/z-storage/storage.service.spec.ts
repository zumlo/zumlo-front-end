import { TestBed } from '@angular/core/testing';

import { ZStorageService } from './storage.service';

describe('StorageService', () => {
  let service: ZStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
