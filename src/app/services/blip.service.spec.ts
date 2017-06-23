import { TestBed, inject } from '@angular/core/testing';

import { BlipService } from './blip.service';

describe('BlipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlipService]
    });
  });

  it('should be created', inject([BlipService], (service: BlipService) => {
    expect(service).toBeTruthy();
  }));
});
