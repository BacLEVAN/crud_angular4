import { TestBed, inject } from '@angular/core/testing';

import { Home2Service } from './home2.service';

describe('Home2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Home2Service]
    });
  });

  it('should be created', inject([Home2Service], (service: Home2Service) => {
    expect(service).toBeTruthy();
  }));
});
