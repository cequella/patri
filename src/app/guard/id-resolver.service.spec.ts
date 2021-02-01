import { TestBed } from '@angular/core/testing';

import { IdResolverService } from './id-resolver.service';

describe('IdResolverService', () => {
  let service: IdResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
