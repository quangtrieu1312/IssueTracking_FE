import { Component, OnInit } from '@angular/core';
import { TicketsService } from './tickets.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TicketInfo } from '../_models/ticket-info';

@Component({
  selector: 'app-ticket',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ticketsService: TicketsService) { }

  tickets: TicketInfo[] = [];
  page = 1;
  numOfItems = 10;
  form: FormData;
  displayedColumns: string[] = ['order', 'name', 'description', 'cron', 'mode'];

  ngOnInit() {
    this.getAllTickets();
  }

  getAllTickets() {
    this.ticketsService.getAllTickets().subscribe((result) => {
      this.tickets = result.ticketsInfo;
    });
  }

  setAlert(ticket: TicketInfo) {
    this.ticketsService.setAlert(ticket).subscribe((result) => {
    });
  }

}
