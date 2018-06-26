import { TestBed, inject } from '@angular/core/testing';

import { UriQueryService } from './uri-query.service';

describe('UriQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UriQueryService]
    });
  });

  it('should be created', inject([UriQueryService], (service: UriQueryService) => {
    expect(service).toBeTruthy();
  }));
});
