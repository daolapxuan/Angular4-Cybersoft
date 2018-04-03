import { TestBed, inject } from '@angular/core/testing';

import { ProtectService } from './protect.guard';

describe('ProtectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProtectService]
    });
  });

  it('should be created', inject([ProtectService], (service: ProtectService) => {
    expect(service).toBeTruthy();
  }));
});
