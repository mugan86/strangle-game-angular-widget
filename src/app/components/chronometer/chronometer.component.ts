import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Counter } from 'mugan86-chronometer';

/**
 * https://github.com/angular/angular-cli/issues/10869
 */
@Component({
  selector: 'app-chronometer',
  templateUrl: './chronometer.component.html'
})
export class ChronometerComponent implements OnInit {
  chronometer = '00:00:00';
  @Input() time: number;

  ngOnInit() {
    // With clock format
    if (this.time === -1 ) {
      this.time = 3600;
    }
    const counter = new Counter(this.time, true);
    const count$ = counter.start().subscribe(
      data => {
        console.log(data);
        this.chronometer = data;
        if ( data === 'FINISH') {
          count$.unsubscribe();
        }
      }
    );
  }

}
