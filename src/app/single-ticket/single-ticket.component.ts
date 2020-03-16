import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SingleTicketService } from './single-ticket.service';
import { TicketInfo } from '../_models/ticket-info';

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
  statuses: any[] =
    [
      {
        value: 'NEW',
        view: 'NEW'
      },
      {
        value: 'ADMITTED',
        view: 'ADMITTED'
      },
      {
        value: 'IN_PROCESS',
        view: 'IN PROCESS'
      },
      {
        value: 'ON_HOLD',
        view: 'ON_HOLD'
      },
      {
        value: 'REVISED',
        view: 'REVISED'
      },
      {
        value: 'SOLVED',
        view: 'SOLVED'
      },
      {
        value: 'CLOSED',
        view: 'CLOSED'
      }
    ];

  editTicket: TicketInfo = new TicketInfo();
  members: String = '';
  emails: String = '';

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

  handleSave() {

    this.editTicket.members = this.members.split(new RegExp('[,; ]')).filter(function (str) {
      return str != null && str != "";
    });
    this.editTicket.emails = this.emails.split(new RegExp('[,; ]')).filter(function (str) {
      return str != null && str != "";
    });

    this.singleTicketService.putTicket(this.editTicket).subscribe((result) => {

    })
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
      this.editTicket.alert.mode = true;
    } else {
      this.ticket.alert.mode = false;
      this.editTicket.alert.mode = false;
    }
  }

}
