import { Letter } from './../interfaces/letter.interface';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StrangleService {
  momentWord: string;
  inputLetters: string[] = [];
  letters: Letter[] = [];
  attemps = 6;
  playTime: number;
  url = 'https://bitbucket.org/amugika/ahorkadoa/raw/2b3890efce59f021619ff8bc3465ca79f54c6cbe/res/drawable/';
  images: string[] = [
    'a7.png',
    'a6.png',
    'a5.png',
    'a4.png',
    'a3.png',
    'a2.png',
    'a1.png'
  ];
  firstImage: string;
  // Para compartir información
  public stringVar = new Subject<string>();
  public stringVar$ = this.stringVar.asObservable();

  // ------ Getting Your updates ----------
  // Subscribe to the observable you created.. data will be updated each time there is a change to Subject

  // Update it by calling the method..
  // updateStringSubject('some new string value')

  constructor() {
  }
  // ------ How to update the subject ---------
  // Create a method that allows you to update the subject being watched by observable
  public updateStringSubject(newStringVar: string) {
    this.stringVar.next(newStringVar);
    if (newStringVar === '0') {
      this.stringVar.unsubscribe();
      console.log('unsuscribe');
    }
  }

  createStartGameWord(wordToFind: string = 'ahorcado') {
    this.letters = [];
    for (let i = 0; i < wordToFind.length; i++) {
      const character = wordToFind[i].toLowerCase();
      const letter: Letter = { visible: '', secret: ''};
      if (character === ' ') {
        letter.secret = '.....';
      } else {
        letter.secret = '_';
      }
      letter.visible = character;
      this.letters.push(letter);
    }
  }

  setAttemps(attemps: number) {
    this.attemps = attemps;
  }

  setPlayTime(playTime: number) {
    this.playTime = playTime;
  }

  getAttemps() {
    return this.attemps;
  }

  getGameImage() {
    return this.url.concat(this.images[this.getAttemps()]);
  }
  findAppearances(inputChar: string) {
    this.inputLetters.push(inputChar);
    let attemps = this.getAttemps();
    let ok = false;
    this.letters.map( (data: Letter) => {
      if (data.secret === '_' && data.visible === inputChar) {
        console.log('OK!');
        data.secret = inputChar;
        ok = true;
      }
      // console.log(data);
    });
    if ( !ok ) {
      attemps--;
      this.updateStringSubject(String(attemps));
    }
  }

  getHideWord() {
    this.momentWord = '';
    this.letters.map((letter: Letter) => {
      this.momentWord = this.momentWord + (letter.secret) + ' ';
      // console.log(letter.secret);
    });
    // console.log(this.momentWord);
  }

  /**
   * Check if user find all secrets words
   */
  finishGame(): boolean {
    return (this.letters.filter((letter: Letter) => letter.secret === '_').length === 0) ? true : false;
  }

}
