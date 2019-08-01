import { TestBed } from '@angular/core/testing';

import { DocsService2Service } from './docs-service2.service';

describe('DocsService2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocsService2Service = TestBed.get(DocsService2Service);
    expect(service).toBeTruthy();
  });
});
