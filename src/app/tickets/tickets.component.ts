import { Component, OnInit } from '@angular/core';
import { TicketsService } from './tickets.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TicketInfo } from '../_models/ticket-info';
import { Sort } from '@angular/material/sort';

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
  sortedData: TicketInfo[];
  page = 1;
  numOfItems = 10;
  form: FormData;
  displayedColumns: string[] = ['order', 'name', 'description', 'cron', 'mode', 'status'];

  ngOnInit() {
    this.getAllTickets();
  }

  getAllTickets() {
    this.ticketsService.getAllTickets().subscribe((result) => {
      this.tickets = result.ticketsInfo;
    });
  }

  goToNewTicket() {
    this.router.navigateByUrl('/new-ticket')
  }

  setAlert(ticket: TicketInfo) {
    this.ticketsService.setAlert(ticket).subscribe((result) => {
    });
  }
  sortData(sort: Sort) {
    const data = this.tickets.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'status': return compare(a.status, b.status, isAsc);
        case 'mode': return compare(a.alert.mode, b.alert.mode, isAsc);
        case 'cron': return compare(a.alert.cronExpression, b.alert.cronExpression, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: number | String | Boolean, b: number | String | Boolean, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

