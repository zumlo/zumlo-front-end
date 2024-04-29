import { TestBed } from '@angular/core/testing';

import { ZIndexDbService } from './z-index-db.service';

describe('ZIndexDbService', () => {
  let service: ZIndexDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZIndexDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
