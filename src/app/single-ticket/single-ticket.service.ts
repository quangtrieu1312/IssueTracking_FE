import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  constructor(private http: HttpClient) { }

  getTicket(ticketId: String): Observable<any> {
    return this.http.get(this.ticketUrl + '/' + ticketId, this.httpOptions);
  }

  getUsersInfoByUserIds(userIds: String[]) : Observable<any>{
    return this.http.get(`${this.userUrl}/id/${userIds}`, this.httpOptions);
  }

}
