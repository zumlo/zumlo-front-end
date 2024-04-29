import { TestBed } from '@angular/core/testing';

import { ZLoaderService } from './z-loader.service';

describe('ZLoaderService', () => {
  let service: ZLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
