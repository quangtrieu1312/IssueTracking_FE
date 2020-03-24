import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimezoneService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    }),
    withCredentials: true
  };

  timezoneUrl = 'https://mysterious-reaches-08183.herokuapp.com/timezone';

  constructor(private http: HttpClient) { }

  getTimezones(): Observable<any> {
    return this.http.get(this.timezoneUrl, this.httpOptions);
  }

}
