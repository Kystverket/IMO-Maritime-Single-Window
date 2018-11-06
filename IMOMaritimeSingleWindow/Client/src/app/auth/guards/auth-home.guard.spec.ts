import { async, inject, TestBed } from '@angular/core/testing';

import { AuthHomeGuard } from './auth-home.guard';

describe('AuthHomeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthHomeGuard]
    });
  });

  it('should ...', inject([AuthHomeGuard], (guard: AuthHomeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
