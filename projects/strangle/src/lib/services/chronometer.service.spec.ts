import { TestBed } from '@angular/core/testing';

import { ChronometerService } from './chronometer.service';

describe('ChronometerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChronometerService = TestBed.get(ChronometerService);
    expect(service).toBeTruthy();
  });
});
