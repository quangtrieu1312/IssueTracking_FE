import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignupRequest } from '../_models/signup-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  signupUrl = 'https://mysterious-reaches-08183.herokuapp.com/signup';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    }),
    withCredentials: true
  };

  constructor(private http: HttpClient) {

  }

  handleSignup(signupRequest: SignupRequest): Observable<any> {
    return this.http.post<SignupRequest>(this.signupUrl, signupRequest, this.httpOptions);
  }

}
