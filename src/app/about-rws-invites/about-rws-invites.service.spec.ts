import { TestBed } from '@angular/core/testing';

import { AboutRwsInvitesService } from './about-rws-invites.service';

describe('AboutRwsInvitesService', () => {
  let service: AboutRwsInvitesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutRwsInvitesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
