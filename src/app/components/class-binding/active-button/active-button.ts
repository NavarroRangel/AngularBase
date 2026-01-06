import { Component } from '@angular/core';

@Component({
  selector: 'app-active-button',
  imports: [],
  template: `
    <button [class.active]="isActive" (click)="toggleActive()">
      Botão de Status ({{isActive ? 'Ativo' : 'Inativo'}})
    </button>
  `,
  styles: `
  button {
    padding: 10px 15px;
    margin: 10px;
    border: 1px solid #ccc;
    cursor: pointer;
    background-color: #f0f0f0;
    color: #333;
    transition: background-color 0.2s ease;
    }
  .active {
    background-color: #007bff;
    color: white;
    border-color: #007bff;
    font-weight: bold;
  }
  `,
})
export class ActiveButton {
  isActive: boolean = false; //~valor inicial

  toggleActive(){
    this.isActive = !this.isActive;// alterna o estado ao clicar
  }
}
