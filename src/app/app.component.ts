import { Component } from '@angular/core';
import { HeaderComponent } from "./componentes/header/header.component";
import { ServerStatusComponent } from "./componentes/dashboard/server-status/server-status.component";
import { TraficoComponent } from "./componentes/dashboard/trafico/trafico.component";
import { TicketttComponent } from "./componentes/dashboard/ticket/ticket.component";
import { DashboardItemComponent } from "./componentes/dashboard/dashboard-item/dashboard-item.component";
import { TicketsComponent } from "./componentes/dashboard/tickets/tickets/tickets.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, ServerStatusComponent, TraficoComponent, TicketttComponent, DashboardItemComponent, TicketsComponent],
})
export class AppComponent {
  
}
