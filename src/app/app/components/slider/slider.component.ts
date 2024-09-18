import { NgFor } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgFor],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  @Output() onChangeSlide = new EventEmitter<number>();
  slides = [
    {
      image: 'assets/images/header/man.png',
      alt: 'Slide 1',
      title: 'Homeless',
    },
    { image: 'assets/beginner.svg', alt: 'Slide 2', title: 'Begginer' },
    { image: 'assets/student.png', alt: 'Slide 3', title: 'Student' },
    { image: 'assets/workman.png', alt: 'Slide 4', title: 'Workman' },
    { image: 'assets/busy.png', alt: 'Slide 5', title: 'Businessman' },
  ];
  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.onChangeSlide.emit(this.currentIndex);
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;

    this.onChangeSlide.emit(this.currentIndex);
  }
}
