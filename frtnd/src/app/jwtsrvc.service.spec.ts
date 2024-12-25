import { TestBed } from '@angular/core/testing';

import { JwtsrvcService } from './jwtsrvc.service';

describe('JwtsrvcService', () => {
  let service: JwtsrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtsrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
