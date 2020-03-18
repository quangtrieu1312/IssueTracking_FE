import { Injectable } from '@angular/core';
import { TicketInfo } from '../_models/ticket-info';

const tickets: TicketInfo[] = [
  {
    ticketId: "RibmyFqoVn", owner: "quangtrieu1312",
    name: "asefsaefef", status: "ON HOLD",
    description: "asefasefasef",
    alert: { mode: false, alertTime: null, cronExpression: "0 * * * * ? *" },
    emails: ["quangtrieu1313@gmail.com"], members: ["quangtrieu1313"]
  }
  ,
  {
    ticketId: "HNa67v3qLO", owner: "quangtrieu1312",
    name: "Ticket example", status: "NEW",
    description: "This is an exampleef",
    alert: { mode: false, alertTime: null, cronExpression: "0 * * * * ? *" },
    emails: [], members: []
  }
];

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  constructor() { }

  getAllTickets() {
    return tickets;
  }
}
