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
  cronToText: String = '';
  addMemberSuccess = true;
  ghostMembers = [];
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
    this.alert.cronExpression = '0 1 2 3 4 ? *';
    this.ticket.alert = this.alert;
    this.ticket.emails = ['myemail@example.com', 'youremail@example.com'];
    this.ticket.members = ['myusername', 'yourusername'];
    this.ticket.description = 'Cron expression format' +
    '-------- Sec | Min | Hour |	Day Of Month | Month | Day Of Week | Year --------' +
      '0 1 2 3 4 ? *: At 02:01:00am, on the 3rd day, in April, in every year. --------' +
      'For more information, visit: https://www.freeformatter.com/cron-expression-generator-quartz.html#cronconverttotext';
    this.ticket.owner = 'Click top right corner to fill in form';
    this.ticket.status = 'NEW';
    this.ticket.ticketId = 'ExampleId';
    this.newticket = JSON.parse(JSON.stringify(this.ticket));
    this.newticket.description = '';
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
      this.ticket = result.ticketsInfo[0];
      this.addMemberSuccess = true;
      this.ghostMembers = [];
      this.newticket.members.forEach(element => {
        if (!this.ticket.members.includes(element)) {
          this.addMemberSuccess = false;
          this.ghostMembers.push(element);
        }
      });
      if (this.addMemberSuccess) {
        this.router.navigateByUrl('ticket');
      }
    }, (result) => {

    })
  }

}
