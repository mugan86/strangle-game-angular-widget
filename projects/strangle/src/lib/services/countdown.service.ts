import { Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
import { CountDown } from 'mugan86-chronometer';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {

  count$: Subscription;
  chronometer: string;
  counter: CountDown;

  initializeService(timeLimit: number = 3600) {
    console.log(timeLimit);
    this.counter = new CountDown(timeLimit, true);
  }
  restart($event, finish) {
    console.log($event, finish);
    // With clock format
    const countDown$ = this.counter.start().subscribe(
      data => {
        console.log(data);
        if ( data === 'FINISH') {
          countDown$.unsubscribe();
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
