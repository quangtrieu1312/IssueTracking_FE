import { Component, OnInit } from '@angular/core';
import { TicketService } from './ticket.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TicketInfo } from '../_models/ticket-info';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ticketService: TicketService) { }

  tickets: TicketInfo[] = [];
  page = 1;
  numOfItems = 10;
  form: FormData;
  displayedColumns: string[] = ['order', 'name', 'description', 'cron', 'mode'];

  ngOnInit() {
    this.getAllTickets();
  }

  getAllTickets() {
    this.ticketService.getAllTickets().subscribe((result) => {
      this.tickets = result.ticketsInfo;
    });
  }

  setAlert(ticket: TicketInfo) {
    this.ticketService.setAlert(ticket).subscribe((result) => {
    });
  }

}
