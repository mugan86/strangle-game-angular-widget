import { ChronometerComponent } from './components/chronometer/chronometer.component';
import { CountDownTimerComponent } from './components/count-down-timer/count-down-timer.component';
import { StrangleComponent } from './components/strangle/strangle.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { StatusBarComponent } from './components/status-bar/status-bar.component';

@NgModule({
  declarations: [
    AppComponent, StrangleComponent, CountDownTimerComponent, ChronometerComponent, KeyboardComponent, StatusBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
