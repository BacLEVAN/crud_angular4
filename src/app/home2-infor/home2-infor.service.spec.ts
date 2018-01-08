import { TestBed, inject } from '@angular/core/testing';

import { Home2InforService } from './home2-infor.service';

describe('Home2InforService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Home2InforService]
    });
  });

  it('should be created', inject([Home2InforService], (service: Home2InforService) => {
    expect(service).toBeTruthy();
  }));
});
