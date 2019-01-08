import { Key } from './key.interface';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { createKeyBoardKeys } from './keyboard.constants';

@Component({
  selector: 'strangle-keyboard',
  templateUrl: './keyboard.component.html'
})
export class KeyboardComponent implements OnInit {
  /**
   * Keyboard keys
   */
  keys: Key[][] = [];
  /**
   * Send select key value to father
   */
  @Output()
  selectKey: EventEmitter<String> = new EventEmitter<String>();
  /**
   * Specific if secret word contain number to generate keyboard with numbers
   */
  @Input()
  withNumber: boolean;

  /**
   * Initialize keyboard with configure keys
   */
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
