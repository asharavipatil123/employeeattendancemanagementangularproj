import { TestBed } from '@angular/core/testing';

import { attdetailService } from './attdetail.service';

describe('AttdetailService', () => {
  let service: attdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(attdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
