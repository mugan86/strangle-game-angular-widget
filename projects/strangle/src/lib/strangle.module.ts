import { HideWordComponent } from './components/hide-word/hide-word.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CountDownTimerComponent } from './components/count-down-timer/count-down-timer.component';
import { StrangleComponent } from './components/strangle/strangle.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { ChronometerComponent } from './components/chronometer/chronometer.component';
import { GameStateComponent } from './components/game-state/game-state.component';
const COMPONENTS = [
  StrangleComponent,
  KeyboardComponent,
  ChronometerComponent,
  CountDownTimerComponent,
  GameStateComponent,
  HideWordComponent
];
@NgModule({
  declarations: COMPONENTS,
  imports: [
    BrowserModule
  ],
  exports: COMPONENTS
})
export class StrangleModule { }
