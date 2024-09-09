import { TestBed } from '@angular/core/testing';

import { AddVendorService } from './add-vendor.service';

describe('AddVendorService', () => {
  let service: AddVendorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddVendorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
