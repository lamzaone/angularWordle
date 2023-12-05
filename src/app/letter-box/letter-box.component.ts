import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-letter-box',
  templateUrl: './letter-box.component.html',
  styleUrls: ['./letter-box.component.scss']
})
export class LetterBoxComponent {
  @Input() letter!: string;
  @Input() status?: number;

  containsUppercase(str:string): boolean {
    console.log(/[A-Z]/.test(str))
    return /[A-Z]/.test(str);
  }
}
