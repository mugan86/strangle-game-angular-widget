import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { StrangleService } from '../../services/strangle.service';

@Component({
  selector: 'strangle-game-state',
  templateUrl: './game-state.component.html'
})
export class GameStateComponent implements OnInit {
  firstImage: string;
  progress: number;
  attempPercent: number;
  attemps: number;
  imageSuscription: Subscription;
  constructor(private gameService: StrangleService) { }
  ngOnInit() {
    this.progress = 100;
    this.checkImage();
    this.attemps = this.gameService.getAttemps();
    this.setProgress();
    this.gameService.stringVar$.subscribe(data => {
      this.gameService.setAttemps(+data);
      this.attemps = this.gameService.getAttemps();
      this.firstImage = this.gameService.getGameImage();
      this.setProgress();
    });
  }

  setProgress() {
    this.progress = 100 - ( (100 / 6) * (6 - this.attemps));
    console.log(this.progress);
  }

  checkImage() {
    this.firstImage = this.gameService.getGameImage();
  }
}
