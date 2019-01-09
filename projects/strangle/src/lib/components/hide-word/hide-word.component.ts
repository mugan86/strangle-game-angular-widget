import { Letter } from './../../../../../../dist/strangle/lib/interfaces/letter.interface.d';
import { StrangleService } from './../../services/strangle.service';
import { Component, OnInit } from '@angular/core';

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
