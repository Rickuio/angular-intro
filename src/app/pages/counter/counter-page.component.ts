import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter-page.component.html',
  styles: `
    button {
      padding: 5px;
      margin: 5px 10px;
      width: 75px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  // template: `
  //   <h1>Counter {{ counter }}</h1>
  //   <button (click)="increaseBy(1)">Plus+1</button>
  //   <button (click)="decreaseBy(1)">Minus-1</button>
  //   <button (click)="resetCounter()">Reset</button>
  // `  
})
export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(20);

  constructor() {
    setInterval( ()=>{
      console.log('Tick');
      //this.counter += 1;
      //this.counterSignal.update((val) => val + 3);
    }, 10000);
  }

  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update(current => current + value);
  }
  decreaseBy(value: number) {
    this.counter -= value;
    this.counterSignal.update((ele) => value + ele);
  }
  resetCounter(value: number = 10) {
    this.counter = value;
    this.counterSignal.set(value);
  }
}