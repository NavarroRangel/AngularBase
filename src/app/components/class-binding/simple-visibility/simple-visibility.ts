import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-visibility',
  imports: [],
  template: `
    <div [class.hidden]="isHidden" class="message-box">
      Esse texto pode ser Ocultado
    </div>
    <button (click)="toggleVisibility()">
      {{isHidden ? 'Mostrar' : 'Ocultar'}}  Texto
    </button>

  `,
  styles: `
  .message-box {
    padding: 15px;
    margin: 10px;
    border: 1px solid #007bff;
    background-color: #e7f3fe;
    color: #007bff;
    transition: opacity 0.3s ease;

  }
  .hidden{
    opacity: 0 ;
  }

  button{
   padding: 8px 12px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    background-color: #6c757d;
    color: white;
    cursor: pointer;

  }
  `
})
export class SimpleVisibility {
  isHidden : boolean = false;

  toggleVisibility () {
    this.isHidden = !this.isHidden;
  }
}
