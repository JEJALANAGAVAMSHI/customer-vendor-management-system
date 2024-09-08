import { TestBed } from '@angular/core/testing';

import { ViewVendorsService } from './view-vendors.service';

describe('ViewVendorsService', () => {
  let service: ViewVendorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewVendorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
