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
  @Input() padding: string = '20px';
  @Input() height: number | string = '34%';

  close() {
    this.isOpen = false;
  }
}
