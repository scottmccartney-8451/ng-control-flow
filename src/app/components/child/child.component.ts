import {Component, computed, EventEmitter, Input, input, Output, output} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  // New Way (NOTE: THE INPUTS ARE SIGNALS)
  name = input.required<string>();
  update = output<string>();
  // You can then use the input signal in a computed()
  displayName = computed<string>(() => `My name is: ${this.name()}`);

  // Old Way
  @Input({ required: true }) nameOld: string = '';
  @Output() updateOld = new EventEmitter<string>();

  getDisplayName() {
    return `(OLD): My name is: ${this.nameOld}`;
  }

  emitUpdate(event: any) {
    this.update.emit(event.target.value);
  }

  emitUpdateOld(event: any) {
    this.updateOld.emit(event.target.value);
  }
}
