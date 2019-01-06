import { Component, OnInit, Input } from '@angular/core';
import { CountDown } from 'mugan86-chronometer';

@Component({
  selector: 'strangle-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.css']
})
export class CountDownTimerComponent implements OnInit {

  chronometer = '00:15:00';
  @Input() time: number;

  ngOnInit() {
    this.restart(null, false);
  }

  restart($event, finish) {
    console.log($event, finish);
    // With clock format
    const counter = new CountDown(this.time, true);
    const countDown$ = counter.start().subscribe(
      data => {
        console.log(data);
        this.chronometer = data;
        if ( data === 'FINISH') {
          countDown$.unsubscribe();
        }
      }
    );
  }

}