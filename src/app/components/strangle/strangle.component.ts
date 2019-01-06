import { Component, OnInit, Input } from '@angular/core';
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
  wordToFind: string;
  momentWord: string;
  inputLetters: string[] = [];
  letters: Letter[] = [];
  finish = false;
  @Input()
  attemps: number;
  constructor() { }

  ngOnInit() {
    // https://codepen.io/attilahajzer/pen/kydqJ

    this.wordToFind = 'Una palabra mas';
    for (let i = 0; i < this.wordToFind.length; i++) {
      const character = this.wordToFind[i].toLowerCase();
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
  }
  findAppearances(inputChar: string) {
    this.inputLetters.push(inputChar);
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
      this.attemps--;
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
    }
  }

}
