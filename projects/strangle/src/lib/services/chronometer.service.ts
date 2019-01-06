import { Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
import { Counter } from 'mugan86-chronometer';

@Injectable({
  providedIn: 'root'
})
export class ChronometerService {
  count$: Subscription;
  chronometer: string;
  counter: Counter;
  constructor() {
    this.counter = new Counter(10, true);
  }

  start(timeLimit: number) {
    this.count$ = this.counter.start().subscribe(
      data => {
        console.log(data);
        if ( data === 'FINISH') {
          this.count$.unsubscribe();
        }
        this.chronometer = data;
      }
    );
  }
  stop() {
    this.count$.unsubscribe();
  }

  getChronometer() {
    return this.chronometer;
  }

  setChronometer() {
    this.chronometer = 'FINISH';
  }

}
