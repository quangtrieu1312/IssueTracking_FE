import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { TicketsComponent } from './tickets/tickets.component';
import { AuthService } from './auth/auth.service';
import { TicketsService } from './tickets/tickets.service';
import { AboutComponent } from './about/about.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon'


import { SingleTicketComponent } from './single-ticket/single-ticket.component';
import { SingleTicketService } from './single-ticket/single-ticket.service';
import { SignupComponent } from './signup/signup.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AuthComponent,
    HomeComponent,
    TicketsComponent,
    AboutComponent,
    SingleTicketComponent,
    SignupComponent,
    NewTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DragDropModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [AuthService, TicketsService, SingleTicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
