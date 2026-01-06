import { Component, signal } from '@angular/core';
import {MeuBotao} from './meu-botao/meu-botao';
import {BotaoFlat} from './botao-flat/botao-flat';
import {EventBinding} from './event-binding/event-binding';
import {PropertyBinding} from './property-binding/property-binding';
import {TwoWayDataBinding} from './two-way-data-binding/two-way-data-binding';
import {DinamicText} from './components/style-binding/dinamic-text/dinamic-text';
import {ProgressBar} from './components/style-binding/progress-bar/progress-bar';
import {SquarePopup} from './components/style-binding/square-popup/square-popup';
import {ActiveButton} from './components/class-binding/active-button/active-button';
import {InvalidInput} from './components/class-binding/invalid-input/invalid-input';
import {SimpleVisibility} from './components/class-binding/simple-visibility/simple-visibility';


@Component({
  selector: 'app-root',
  imports: [ProgressBar, SquarePopup, ActiveButton, InvalidInput, SimpleVisibility],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
