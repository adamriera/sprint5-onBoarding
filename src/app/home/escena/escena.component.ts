import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { iStep } from '../../interfaces/iStep';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.css'
})
export class EscenaComponent {
  counter: number = 0;
  @Input() frasesArray: iStep[] = [];

  onNext() {
    if (this.counter != this.frasesArray.length - 1) {
      this.counter++;
    }
  }

  onPrevious() {
    if (this.counter > 0) {
      this.counter--;
    }
  }

  changeStep(index: number) {
    this.counter = index;
  }
}
