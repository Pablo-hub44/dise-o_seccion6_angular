import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, viewChild, ViewChild, ViewChildren } from '@angular/core';
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
export class NewTicketComponent implements OnInit, AfterViewInit{


  ngOnInit(): void {
   console.log("on init");
   console.log(this.form?.nativeElement);
   
  }


  // onSubmit(titleElement:any) {
  //   console.log("enviado"+ titleElement);

  //   const enteredTitle = titleElement.value;
  //   console.log("enteredTitle: ", enteredTitle);
  // }



//le estamos diciendo a angular que debe buscar un elemento con una variable de plantilla llamada form y debe almacenar su valor
@ViewChild('form') private form?:ElementRef<HTMLFormElement>;

//forma dos pero con signal
//private form = viewChild.required<ElementRef<HTMLFormElement>>('form');


// @Output() add = new EventEmitter<{title:string; text:string}>();//con decorador
add = output<{title:string, text:string}>(); //con signal
//si usaramos view children
//@ViewChildren(ButtonComponent) button

title = '';
request = '';

//hook que se ejecuta cuando la vista carga
ngAfterViewInit(): void {
  console.log("despues que la vista inicializa");
  console.log(this.form?.nativeElement); //si usaramos con signal form()
  
  
}




  onSubmit(){//, form:HTMLFormElement //antes estaban como paramtetro, pero ahora usamos el ngModel para vincular y traer los datos
    console.log(this.title);
    console.log(this.request);
    
    // this.form()?.nativeElement.reset();
    
    //ahora con el output add emitimos los datos al padre
    this.add.emit({title:this.title, text: this.request})


    this.form?.nativeElement.reset();//limpiamos el form , sin signal
  }
}
