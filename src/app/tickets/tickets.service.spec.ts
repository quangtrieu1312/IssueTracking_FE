import { TestBed } from '@angular/core/testing';

import { TicketsService } from './tickets.service';

describe('TicketsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TicketsService = TestBed.get(TicketsService);
    expect(service).toBeTruthy();
  });
});
