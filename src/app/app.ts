import { Component, signal } from '@angular/core';
import {MeuBotao} from './meu-botao/meu-botao';
import {BotaoFlat} from './botao-flat/botao-flat';
import {EventBinding} from './event-binding/event-binding';
import {PropertyBinding} from './property-binding/property-binding';
import {TwoWayDataBinding} from './two-way-data-binding/two-way-data-binding';


@Component({
  selector: 'app-root',
  imports: [MeuBotao, BotaoFlat, EventBinding, PropertyBinding, TwoWayDataBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
