import { TestBed, async, inject } from '@angular/core/testing';

import { LoginAuthGuard } from './login-auth.guard';

describe('LoginAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginAuthGuard]
    });
  });

  it('should ...', inject([LoginAuthGuard], (guard: LoginAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
