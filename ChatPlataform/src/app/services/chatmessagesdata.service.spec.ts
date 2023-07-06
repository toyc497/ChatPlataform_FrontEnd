import { TestBed } from '@angular/core/testing';

import { ChatmessagesdataService } from './chatmessagesdata.service';

describe('ChatmessagesdataService', () => {
  let service: ChatmessagesdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatmessagesdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
