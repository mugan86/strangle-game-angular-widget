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
    if (data === 'FINISH') {
      data = '00:00:00';
    }
    this.chronometer = data;
  }

  /**
   * Initialize coundown clock to control play time
   * @param timeLimit Specific start seconds number. Default 15 seconds
   */
  initializeService(timeLimit: number = 15) {
    this.counter = new CountDown(timeLimit, true);
  }

  /**
   * Initialize coundown
   */
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

  /**
   * Stop current time and countdown observable
   */
  stop() {
    this.currentTime.unsubscribe();
    this.count$.unsubscribe();
  }

  /**
   * Reset Countdown interval
   * @param time Specific play time in seconds
   */
  resetInterval(time: number = 15) {
    this.count$.unsubscribe();
    this.initializeService(time);
    this.restart(); // start the interval again
  }

  /**
   * Take clock output value
   */
  getChronometer() {
    return this.chronometer;
  }

  /**
   * Asign chronometer value
   * @param value Asign value in chronometer
   */
  setChronometer(value: string = 'FINISH') {
    this.chronometer = value;
  }
}
