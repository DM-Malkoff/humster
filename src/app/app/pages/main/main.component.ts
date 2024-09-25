import { Component, OnDestroy, OnInit } from '@angular/core';
import { DrawerComponent } from '../../components/drawer/drawer.component';
import { RouterModule } from '@angular/router';
import { TimeFormatPipe } from '../../pipes/time-format-pipe.pipe';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [DrawerComponent, RouterModule, TimeFormatPipe],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit, OnDestroy{
  public timeInSeconds = 10;
  public initialTimerWidth = 10;
  public currentTimerWidth = 0;
  public maxTimerWidth = 200;
  public timeIsOut = false;
  private animationFrameId: number | null = null;
  private intervalId: any;

  constructor() {
    this.currentTimerWidth = this.initialTimerWidth;
  }

  public ngOnInit() {
    const totalDuration = this.timeInSeconds * 1000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;

      const remainingTime = totalDuration - elapsedTime;

      if (remainingTime > 0) {
        this.currentTimerWidth = this.maxTimerWidth * (1 - (remainingTime / totalDuration));
        this.animationFrameId = requestAnimationFrame(animate);
      } else {

        this.currentTimerWidth = this.maxTimerWidth;
        this.animationFrameId = null;
      }
    };

    this.animationFrameId = requestAnimationFrame(animate);

    this.intervalId = setInterval(() => {
      if (this.timeInSeconds > 0) {
        this.timeInSeconds--;
      } else {
        this.timeIsOut = true;
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  public ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  onClickViral(event: any) {
    const target = event.target;
    const imgElement =
      target.tagName === 'IMG' ? target : target.querySelector('img');

    if (imgElement) {
      imgElement.classList.add('shake');
      setTimeout(() => {
        imgElement.classList.remove('shake');
      }, 2000);
    }
  }
}
