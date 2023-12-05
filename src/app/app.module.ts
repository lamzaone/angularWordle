import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetterBoxComponent } from './letter-box/letter-box.component';
import { WordComponent } from './word/word.component';
import { WordsBoxComponent } from './words-box/words-box.component';

@NgModule({
  declarations: [
    AppComponent,
    LetterBoxComponent,
    WordComponent,
    WordsBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
