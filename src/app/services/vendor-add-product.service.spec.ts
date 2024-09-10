import { TestBed } from '@angular/core/testing';

import { VendorAddProductService } from './vendor-add-product.service';

describe('VendorAddProductService', () => {
  let service: VendorAddProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorAddProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
