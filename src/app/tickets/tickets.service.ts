import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TicketRequest } from '../_models/ticket-request';
import { TicketInfo } from '../_models/ticket-info';

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

  constructor(private http: HttpClient) {

  }
  getAllTickets(): Observable<any> {
    return this.http.get(this.ticketUrl, this.httpOptions);
  }

  setAlert(ticket: TicketInfo): Observable<any> {
    this.ticketRequest.alert = ticket.alert;
    this.ticketRequest.description = ticket.description;
    this.ticketRequest.emails = ticket.emails;
    this.ticketRequest.name = ticket.name;
    this.ticketRequest.status = ticket.status;
    this.ticketRequest.members = ticket.members;
    console.log(this.ticketRequest);
    return this.http.put(`${this.ticketUrl}/${ticket.ticketId}`, this.ticketRequest, this.httpOptions);
  }
}
