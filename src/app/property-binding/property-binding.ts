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
  inputDisabled = true;

  changeTheState(){
  this.inputDisabled = false
  }
  desabilitar(){
    this.inputDisabled = true;
  }
  changeText(){
    this.text = "mudou!"
  }
  changeInput(){
    if(this.inputType == 'text'){
      this.inputType = 'password';
    } else {
      this.inputType = 'text';
    }
  }
}
