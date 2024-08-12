import { Component } from '@angular/core';
import { NewTicketComponent } from "../new-ticket/new-ticket.component";
import { Ticket } from '../../../../model/ticket.model';
import { TicketComponent } from "../ticket/ticket.component";


@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
  host: {
    id: '#tickets'
  }
})
export class TicketsComponent {

  tickets: Ticket[] = [];// le ponemos que sea de tipo Ticket nuestro modelos y que va a ser un array


  /**
   * 
   * @param $event que contiene un objeto
   */
  onAdd(ticketData: { title: string; text: string; }) {
   
    const ticket: Ticket = {//creamos un objeto seteando los datos
      title: ticketData.title,//
      request: ticketData.title,
      id: Math.random().toString(),
      status: 'open'
    }

    this.tickets.push(ticket)//agrgamos el nuevo objeto a la lista de tickets
    }


    /**
     * metodo para cerrar un ticker
     * @param id 
     */
    onCloseTicket(id: string){
      this.tickets = this.tickets.map((ticket)=>{
        //iterando, validamos si el ticket es el que estamos recibiendo cmo parametro, lo ponemos con status closed
        if (ticket.id === id) {
          return {...ticket, status:'closed'}
        }
        return ticket;
      })
    }
}
