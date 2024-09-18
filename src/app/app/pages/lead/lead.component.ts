import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { SliderComponent } from '../../components/slider/slider.component';

@Component({
  selector: 'app-lead',
  standalone: true,
  imports: [NgFor, SliderComponent],
  templateUrl: './lead.component.html',
  styleUrl: './lead.component.css',
})
export class LeadComponent {
  activeSlide = 0;

  getBackground() {
    switch (this.activeSlide) {
      case 0:
        return 'homeless box';
      case 1:
        return 'student box';
      case 2:
        return 'begginer box';
      case 3:
        return 'workman box';
      case 4:
        return 'businessman box';
      default:
        return '';
    }
  }
}
