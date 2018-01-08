import { TestBed, inject } from '@angular/core/testing';

import { Page3Service } from './page-3.service';

describe('Page3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Page3Service]
    });
  });

  it('should be created', inject([Page3Service], (service: Page3Service) => {
    expect(service).toBeTruthy();
  }));
});
