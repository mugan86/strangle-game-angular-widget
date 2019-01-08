import { Subscription, ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { CountDown } from 'mugan86-chronometer';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {
  chronometer: string;
  counter: CountDown;
  private count$ = new Subscription();
  // Para compartir información
  public currentTime = new ReplaySubject(1);
  public currentTime$ = this.currentTime.asObservable();

  public updateTime(data: string) {
    this.currentTime.next(data);
    console.log(data);
    if (data === 'FINISH') {
      data = '00:00:00';
    }
    this.chronometer = data;
  }

  initializeService(timeLimit: number = 3600) {
    console.log(timeLimit);
    this.counter = new CountDown(timeLimit, true);
  }
  restart() {
    // With clock format
    this.count$ = this.counter.start().subscribe(
      data => {
        this.updateTime(data);
        if (data === 'FINISH') {
          this.count$.unsubscribe();
          this.restart();
        }
      }
    );
  }
  stop() {
    this.currentTime.unsubscribe();
    this.count$.unsubscribe();
  }

  resetInterval(time: number) {
    this.count$.unsubscribe();
    this.initializeService(time);
    this.restart(); // start the interval again
  }

  getChronometer() {
    return this.chronometer;
  }

  setChronometer(value: string = 'FINISH') {
    this.chronometer = value;
  }
}
