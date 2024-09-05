import { TestBed } from '@angular/core/testing';

import { RegisterVendorService } from './register-vendor.service';

describe('RegisterVendorService', () => {
  let service: RegisterVendorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterVendorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
