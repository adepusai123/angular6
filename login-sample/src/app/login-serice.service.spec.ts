import { TestBed } from '@angular/core/testing';

import { LoginSericeService } from './login-serice.service';

describe('LoginSericeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginSericeService = TestBed.get(LoginSericeService);
    expect(service).toBeTruthy();
  });
});
