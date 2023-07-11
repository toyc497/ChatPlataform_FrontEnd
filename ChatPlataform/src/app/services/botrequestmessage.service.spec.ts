import { TestBed } from '@angular/core/testing';

import { BotrequestmessageService } from './botrequestmessage.service';

describe('BotrequestmessageService', () => {
  let service: BotrequestmessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BotrequestmessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
