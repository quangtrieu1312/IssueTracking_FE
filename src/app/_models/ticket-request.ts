import { Alert } from './alert';

export class TicketRequest{
    name: String;
    status: String;
    description: String;
    alert: Alert;
    emails: String[];
    members: String[];
}