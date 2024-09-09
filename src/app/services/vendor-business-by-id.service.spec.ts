import { TestBed } from '@angular/core/testing';

import { VendorBusinessByIdService } from './vendor-business-by-id.service';

describe('VendorBusinessByIdService', () => {
  let service: VendorBusinessByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorBusinessByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
