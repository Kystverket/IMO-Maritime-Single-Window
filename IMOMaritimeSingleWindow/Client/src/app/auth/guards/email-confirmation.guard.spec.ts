import { async, inject, TestBed } from '@angular/core/testing';

import { EmailConfirmationGuard } from './email-confirmation.guard';

describe('EmailConfirmationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailConfirmationGuard]
    });
  });

  it('should ...', inject([EmailConfirmationGuard], (guard: EmailConfirmationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
