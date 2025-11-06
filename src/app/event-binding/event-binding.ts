import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css'
})
export class EventBinding {

  onButtonClick() {
    console.log('click');
  }
  onInput(text: Event) {
    console.log(text);

    const value = (text.target as HTMLInputElement)
      .value;
    console.log(value);
  }

  onBlur(){
    console.log('Bluer');
  }

  onFocus(){
    console.log('Focus');
  }
  onPaste(){
    console.log("Cola não mongol");
  }
}
