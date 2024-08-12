import { AfterContentInit, afterNextRender, afterRender, AfterViewInit, Component, contentChild, ContentChild, contentChildren, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

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
export class ControlComponent implements AfterContentInit{

  //otra alternativa al uso de host podemos declarar la clase aqui, pero la otra opcion es mas recomendada
  //@HostBinding() className = 'control';
  // @HostListener('click') onClick(){
  //   console.log('clickeado');
  // }
  label = input.required<string>();

  private element = inject(ElementRef)//angular le dara acceso al elemento anfitrion de ese componente, acceso programatico al elemeto antifrion


  //con esto hacemos contenido proyectado
  //@ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTemplateElement>; //necesita un selector

  //con signal,otra forma mas moderna para versiones >17.3
  private control = contentChild<ElementRef<HTMLInputElement|HTMLTextAreaElement>>('input')

  //hook para q se ejeucte luego de que el contenido se inicialice, si ponemos aqui garantizamos obtener tale svalores que se seleccionan con el selector content child si 
  ngAfterContentInit(): void {
    //..throw new Error('Method not implemented.');
  }

  constructor(){
    //hooks,este se ejecuta cada ves que se produce un cambio en toda la aplicacion de angular
    afterRender(()=>{
      console.log('after render');
      
    });

    //este no se vuelve a bloquear, este igual en toda la aplicacion de angular , se ejecuta pocas veces
    afterNextRender(()=>{
      console.log('afterNextRender');
      
    });
  }


  onClick(){
    console.log('clickeado');
    console.log(this.element);
    console.log(this.control());//con parentesis porque ahora usa signal
    
  }

}
