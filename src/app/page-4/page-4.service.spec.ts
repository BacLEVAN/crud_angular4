import { TestBed, inject } from '@angular/core/testing';

import { Page4Service } from './page-4.service';

describe('Page4Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Page4Service]
    });
  });

  it('should be created', inject([Page4Service], (service: Page4Service) => {
    expect(service).toBeTruthy();
  }));
});
