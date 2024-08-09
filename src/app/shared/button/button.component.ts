import { Component } from '@angular/core';

@Component({
  selector: 'button[appButton]', //le estamos diciento a la etiqueta button toda, tenga un atributo app-button, selector de atributos
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
