import { SecretWord } from './../../interfaces/secret-word.interface';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { StrangleService } from '../../services/strangle.service';
import { ChronometerService } from '../../services/chronometer.service';
import { CountdownService } from '../../services/countdown.service';

@Component({
  selector: 'strangle-root',
  templateUrl: './strangle.component.html',
  styleUrls: ['./strangle.component.css']
})
export class StrangleComponent implements OnInit, OnDestroy {
  momentWord: string;
  finish = false;
  @Input()
  secretWord: SecretWord;
  @Input()
  attemps: number;
  @Input()
  playTime: number;
  constructor(private gameService: StrangleService, private chronometerService: ChronometerService,
    private countdownService: CountdownService) { }
  ngOnInit() {
    this.init();
    this.attempControlTime();
  }

  attempControlTime() {
    this.countdownService.currentTime$.subscribe(data => {
      let attemps = this.gameService.getAttemps();
      if (attemps === 0) {
        this.countdownService.stop();
      }
      if (data === 'FINISH' && attemps > 0) {
        attemps--;
        this.gameService.updateStringSubject(String(attemps));
        this.finish = this.gameService.finishGame();
        if (!this.finish) {
          console.log('chrono', this.countdownService.getChronometer());
        }
        this.gameSituation();
      }
    });
  }

  init() {
    // Listen to changes in attemps
    this.gameService.stringVar$.subscribe(data => {
      this.gameService.setAttemps(+data);
      this.attemps = this.gameService.getAttemps();
    });

    this.gameService.setAttemps(this.attemps);

    this.gameService.createStartGameWord(this.secretWord.secret);
    this.gameService.getHideWord();
  }

  /**
   * Check in this moment word secret appearance
   */
  getMomentWord() {
    return this.gameService.momentWord;
  }

  /**
   * Key Input action and check if input value is find in secretWord
   * @param key Input key letter to check in game secret world
   */
  keyInput(key: string) {
    this.gameService.findAppearances(key.toLowerCase());
    this.gameService.getHideWord();
    this.gameSituation();
  }

  /**
   * Check game situation to evaluate if game finish or no
   */
  gameSituation() {
    if (this.gameService.finishGame() || this.gameService.attemps === 0) {
      this.finish = true;
      if (this.gameService.attemps === 0) {
        // Save
        console.log('Word to find', this.secretWord);
      } else {
        console.log('Congratulations!!');
      }
      this.countdownService.setChronometer();
      this.chronometerService.stop();
      this.countdownService.stop();
    } else {
      this.countdownService.resetInterval(this.playTime);
    }
  }

  ngOnDestroy() {
    this.gameService.stringVar.unsubscribe();
    this.countdownService.currentTime.unsubscribe();
  }

}
