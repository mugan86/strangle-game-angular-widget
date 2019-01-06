import { GameConfig } from './interfaces/game-config.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'strangleDemoApp';
  gameConfig: GameConfig;
  constructor() {
    this.gameConfig = {
      attemps : 6,
      playTime : 10
    };
  }
}
