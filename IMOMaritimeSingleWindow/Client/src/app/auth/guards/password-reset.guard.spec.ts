import { async, inject, TestBed } from '@angular/core/testing';

import { PasswordResetGuard } from './password-reset.guard';

describe('PasswordResetGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasswordResetGuard]
    });
  });

  it('should ...', inject([PasswordResetGuard], (guard: PasswordResetGuard) => {
    expect(guard).toBeTruthy();
  }));
});
