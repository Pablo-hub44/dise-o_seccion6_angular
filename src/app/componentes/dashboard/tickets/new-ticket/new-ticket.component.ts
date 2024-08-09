import { Component, ElementRef, viewChild, ViewChild, ViewChildren } from '@angular/core';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { ControlComponent } from "../../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  // onSubmit(titleElement:any) {
  //   console.log("enviado"+ titleElement);

  //   const enteredTitle = titleElement.value;
  //   console.log("enteredTitle: ", enteredTitle);
  // }



//le estamos diciendo a angular que debe buscar un elemento con una variable de plantilla llamada form y debe almacenar su valor
//@ViewChild('form') private form?:ElementRef<HTMLFormElement>;

//forma dos pero con signal
private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

//si usaramos view children
//@ViewChildren(ButtonComponent) button







  onSubmit(title: string, ticketText:string){//, form:HTMLFormElement
    console.log(title);
    console.log(ticketText);
    //this.form?.nativeElement.reset();//limpiamos el form , sin signal

    this.form()?.nativeElement.reset();
  }
}
