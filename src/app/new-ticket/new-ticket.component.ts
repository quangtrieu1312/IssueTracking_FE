import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketInfo } from '../_models/ticket-info';
import { NewTicketService } from './new-ticket.service';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newTicketService: NewTicketService) {

  }
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

  ticket: TicketInfo = new TicketInfo();
  emails: String;
  members: String;
  ngOnInit(): void {
  }

  handleSave() {
    this.ticket.members = this.members.split(new RegExp('[,; ]')).filter(function (str) {
      return str != null && str != "";
    });
    this.ticket.emails = this.emails.split(new RegExp('[,; ]')).filter(function (str) {
      return str != null && str != "";
    });
    this.newTicketService.postTicket(this.ticket).subscribe((result) => {
      this.router.navigateByUrl('ticket');
    }, (result) => {

    });
  }

}
