import { TestBed } from '@angular/core/testing';

import { SingleTicketService } from './single-ticket.service';

describe('SingleTicketService', () => {
  let service: SingleTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
