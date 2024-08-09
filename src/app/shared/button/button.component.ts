import { Component } from '@angular/core';

@Component({
  selector: 'button[appButton], a[appButton]', //le estamos diciento a la etiqueta button general, tenga un atributo app-button, selector de atributos
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
