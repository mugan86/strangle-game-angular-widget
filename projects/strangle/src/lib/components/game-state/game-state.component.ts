import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { StrangleService } from '../../services/strangle.service';

@Component({
  selector: 'strangle-game-state',
  templateUrl: './game-state.component.html'
})
export class GameStateComponent implements OnInit {
  firstImage: string;
  imageSuscription: Subscription;
  constructor(private gameService: StrangleService) { }
  ngOnInit() {
    this.checkImage();
    this.gameService.stringVar$.subscribe(data => {
      this.gameService.setAttemps(+data);
      this.firstImage = this.gameService.getGameImage();
    });
  }

  checkImage() {
    this.firstImage = this.gameService.getGameImage();
  }
}
