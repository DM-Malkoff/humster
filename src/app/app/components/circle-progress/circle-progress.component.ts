import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circle-progress',
  standalone: true,
  imports: [],
  template: `
    <div
      class="w-8 h-8 rounded-full flex items-center justify-center circular-progress"
    >
      <svg width="32" height="32" viewBox="0 0 32 32">
        <circle class="bg" cx="16" cy="16" r="14"></circle>
        <circle
          class="progress"
          cx="16"
          cy="16"
          r="14"
          [attr.stroke-dasharray]="getProgress()"
        ></circle>
      </svg>
      <span class="text-xs absolute inset-0 flex items-center justify-center"
        ><ng-content></ng-content>
      </span>
    </div>
  `,
  styles: `
  .circular-progress {
    position: relative;
    width: 32px;
    height: 32px;
  }

  .circular-progress svg {
    transform: rotate(90deg);
  }

  .circular-progress circle {
    fill: none;
    stroke-width: 4;
  }

  .circular-progress .bg {
    stroke: gray;
  }

  .circular-progress .progress {
    stroke: #3CFF00;
    transition: stroke-dasharray 0.3s;
  }
  `,
})
export class CircleProgressComponent {
  @Input({ required: true }) progress!: number;

  getProgress(): string {
    const radius = 14;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (this.progress / 100) * circumference;
    return `${circumference - offset}, ${circumference}`;
  }
}
