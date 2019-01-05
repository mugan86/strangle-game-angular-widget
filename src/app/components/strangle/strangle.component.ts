import { Component, OnInit } from '@angular/core';
interface Letter {
  visible: string;
  secret: string;
}
@Component({
  selector: 'app-strangle',
  templateUrl: './strangle.component.html',
  styleUrls: ['./strangle.component.css']
})
export class StrangleComponent implements OnInit {
  momentWord: string;
  inputLetters: string[] = [];
  letters: Letter[] = [];
  constructor() { }

  ngOnInit() {
    const word = 'Una palabra mas';
    for (let i = 0; i < word.length; i++) {
      const character = word[i].toLowerCase();
      console.log(character);
      const letter: Letter = { visible: '', secret: ''};
      if (character === ' ') {
        letter.secret = '.....';
      } else {
        letter.secret = '_';
      }
      letter.visible = character;
      this.letters.push(letter);
    }
    // console.log(String(hideWord));
    this.getHideWord();
    console.log('Initial word chars');
    this.findAppearances('u');
    this.findAppearances('p');
    this.findAppearances('e');
    this.findAppearances('a');
    this.findAppearances('r');

    console.log('Entry letters', this.inputLetters);
    console.log('Moment correct words', this.letters);
    this.getHideWord();
    console.log(this.finishGame());
    this.findAppearances('l');
    this.findAppearances('i');
    this.findAppearances('n');
    this.findAppearances('c');
    this.findAppearances('m');
    this.findAppearances('s');
    this.findAppearances('b');
    console.log('Entry letters', this.inputLetters);
    console.log('Moment correct words', this.letters);
    this.getHideWord();
    console.log(this.finishGame());
  }
  findAppearances(inputChar: string) {
    this.inputLetters.push(inputChar);
    this.letters.map( (data: Letter) => {
      if (data.secret === '_' && data.visible === inputChar) {
        console.log('OK!');
        data.secret = inputChar;
      }
      console.log(data);
    });
    const checkAllTake = this.letters.filter(letter => letter.secret !== ' ');
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

}