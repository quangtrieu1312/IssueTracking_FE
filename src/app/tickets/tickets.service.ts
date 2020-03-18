import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TicketRequest } from '../_models/ticket-request';
import { TicketInfo } from '../_models/ticket-info';
import { SearchService } from '../shared-data/search.service';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    }),
    withCredentials: true
  };

  ticketUrl = 'https://mysterious-reaches-08183.herokuapp.com/ticket';
  ticketRequest: TicketRequest = new TicketRequest();
  searchBox: string = '';
  constructor(private http: HttpClient, private searchService: SearchService) {

  }
  getAllTickets(pageIndex: number, pageSize: number, sortAttribute: string, direction: string): Observable<any> {
    this.searchService.currentSearchBox.subscribe(searchBox => this.searchBox = searchBox);
    return this.http.get(`${this.ticketUrl}?searchBox=${this.searchBox}&page=${pageIndex}&size=${pageSize}&sort=${sortAttribute},${direction}`, this.httpOptions);
  }

  setAlert(ticket: TicketInfo): Observable<any> {
    this.ticketRequest.alert = ticket.alert;
    this.ticketRequest.description = ticket.description;
    this.ticketRequest.emails = ticket.emails;
    this.ticketRequest.name = ticket.name;
    this.ticketRequest.status = ticket.status;
    this.ticketRequest.members = ticket.members;
    return this.http.put(`${this.ticketUrl}/${ticket.ticketId}`, this.ticketRequest, this.httpOptions);
  }
}