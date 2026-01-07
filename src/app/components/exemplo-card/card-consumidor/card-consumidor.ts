import { Component } from '@angular/core';
import {CardComponent} from '../card-component/card-component';

@Component({
  selector: 'app-card-consumidor',
  imports: [
    CardComponent
  ],
  template: `
   <div class="tamanho-1">
     <app-card-component/>
   </div>
   <div class="tamanho-2">
     <app-card-component/>
   </div>
  `,
  styles: `
  .tamanho-1{
    max-width: 400px;
    width: 100%;
    margin-bottom: 20px;

  }
  .tamanho-2{
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
  }


  `
})
export class CardConsumidor {

}
