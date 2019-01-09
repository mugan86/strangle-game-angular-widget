import { SecretWord } from './../../projects/strangle/src/lib/interfaces/secret-word.interface';
import { Component, OnInit } from '@angular/core';
import { SecretWordApiService, GameConfig } from 'strangle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'strangleDemoApp';
  gameConfig: GameConfig;
  secretWord: SecretWord;
  constructor(private secretWordApi: SecretWordApiService) {  }
  ngOnInit() {
    this.secretWord = this.secretWordApi.getWord();
    this.gameConfig = {
      attemps : 6,
      playTime : 15
    };
  }
}
