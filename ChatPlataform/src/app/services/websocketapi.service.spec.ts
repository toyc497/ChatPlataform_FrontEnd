import { TestBed } from '@angular/core/testing';

import { WebsocketapiService } from './websocketapi.service';

describe('WebsocketapiService', () => {
  let service: WebsocketapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsocketapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
