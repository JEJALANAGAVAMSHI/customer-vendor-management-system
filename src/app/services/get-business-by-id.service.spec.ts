import { TestBed } from '@angular/core/testing';

import { GetBusinessByIdService } from './get-business-by-id.service';

describe('GetBusinessByIdService', () => {
  let service: GetBusinessByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetBusinessByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
