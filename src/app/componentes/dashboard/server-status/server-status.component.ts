import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})

//implementamos OnInit para que sobreescribamos ngOnInit y nos lo pida afuerzas :) y ahi hay mas hooks
export class ServerStatusComponent implements OnInit, OnDestroy {
  //le podemos asignar strings especificos a una propiedad, sinsignal
  // currentStatus: 'online'|'offline'|'unknown' = 'offline';

  currentStatus =signal<'online'|'offline'|'unknown'>('offline');

  private interval?:any; // NodeJS.Timeout; //propiedad para el intervalo

  //para usar cleanup
  private destroyRef = inject(DestroyRef);

  constructor(){
    console.log(this.currentStatus());
    //otro hook; Create a global Effect for the given reactive function.
    effect(()=>{
      console.log(this.currentStatus());
      
    })

    /**
     * ejemplo effect((onCleanup) => {
  const tasks = getTasks();
  const timer = setTimeout(() => {
    console.log(`Current number of tasks: ${tasks().length}`);
  }, 1000);
  onCleanup(() => {
    clearTimeout(timer);
  });
});
     */
  }


  //metodo que se inicializa cuando la pagina carga, metodo de angular muy util
  ngOnInit(){
    this.interval = setInterval(() => {
      const random = Math.random() * 10;//0 - 10

      if (random < 5) {
        // this.currentStatus = 'online';//sin signal
        this.currentStatus.set('online');// set the signal to a new value, and notify any dependents.
      }else if(random <9){
        this.currentStatus.set('offline');
      }else{
        this.currentStatus.set('unknown');
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
