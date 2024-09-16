import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css',
})
export class DrawerComponent {
  @Input() isOpen = false;

  close() {
    this.isOpen = false;
  }
}
