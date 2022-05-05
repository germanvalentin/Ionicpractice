import { TestBed } from '@angular/core/testing';

import { Anotador.ServiceService } from './anotador.service.service';

describe('Anotador.ServiceService', () => {
  let service: Anotador.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Anotador.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
