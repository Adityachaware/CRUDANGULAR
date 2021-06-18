import { TestBed } from '@angular/core/testing';

import { RestroServiceService } from './restro-service.service';

describe('RestroServiceService', () => {
  let service: RestroServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestroServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
