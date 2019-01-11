import { StrangleService } from './../../services/strangle.service';
import { Component, OnInit } from '@angular/core';
import { Letter } from '../../interfaces/letter.interface';

@Component({
  selector: 'strangle-hide-word',
  templateUrl: './hide-word.component.html'
})
export class HideWordComponent implements OnInit {
  letters: Letter[] = [];
  constructor(private strangleService: StrangleService) { }

  ngOnInit() {
    this.letters = this.strangleService.getHideWord();
  }

}
