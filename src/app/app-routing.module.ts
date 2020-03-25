import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TicketsComponent } from './tickets/tickets.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthComponent } from './auth/auth.component';
import { AboutComponent } from './about/about.component';
import { SingleTicketComponent } from './single-ticket/single-ticket.component';
import { SignupComponent } from './signup/signup.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: AuthComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'ticket', component: TicketsComponent, canActivate: [AuthGuardService] },
  { path: 'new-ticket', component: NewTicketComponent, canActivate: [AuthGuardService] },
  { path: 'ticket/:ticketId', component: SingleTicketComponent, canActivate: [AuthGuardService] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
