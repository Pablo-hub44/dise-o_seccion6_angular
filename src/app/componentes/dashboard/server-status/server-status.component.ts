import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})

//implementamos OnInit para que sobreescribamos ngOnInit y nos lo pida afuerzas :) y ahi hay mas hooks
export class ServerStatusComponent implements OnInit, OnDestroy {
  //le podemos asignar strings especificos a una propiedad
  currentStatus: 'online'|'offline'|'unknown' = 'offline';

  private interval?:any; // NodeJS.Timeout; //propiedad para el intervalo

  //para usar cleanup
  private destroyRef = inject(DestroyRef);

  constructor(){}


  //metodo que se inicializa cuando la pagina carga, metodo de angular muy util
  ngOnInit(){
    this.interval = setInterval(() => {
      const random = Math.random() * 10;//0 - 10

      if (random < 5) {
        this.currentStatus = 'online';
      }else if(random <9){
        this.currentStatus = 'offline';
      }else{
        this.currentStatus = 'unknown';
      }
    }, 3000);


    //podemos igual mandar a destruir|quitar, forma moderna , no esta en versiones viejas
    // this.destroyRef.onDestroy(() =>{
    //   clearInterval(this.interval);
    // })
  }

  //hook q escucha cuando un componente se quita|borra
  ngOnDestroy(): void {
    clearTimeout(this.interval);
  }
}
