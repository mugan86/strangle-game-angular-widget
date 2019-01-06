import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Counter } from 'mugan86-chronometer';
import { ChronometerService } from '../../services/chronometer.service';

/**
 * https://github.com/angular/angular-cli/issues/10869
 */
@Component({
  selector: 'strangle-chronometer',
  templateUrl: './chronometer.component.html'
})
export class ChronometerComponent implements OnInit {
  chronometer = '00:00:00';
  count$: any;
  @Input() time: number;
  constructor(private chronometerService: ChronometerService) {
  }

  ngOnInit() {
    this.start();
  }
  start() {
    // With clock format
    if (this.time === -1 ) {
      this.time = 3600;
    }
    this.chronometerService.start();
    this.chronometer = this.chronometerService.getChronometer();
  }

}
