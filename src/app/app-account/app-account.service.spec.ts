import { TestBed } from '@angular/core/testing';

import { AppAccountService } from './app-account.service';

describe('AppAccountService', () => {
  let service: AppAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
