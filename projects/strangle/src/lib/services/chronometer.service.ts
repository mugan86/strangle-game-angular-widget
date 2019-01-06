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

  initializeService(timeLimit: number = 3600) {
    this.counter = new Counter(timeLimit, true);
  }
  start() {
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

  setChronometer(value: string = 'FINISH') {
    this.chronometer = value;
  }

}
