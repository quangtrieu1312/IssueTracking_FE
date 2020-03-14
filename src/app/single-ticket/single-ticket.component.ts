import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SingleTicketService } from './single-ticket.service';
import { TicketInfo } from '../_models/ticket-info';
import { UserInfo } from '../_models/user-info';

@Component({
  selector: 'app-single-ticket',
  templateUrl: './single-ticket.component.html',
  styleUrls: ['./single-ticket.component.css']
})
export class SingleTicketComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private singleTicketService: SingleTicketService) {
    this.route.params.subscribe(params => this.ticketId = params.ticketId);
  }

  ticket: TicketInfo = new TicketInfo();
  ticketId: String = '';
  statuses: String[] = ['NEW', 'ADMITTED', 'IN PROCESS', 'ON HOLD', 'REVISED', 'SOLVED', 'CLOSED'];
  onEdit = false;
  dataLoaded = false;

  ngOnInit(): void {
    this.getTicket(this.ticketId);
  }

  getTicket(ticketId: String) {
    this.singleTicketService.getTicket(ticketId).subscribe((result) => {
      this.ticket = result.ticketsInfo[0];
      this.dataLoaded = true;
    });
  }

  hasMembers() {
    return this.ticket.members != null && this.ticket.members.length != 0;
  }

  hasEmails() {
    return this.ticket.emails != null && this.ticket.emails.length != 0;
  }

  setTicketMode(e) {
    if (e.checked) {
      this.ticket.alert.mode = true;
    } else {
      this.ticket.alert.mode = false;
    }
  }

  setPageEdit(e) {
    if (e.checked) {
      this.onEdit = true;
    }
    else {
      this.onEdit = false;
    }
  }


}
