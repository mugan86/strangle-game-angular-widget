import { Key } from './key.interface';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { createKeyBoardKeys } from './keyboard.constants';

@Component({
  selector: 'strangle-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {
  keys: Key[][] = [];
  @Output()
  selectKey: EventEmitter<String> = new EventEmitter<String>();
  @Input()
  withNumber: boolean;
  constructor() { }

  ngOnInit() {
    this.keys = createKeyBoardKeys(this.withNumber);
  }
  /**
   * Key click action to verify in Hide Word
   * @param key Input key element to check in game with hide word
   */
  keyClick(key: Key) {
    console.log(key);
    key.active = false;
    this.selectKey.emit(key.char);
  }

}
