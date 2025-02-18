import {Component, signal} from '@angular/core';
import {ForTestComponent} from './components/for-test/for-test.component';
import {IfTestComponent} from './components/if-test/if-test.component';
import {ChildComponent} from './components/child/child.component';

export type Item = {
  id: string;
  name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ForTestComponent,
    IfTestComponent,
    ChildComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name = signal<string>('My Name');
  nameOld = 'My Old Name';

  onNameUpdate(newName: string): void {
    this.name.set(newName);
  }

  onNameOldUpdate(newName: string): void {
    this.nameOld = newName;
  }
}
