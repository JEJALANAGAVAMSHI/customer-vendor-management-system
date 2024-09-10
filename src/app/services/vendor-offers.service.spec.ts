import { TestBed } from '@angular/core/testing';

import { VendorOffersService } from './vendor-offers.service';

describe('VendorOffersService', () => {
  let service: VendorOffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorOffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
