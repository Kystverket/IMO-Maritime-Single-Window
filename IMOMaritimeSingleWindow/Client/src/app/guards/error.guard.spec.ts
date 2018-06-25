import { TestBed, async, inject } from '@angular/core/testing';

import { ErrorGuard } from './error.guard';

describe('ErrorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorGuard]
    });
  });

  it('should ...', inject([ErrorGuard], (guard: ErrorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
