import { TestBed } from '@angular/core/testing';

import { ChatmessagesrequestService } from './chatmessagesrequest.service';

describe('ChatmessagesrequestService', () => {
  let service: ChatmessagesrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatmessagesrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
