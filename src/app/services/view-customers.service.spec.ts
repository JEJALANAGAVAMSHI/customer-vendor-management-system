import { TestBed } from '@angular/core/testing';

import { ViewCustomersService } from './view-customers.service';

describe('ViewCustomersService', () => {
  let service: ViewCustomersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewCustomersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
