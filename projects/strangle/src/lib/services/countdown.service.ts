import { Subscription, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { CountDown } from 'mugan86-chronometer';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {

  count$: Subscription;
  chronometer: string;
  counter: CountDown;
  // Para compartir información
  public currentTime = new Subject<string>();
  public currentTime$ = this.currentTime.asObservable();

  public updateTime(data: string) {
    this.currentTime.next(data);
    console.log(data);
    if ( data === 'FINISH') {
      this.count$.unsubscribe();
    }
    this.chronometer = data;
    /*if (newStringVar === '0') {
      this.currentTime.unsubscribe();
      console.log('unsuscribe');
    }*/
  }

  initializeService(timeLimit: number = 3600) {
    console.log(timeLimit);
    this.counter = new CountDown(timeLimit, true);
  }
  restart($event, finish) {
    console.log($event, finish);
    if (finish) {
      this.count$.unsubscribe();
    }
    // With clock format
    this.count$ = this.counter.start().subscribe(
      data => {
        if (data === 'FINISH') {
          this.stop();
        } else {
          this.updateTime(data);
        }
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
