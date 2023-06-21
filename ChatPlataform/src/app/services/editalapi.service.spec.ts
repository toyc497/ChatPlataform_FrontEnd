import { TestBed } from '@angular/core/testing';

import { EditalapiService } from './editalapi.service';

describe('EditalapiService', () => {
  let service: EditalapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditalapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
