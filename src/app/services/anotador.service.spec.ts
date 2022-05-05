import { TestBed } from '@angular/core/testing';

import { AnotadorService } from './anotador.service';

describe('AnotadorService', () => {
  let service: AnotadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnotadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
