import { Subscription, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { CountDown } from 'mugan86-chronometer';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {

  chronometer: string;
  counter: CountDown;
  // Para compartir información
  public currentTime = new Subject<string>();
  public currentTime$ = this.currentTime.asObservable();

  public updateTime(data: string) {
    this.currentTime.next(data);
    console.log(data);
    if (data === 'FINISH') {
      data = '00:00:00';
      console.log('Inicializar!!!');
      this.restart();
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
  restart() {
    // With clock format
    this.counter.start().subscribe(
      data => {
        this.updateTime(data);
        /*if (data === 'FINISH') {
          this.count$.unsubscribe();
        }*/
      }
    );
  }
  stop() {
    this.currentTime.unsubscribe();
  }

  getChronometer() {
    return this.chronometer;
  }

  setChronometer(value: string = 'FINISH') {
    this.chronometer = value;
  }
}
