import { Alert } from './alert';

export class TicketInfo{
    ticketId: String;
    owner: String;
    name: String;
    status: String;
    description: String;
    alert: Alert;
    emails: String[];
    members: String[];

}