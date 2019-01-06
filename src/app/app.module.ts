import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StrangleModule } from 'projects/strangle/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StrangleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
