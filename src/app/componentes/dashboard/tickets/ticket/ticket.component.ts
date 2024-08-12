import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../../../../model/ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

  data = input.required<Ticket>({})

  close = output();

  detailsVisible = signal(false);

  ontoggleDetails(){
    //this.detailsVisible.set(!this.detailsVisible());

    //Update the value of the signal based on its current value, and notify any dependents.
    this.detailsVisible.update((fueVisible)=>{
      return !fueVisible;//va a poner lo contrario
    });
  }

  //emitimos cada que el ticket se marque como completado
  onMarkAscompleted(){
    this.close.emit()
  }
}
