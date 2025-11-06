import { Component, signal } from '@angular/core';
import {MeuBotao} from './meu-botao/meu-botao';
import {BotaoFlat} from './botao-flat/botao-flat';
import {EventBinding} from './event-binding/event-binding';
import {PropertyBinding} from './property-binding/property-binding';


@Component({
  selector: 'app-root',
  imports: [MeuBotao, BotaoFlat, EventBinding, PropertyBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
