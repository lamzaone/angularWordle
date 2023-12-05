import { Component } from '@angular/core';

@Component({
  selector: 'app-words-box',
  templateUrl: './words-box.component.html',
  styleUrls: ['./words-box.component.scss']
})
export class WordsBoxComponent {
  words = ['testing', 'making', 'wordle']
}
