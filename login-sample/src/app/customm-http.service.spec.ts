import { TestBed } from '@angular/core/testing';

import { CustommHttpService } from './customm-http.service';

describe('CustommHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustommHttpService = TestBed.get(CustommHttpService);
    expect(service).toBeTruthy();
  });
});
