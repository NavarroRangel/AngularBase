import { Component } from '@angular/core';

@Component({
  selector: 'app-card-component',
  imports: [],
  template: `
   <div class="card-container">
     <div class="card-header">
       <h2>Tìtulo do Card</h2>
     </div>
     <div class="card-body">
       <p>Conteúdo do Card</p>
     </div>
     <div class="card-footer">
       <p>Rodapé do Card</p>
     </div>
   </div>
  `,
  styles: `
  /* Não usar margin nem width aqui*/

  .card-container {
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100px;

  }

  .card-header {
    padding: 15px 20px;
    background-color: #f8f8f8   ;
    border-bottom: 1px solid #e0e0e0;
    color: #333;
    font-size: 1.2rem;
  }

  .card-header h2{
    margin: 0;
    font-size: 1em;

  }
  .card-body{
    padding: 20px;
    flex-grow: 1;
    color: #555;
    line-height: 1.6;
  }
  .card-footer{
    padding: 10px 20px;
    background-color: #f8f8f8 ;
    border-top: 1px solid #e0e0e0;
    font-size: 0.9rem;
    color: #777;
    text-align: center;

  }
  `
})
export class CardComponent {

}
