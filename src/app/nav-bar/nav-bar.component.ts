import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { SearchService } from '../shared-data/search.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private searchService: SearchService) { }

  searchBox: string;

  mySubscription: any;

  ngOnInit() {
  }

  handleLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/home');
  }

  isUserLoggedIn() {
    return this.authService.isUserLoggedIn();
  }

  isAtTickets() {
    return this.router.url === '/ticket';
  }

  searchNameOrDescription() {
    this.searchService.changeSearchBox(this.searchBox);
    this.router.navigateByUrl('ticket');
  }

}
