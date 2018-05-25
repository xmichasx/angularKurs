import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JokeComponentComponent } from './joke-component/joke-component.component';
import { JokeListComponentComponent } from './joke-list-component/joke-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponentComponent,
    JokeListComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
