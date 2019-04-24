import { TestBed } from '@angular/core/testing';

import { ProfissionaisService } from './profissionais.service';

describe('ProfissionaisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfissionaisService = TestBed.get(ProfissionaisService);
    expect(service).toBeTruthy();
  });
});
