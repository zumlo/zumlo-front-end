import { TestBed } from '@angular/core/testing';

import { ZToastrService } from './z-toastr.service';

describe('ZToastrService', () => {
  let service: ZToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZToastrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
