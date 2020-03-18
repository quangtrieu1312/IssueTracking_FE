import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TicketsService } from './tickets.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TicketInfo } from '../_models/ticket-info';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';


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

  sortAttribute = 'name';
  direction = 'ASC';
  pageIndex: number = 0;
  pageSize: number = 5;
  totalPages: number = 0;
  tickets: TicketInfo[];
  displayedColumns: string[] = ['order', 'name', 'description', 'cron', 'mode', 'status'];

  ngOnInit() {
    this.getAllTickets();
  }

  getAllTickets() {
    this.ticketsService.getAllTickets(this.pageIndex, this.pageSize, this.sortAttribute, this.direction).subscribe(
      (result) => {
        this.tickets = result.content;
        this.totalPages = result.totalPages;
      });
  }

  changeSort(sortAttribute: string) {
    if (this.sortAttribute === sortAttribute) {
      if (this.direction === 'ASC') {
        this.direction = 'DESC';
      }
      else {
        this.direction = 'ASC';
      }
    }
    else {
      this.sortAttribute = sortAttribute;
      this.direction = 'ASC';
    }
    this.getAllTickets();
  }

  getNextPage() {
    this.pageIndex = this.pageIndex + 1;
    this.getAllTickets();
  }

  getPreviousPage() {
    this.pageIndex = this.pageIndex - 1;
    this.getAllTickets();
  }

  goToNewTicket() {
    this.router.navigateByUrl('/new-ticket')
  }

  setAlert(ticket: TicketInfo) {
    this.ticketsService.setAlert(ticket).subscribe((result) => {
    });
  }
}

