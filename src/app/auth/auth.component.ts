import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthRequest } from '../_models/auth-request';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authRequest: AuthRequest = {
    username: '',
    password: ''
  };
  returnUrl: string;
  errorMsg: string = '';
  hasError: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    // Get the query params
    if (!this.isUserLoggedIn()) {
      this.route.queryParams.subscribe(params => this.returnUrl = params['returnUrl'] || '/home');
    }
    else {
      this.route.queryParams.subscribe(params => this.returnUrl = '/home');
      this.router.navigateByUrl(this.returnUrl);
    }
  }

  isUserLoggedIn() {
    return this.authService.isUserLoggedIn();
  }
  handleLogin() {
    this.authService.authenticateUser(this.authRequest).subscribe((result) => {
      if (result.status === 'true') {
        this.authService.registerSuccessfulLogin(this.authRequest.username);
        this.router.navigateByUrl(this.returnUrl);
      }
    }, (result) => {
      this.hasError = true;
      this.errorMsg = result.error.msg;
    })
  }

  handleLogout() {
    this.authService.logout();
  }

}
