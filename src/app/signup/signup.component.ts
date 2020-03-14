import { Component, OnInit } from '@angular/core';
import { SignupRequest } from '../_models/signup-request';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupService } from './signup.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupRequest: SignupRequest = new SignupRequest();
  returnUrl: string;
  errorMsg: string = '';
  hasError: boolean = false;
  successMsg: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private signupService: SignupService,
    private authService: AuthService) { }

  ngOnInit() {
    if (!this.isUserLoggedIn()) {
      this.route.queryParams.subscribe(params => this.returnUrl = params['returnUrl'] || '/home');
    }
    else {
      this.route.queryParams.subscribe(() => this.returnUrl = '/home');
      this.router.navigateByUrl(this.returnUrl);
    }
  }

  isUserLoggedIn() {
    return this.authService.isUserLoggedIn();
  }
  handleSignup() {
    this.signupService.handleSignup(this.signupRequest).subscribe((result) => {
      this.router.navigateByUrl(this.returnUrl);
    }, (result) => {
      this.hasError = true;
      this.errorMsg = result.error.msg;
    });
  }
}
