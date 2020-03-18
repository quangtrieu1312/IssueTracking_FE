import { Component, OnInit, ViewChild } from '@angular/core';
import { Sort, MatSort } from '@angular/material/sort';
import { TicketInfo } from '../_models/ticket-info';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketsService } from '../tickets/tickets.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private homeService: HomeService) {

  }

  displayedColumns = ['name'];
  dataSource = new MatTableDataSource<TicketInfo>(this.homeService.getAllTickets());

  @ViewChild('sort') sort: MatSort;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  _setDataSource() {
    setTimeout(() => {
      !this.dataSource.sort ? this.dataSource.sort = this.sort : null;

    });
  }
}