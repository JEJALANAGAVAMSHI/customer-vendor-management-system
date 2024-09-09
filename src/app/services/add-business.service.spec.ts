import { TestBed } from '@angular/core/testing';

import { AddBusinessService } from './add-business.service';

describe('AddBusinessService', () => {
  let service: AddBusinessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddBusinessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
