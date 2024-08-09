import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  // host: {
  //   class: 'dashboard-item'
  // }
})
export class DashboardItemComponent {
 //sin signals
  //@Input({required: true}) image!: {//objeto con los datos q esperamos
    //src:string,
    //alt:string,
  //};
  //@Input({required: true}) titulo!: string;

  //inputs signal
  image = input.required<{src:string,
    alt:string}>();
    title = input.required<string>();
}
