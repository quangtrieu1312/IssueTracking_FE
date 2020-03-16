import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketInfo } from '../_models/ticket-info';
import { NewTicketService } from './new-ticket.service';
import { Alert } from '../_models/alert';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent implements OnInit {
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
        view: 'ON HOLD'
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

  newticket: TicketInfo = new TicketInfo();
  ticket: TicketInfo = new TicketInfo();
  alert: Alert = new Alert();
  emails: String = '';
  members: String = '';
  dataLoaded = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newTicketService: NewTicketService) {
  }


  ngOnInit(): void {
    this.ticket.name = 'Ticket example';
    this.alert.mode = true;
    this.alert.alertTime = null;
    this.alert.cronExpression = '0 0 0 0 * ? *';
    this.ticket.alert = this.alert;
    this.ticket.emails = ['myemail@example.com', 'youremail@example.com'];
    this.ticket.members = ['myusername', 'yourusername'];
    this.ticket.description = 'This is an example';
    this.ticket.owner = 'Owner example';
    this.ticket.status = 'NEW';
    this.ticket.ticketId = 'ExampleId';
    this.newticket = JSON.parse(JSON.stringify(this.ticket));
    this.dataLoaded = true;
  }

  goToTicketList() {
    this.router.navigateByUrl('ticket');
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

  handleSave() {
    this.newticket.members = this.members.split(new RegExp('[,; ]')).filter(function (str) {
      return str != null && str != '';
    });
    this.newticket.emails = this.emails.split(new RegExp('[,; ]')).filter(function (str) {
      return str != null && str != '';
    });
    this.newTicketService.postTicket(this.newticket).subscribe((result) => {
      this.router.navigateByUrl('ticket');
    }, (result) => {

    })
  }

}
