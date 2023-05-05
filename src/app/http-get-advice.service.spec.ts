import { TestBed } from '@angular/core/testing';

import { HttpGetAdviceService } from './http-get-advice.service';

describe('HttpGetAdviceService', () => {
  let service: HttpGetAdviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpGetAdviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
