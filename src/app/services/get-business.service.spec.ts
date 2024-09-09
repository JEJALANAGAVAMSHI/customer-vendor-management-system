import { TestBed } from '@angular/core/testing';

import { GetBusinessService } from './get-business.service';

describe('GetBusinessService', () => {
  let service: GetBusinessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetBusinessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
