import { Letter } from './../../interfaces/letter.interface';
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
  wordToFind: string;
  momentWord: string;
  inputLetters: string[] = [];
  letters: Letter[] = [];
  finish = false;
  @Input()
  attemps: number;
  @Input()
  playTime: number;
  constructor(private gameService: StrangleService, private chronometerService: ChronometerService,
    private countdownService: CountdownService) { }

  ngOnInit() {

    // Listen to changes in attemps
    this.gameService.stringVar$.subscribe(data => {
      this.gameService.setAttemps(+data);
      this.attemps = this.gameService.getAttemps();
    });

    this.countdownService.currentTime$.subscribe(data => {
      console.log('In strangle countdown!!!', data);
      let attemps = this.gameService.getAttemps();
      if (data === 'FINISH' && attemps > 2) {
        attemps--;
        this.gameService.updateStringSubject(String(attemps));
        this.countdownService.stop();
        this.countdownService.restart(null, true);
      }
    });

    this.chronometerService.initializeService(1000);
    this.countdownService.initializeService(this.playTime);
    this.gameService.setAttemps(this.attemps);

    this.letters = this.gameService.createStartGameWord('anartz mugika ledo');
    this.getHideWord();
  }
  findAppearances(inputChar: string) {
    this.inputLetters.push(inputChar);
    let attemps = this.gameService.getAttemps();
    let ok = false;
    this.letters.map( (data: Letter) => {
      if (data.secret === '_' && data.visible === inputChar) {
        console.log('OK!');
        data.secret = inputChar;
        ok = !ok;
      }
      console.log(data);
    });
    if ( !ok ) {
      attemps--;
      this.gameService.updateStringSubject(String(attemps));
    }
  }

  getHideWord() {
    this.momentWord = '';
    this.letters.map((letter: Letter) => {
      this.momentWord = this.momentWord + (letter.secret) + ' ';
      console.log(letter.secret);
    });
    console.log(this.momentWord);
  }

  finishGame(): boolean {
    const valuesCheck = this.letters.filter((letter: Letter) => letter.secret === '_');
    console.log(valuesCheck);
    return (valuesCheck.length === 0) ? true : false;
  }

  keyInput(key: string) {
    this.countdownService.stop();
    // this.chronometerService.setChronometer('00:00:00');
    console.log(key.toLowerCase());
    this.findAppearances(key.toLowerCase());
    this.getHideWord();
    console.log(this.finishGame());
    if (this.finishGame() || this.attemps === 0) {
      this.finish = true;
      if (this.attemps === 0) {
        // Save
        console.log('Word to find', this.wordToFind);
      } else {
        console.log('Congratulations!!');
      }
      this.countdownService.setChronometer();
    }
    this.countdownService.restart(null, true);
  }

  ngOnDestroy() {
    this.gameService.stringVar.unsubscribe();
  }

}
