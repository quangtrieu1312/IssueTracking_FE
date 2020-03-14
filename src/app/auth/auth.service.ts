import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRequest } from '../_models/auth-request';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // BASE_PATH: 'http://localhost:8080'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  loginUrl = 'https://mysterious-reaches-08183.herokuapp.com/login';

  logoutUrl = 'https://mysterious-reaches-08183.herokuapp.com/logout';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    }),
    withCredentials: true
  };
  public user: String;

  constructor(private http: HttpClient) {

  }

  authenticateUser(authRequest: AuthRequest): Observable<any> {
    this.user = authRequest.username;
    return this.http.post<AuthRequest>(this.loginUrl, authRequest, this.httpOptions);
  }


  registerSuccessfulLogin(user) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, user)
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.user = null;
    this.http.get(this.logoutUrl, this.httpOptions);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) { return false; }
    return true;
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) { return ''; }
    return user;
  }
}
