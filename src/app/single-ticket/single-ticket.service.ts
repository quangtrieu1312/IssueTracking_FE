import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TicketInfo } from '../_models/ticket-info';
import { TicketRequest } from '../_models/ticket-request';

@Injectable({
  providedIn: 'root'
})
export class SingleTicketService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    }),
    withCredentials: true
  };

  ticketUrl = 'https://mysterious-reaches-08183.herokuapp.com/ticket';

  userUrl = 'https://mysterious-reaches-08183.herokuapp.com/user/';

  ticketRequest: TicketRequest = new TicketRequest();

  constructor(private http: HttpClient) { }

  getTicket(ticketId: String): Observable<any> {
    return this.http.get(this.ticketUrl + '/' + ticketId, this.httpOptions);
  }

  getUsersInfoByUserIds(userIds: String[]): Observable<any> {
    return this.http.get(`${this.userUrl}/id/${userIds}`, this.httpOptions);
  }

  postTicket(ticket: TicketInfo): Observable<any> {
    this.ticketRequest.name = ticket.name;
    this.ticketRequest.status = ticket.status;
    this.ticketRequest.alert = ticket.alert;
    this.ticketRequest.members = ticket.members;
    this.ticketRequest.emails = ticket.emails;
    this.ticketRequest.description = ticket.description;
    return this.http.post<TicketInfo>(this.ticketUrl, this.ticketRequest, this.httpOptions);
  }

  putTicket(ticket: TicketInfo): Observable<any> {
    this.ticketRequest.name = ticket.name;
    this.ticketRequest.status = ticket.status;
    this.ticketRequest.alert = ticket.alert;
    this.ticketRequest.members = ticket.members;
    this.ticketRequest.emails = ticket.emails;
    this.ticketRequest.description = ticket.description;
    return this.http.put<TicketInfo>(`${this.ticketUrl}/${ticket.ticketId}`, this.ticketRequest, this.httpOptions);
  }

}
