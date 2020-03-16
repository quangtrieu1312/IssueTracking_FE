import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketInfo } from '../_models/ticket-info';
import { TicketRequest } from '../_models/ticket-request';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewTicketService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    }),
    withCredentials: true
  };

  ticketUrl = 'https://mysterious-reaches-08183.herokuapp.com/ticket';

  constructor(private http: HttpClient) { }

  ticketRequest: TicketRequest = new TicketRequest();
  postTicket(ticket: TicketInfo): Observable<any> {
    this.ticketRequest.name = ticket.name;
    this.ticketRequest.status = ticket.status;
    this.ticketRequest.alert = ticket.alert;
    this.ticketRequest.members = ticket.members;
    this.ticketRequest.emails = ticket.emails;
    this.ticketRequest.description = ticket.description;
    return this.http.post<TicketInfo>(this.ticketUrl, this.ticketRequest, this.httpOptions);
  }
}
