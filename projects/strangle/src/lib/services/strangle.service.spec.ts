import { TestBed } from '@angular/core/testing';

import { StrangleService } from './strangle.service';

describe('StrangleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StrangleService = TestBed.get(StrangleService);
    expect(service).toBeTruthy();
  });
});
