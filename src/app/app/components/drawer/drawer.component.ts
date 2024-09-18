import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ClickOutsideDirective } from '../../../click-outside.directive';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [ClickOutsideDirective, NgClass],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css',
})
export class DrawerComponent implements OnChanges {
  @Input() className: string = '';
  @Input() hideIcon = false;
  @Input() isOpen = false;
  @Input() padding: string = '20px';
  @Input() margin: string = '50px 0 0 0';
  @Input() height: number | string = '34%';
  @Input() ignoreClickOutsideClass: string = '';

  @Output() onClose = new EventEmitter<void>();

  close() {
    this.isOpen = false;
    this.onClose.emit();
  }

  open() {
    this.isOpen = true;
  }

  get drawerClass() {
    if (!this.className) return 'drawer';
    return this.className + ' drawer';
  }

  clickOutside() {
    this.close();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
