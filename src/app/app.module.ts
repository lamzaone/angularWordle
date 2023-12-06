import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetterBoxComponent } from './letter-box/letter-box.component';
import { WordComponent } from './word/word.component';
import { WordsBoxComponent } from './words-box/words-box.component';
import { InputBoxComponent } from './input-box/input-box.component';

@NgModule({
  declarations: [
    AppComponent,
    LetterBoxComponent,
    WordComponent,
    WordsBoxComponent,
    InputBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
