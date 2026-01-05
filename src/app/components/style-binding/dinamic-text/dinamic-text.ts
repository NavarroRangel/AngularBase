import { Component } from '@angular/core';

@Component({
  selector: 'app-dinamic-text',
  imports: [],
  template: `
    <p [style.font-size.rem]="tamanhoTextRem" >
      Esse texto tem um tamanho dinamico
    </p>
    <button (click)="aumentarTexto()">Tamanho +</button>
    <button (click)="diminuirTexto()">Tamanho -</button>

  `,
  styles:``,
})
export class DinamicText {
  tamanhoTextRem: number = 1.2;
  aumentarTexto(){
    this.tamanhoTextRem = Math.min(this.tamanhoTextRem + 0.2, 2.0);
  }
  diminuirTexto(){
    this.tamanhoTextRem = Math.max(this.tamanhoTextRem - 0.2, 0.8);
  }
}
