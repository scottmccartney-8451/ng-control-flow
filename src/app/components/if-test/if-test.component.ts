import {Component, signal} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-if-test',
  standalone: true,
    imports: [
        CommonModule, // Need to include this for *ngIf to work
    ],
  templateUrl: './if-test.component.html',
  styleUrl: './if-test.component.scss'
})
export class IfTestComponent {
  score = signal<number>(0);

  scoreOld: number;

  constructor() {
    const temp = Math.random() * 100;
    this.score.set(temp);
    this.scoreOld = temp;
  }
}
