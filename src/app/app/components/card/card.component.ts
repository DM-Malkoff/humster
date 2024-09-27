import { Component, Input } from '@angular/core';
import { CircleProgressComponent } from '../circle-progress/circle-progress.component';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CircleProgressComponent, NgIf, CommonModule],
  template: `
    <div
      class="relative text-[13px] bg-[#3F4248] rounded-xl flex items-center p-1 pl-0 relative h-[68px] border-main-theme border"
    >
      <div *ngIf="isUnActive" class="absolute bg-black inset-0 bg-opacity-20 rounded-xl z-50"></div>
      <app-circle-progress
        *ngIf="circleProgress"
        [progress]="circleProgress"
        class="absolute ml-[16px]"
      >1m</app-circle-progress>
      <img
        [src]="item.image"
        [alt]="item.title"
        class="w-[66px] h-[66px] rounded-lg mr-4 mt-[1px]"
      />

      <div class="flex w-full flex-col">
        <div class="flex h-full justify-between">
          <div class="flex flex-col">
            <span>{{ item.title }}</span>

            <div class="flex gap-1">
              <object style="pointer-events:none" class="w-4 h-4 mt-[1px]" type="image/svg+xml" data="assets/icons/coin-up_new.svg" alt="Star"></object>
              <span>{{ item.income }}</span>
            </div>
          </div>

          <div class="flex flex-col items-center justify-between h-full">
            <span>Income</span>
            <span>{{ item.income }}</span>
          </div>

          <div class="flex flex-row items-center ml-4 gap-1 mr-2">
            <object style="pointer-events:none" class="w-4 h-4" type="image/svg+xml" data="assets/icons/coin.svg" alt="Coin"></object>
            <span>{{ item.balance }}</span>
          </div>
        </div>
        <div>
          <span *ngIf="needMoreFriedns" class="flex items-center">
            <object style="pointer-events:none" class="w-3 h-3 mr-1" type="image/svg+xml" data="assets/icons/lock.svg" alt="Coin"></object>
            Need 1 more friends
          </span>
        </div>
      </div>
    </div>
  `,
})
export class CardComponent {
  @Input() mode: 'base' | 'additional' = 'base';
  @Input({ required: true }) item!: {
    title: string;
    image: string;
    cost: number;
    income: number;
    balance: number;
  };
  @Input() isUnActive: boolean = false;
  @Input() needMoreFriedns: boolean = false;
  @Input() circleProgress: number = 0;
}
