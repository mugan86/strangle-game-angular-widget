import { Letter } from './../interfaces/letter.interface';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StrangleService {
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
    const letters: Letter[] = [];
    for (let i = 0; i < wordToFind.length; i++) {
      const character = wordToFind[i].toLowerCase();
      console.log(character);
      const letter: Letter = { visible: '', secret: ''};
      if (character === ' ') {
        letter.secret = '.....';
      } else {
        letter.secret = '_';
      }
      letter.visible = character;
      letters.push(letter);
    }
    return letters;
  }

  setAttemps(attemps: number) {
    this.attemps = attemps;
    console.log('set attemps', this.getAttemps());
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

}
