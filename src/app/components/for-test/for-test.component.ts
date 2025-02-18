import { Component, computed, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Item} from '../../app.component';
@Component({
  selector: 'app-for-test',
  standalone: true,
  imports: [
    CommonModule, // Need to include this for *ngIf to work
  ],
  templateUrl: './for-test.component.html',
  styleUrl: './for-test.component.scss'
})
export class ForTestComponent {

  // New way
  items = signal<Item[]>([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
  ]);
  itemNames = computed<string[]>(() => {
    console.log('Render computed list');
    return this.items().map((item) => item.name)
  });

  // Old way
  itemsOld: Item[] = [
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
  ];

  getItemNamesOld(): string[] {
    console.log('Render *ngFor list');
    return this.itemsOld.map((item) => item.name);
  }

  // Helper Methods
  addItem(): void {
    const newIndex = this.items().length + 1;
    this.items.set([...this.items(), { id: `${newIndex}`, name: `Item ${newIndex}` }]);
    this.itemsOld = [...this.itemsOld, { id: `${newIndex}`, name: `Item ${newIndex}` }];
  }
}
