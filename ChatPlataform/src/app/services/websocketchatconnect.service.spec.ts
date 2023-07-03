import { TestBed } from '@angular/core/testing';

import { WebsocketchatconnectService } from './websocketchatconnect.service';

describe('WebsocketchatconnectService', () => {
  let service: WebsocketchatconnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsocketchatconnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
