import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css'
})
export class PropertyBinding {
  text= "Texto do input";
  inputType = 'text';
}
