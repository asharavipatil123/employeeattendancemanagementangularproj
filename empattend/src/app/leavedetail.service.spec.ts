import { TestBed } from '@angular/core/testing';

import { leavedetailService } from './leavedetail.service';

describe('LeavedetailService', () => {
  let service: leavedetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(leavedetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
