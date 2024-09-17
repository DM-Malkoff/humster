import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true,
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<void>();
  @Input() ignoreClickOutsideClass: string = '';

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: HTMLElement): void {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    const clickedIgnoredElement = this.isElementOrParentHasClass(
      targetElement,
      this.ignoreClickOutsideClass
    );

    if (!clickedInside && !clickedIgnoredElement) {
      this.clickOutside.emit();
    }
  }

  private isElementOrParentHasClass(
    element: HTMLElement,
    className: string
  ): boolean {
    let node: HTMLElement | null = element;
    while (node) {
      if (node.classList && node.classList.contains(className)) {
        return true;
      }
      node = node.parentElement;
    }
    return false;
  }
}
