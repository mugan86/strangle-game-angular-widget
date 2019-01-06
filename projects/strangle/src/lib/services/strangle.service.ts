import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StrangleService {
  attemps: number;
  playTime: number;
  constructor() { }

  setAttemps(attemps: number) {
    this.attemps = attemps;
  }

  setPlayTime(playTime: number) {
    this.playTime = playTime;
  }
}
