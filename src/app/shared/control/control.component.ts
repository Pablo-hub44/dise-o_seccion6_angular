import { Component, ContentChild, contentChildren, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',//lo que se selecciona aqui se renderiza en el dom
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation:ViewEncapsulation.None, //emuted means que angular emula el comportamiento del ShadowDom, q los estilos pertenecen a un componente , shadowDom es una caracteristica del navegador , no de angular

  //con esta encapsulacion puesta los estilos configurados aqui se convertiran de nuevo en estilos globales

  //con host podemos asignarle clases css aqui mismo y se lo aplicara a este componente cada que lo usemos
  host:{
    class: 'control',
    '(click)':'onClick()'//podemos invocar metodos tambien
  }
})
export class ControlComponent {
  //otra alternativa al uso de host podemos declarar la clase aqui, pero la otra opcion es mas recomendada
  //@HostBinding() className = 'control';
  // @HostListener('click') onClick(){
  //   console.log('clickeado');
  // }
  label = input.required<string>();

  private element = inject(ElementRef)//angular le dara acceso al elemento anfitrion de ese componente, acceso programatico al elemeto antifrion


  //
  @ContentChild() private control; //necesita un selector






  onClick(){
    console.log('clickeado');
    console.log(this.element);
    
  }

}
