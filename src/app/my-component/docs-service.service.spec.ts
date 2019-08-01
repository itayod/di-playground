import { TestBed } from '@angular/core/testing';

import { DocsServiceService } from './docs-service.service';

describe('DocsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocsServiceService = TestBed.get(DocsServiceService);
    expect(service).toBeTruthy();
  });
});
