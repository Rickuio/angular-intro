import { Component } from "@angular/core";

@Component({
  templateUrl: './counter-page.component.html',
  styles: `
    button {
      padding: 5px;
      margin: 5px 10px;
      width: 75px;
    }
  `
  // template: `
  //   <h1>Counter {{ counter }}</h1>
  //   <button (click)="increaseBy(1)">Plus+1</button>
  //   <button (click)="decreaseBy(1)">Minus-1</button>
  //   <button (click)="resetCounter()">Reset</button>
  // `  
})
export class CounterPageComponent {
  counter = 10;

  increaseBy(value: number) {
    this.counter += value;
  }
  decreaseBy(value: number) {
    this.counter -= value;
  }
  resetCounter(value: number = 10) {
    this.counter = value;
  }
}