import { Component, OnInit, Input } from '@angular/core';
import { CountDown } from 'mugan86-chronometer';
import { CountdownService } from '../../services/countdown.service';

@Component({
  selector: 'strangle-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.css']
})
export class CountDownTimerComponent implements OnInit {

  chronometer = '00:00:15';
  @Input() time: number;
  constructor(private chronometerService: CountdownService) {
  }
  ngOnInit() {
    this.chronometerService.initializeService(this.time);
    this.start();
  }
  start() {
    this.chronometerService.restart(null, false);
    this.chronometer = this.chronometerService.getChronometer();
  }

  /*restart($event, finish) {
    start() {
      // With clock format
      if (this.time === -1 ) {
        this.time = 3600;
      }
      this.chronometerService.start();
      this.chronometer = this.chronometerService.getChronometer();
    }
  }*/
}
