import { Key } from './key.interface';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { createKeyBoardKeys } from './keyboard.constants';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {
  keys: Key[][] = [];
  @Output()
  selectKey: EventEmitter<String> = new EventEmitter<String>();
  constructor() { }

  ngOnInit() {
    this.keys = createKeyBoardKeys(true);
  }
  keyClick(key: Key) {
    console.log(key);
    key.active = false;
    this.selectKey.emit(key.char);
  }

}
