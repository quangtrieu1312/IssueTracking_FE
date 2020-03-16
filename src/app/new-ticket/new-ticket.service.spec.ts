import { TestBed } from '@angular/core/testing';

import { NewTicketService } from './new-ticket.service';

describe('NewTicketService', () => {
  let service: NewTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
