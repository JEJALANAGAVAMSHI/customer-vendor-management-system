import { TestBed } from '@angular/core/testing';

import { VendorGetBusinessesService } from './vendor-get-businesses.service';

describe('VendorGetBusinessesService', () => {
  let service: VendorGetBusinessesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorGetBusinessesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
