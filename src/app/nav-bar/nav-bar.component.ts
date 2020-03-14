import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private authService: AuthService) { }

  ngOnInit() {
  }

  handleLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/home');
  }

  isUserLoggedIn() {
    return this.authService.isUserLoggedIn();
  }

}
