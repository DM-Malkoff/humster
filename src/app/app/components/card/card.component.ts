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
      >
          1m 
      </app-circle-progress>
      <img
        [src]="item.image"
        [alt]="item.title"
        class="w-[66px] h-[66px] rounded-lg mr-4 mt-[1px]"
      />
      
      <div class="flex w-full justify-between">
        <div class="flex flex-col h-full">
          <span>{{ item.title }}</span>
    
          <div class="flex gap-1">
            <img src="assets/icons/coin-up_new.svg" alt="Star" class="w-4 h-4 mt-[1px]" />
            <span>{{ item.income }}</span>
          </div>
          <span *ngIf="needMoreFriedns" class="flex items-center">
            <img src="assets/icons/lock.svg" alt="Coin" class="w-3 h-3 mr-1" />
            Need 1 more friends
          </span>
        </div>

        <!--  -->
        <div
          *ngIf="mode === 'base'"
          class="flex flex-col items-center justify-between h-full"
        >
          <span> Income </span>
          <span>
            {{ item.income }}
          </span>
        </div>
        <!--  -->

        <div
          *ngIf="mode === 'additional'"
          class="flex flex-row items-center ml-4 gap-1 mr-2"
        >
          <img src="assets/icons/coin.svg" alt="Coin" class="w-4 h-4" />

          <span>{{ item.balance }}</span>
        </div>

        <div
          *ngIf="mode === 'base'"
          class="flex flex-row items-center ml-4 gap-3"
        >
          <span class="flex items-center">
            <img src="assets/icons/coin.svg" alt="Star" class="w-4 h-4 mr-1 mt=[1px]" />
            {{ item.balance }}
          </span>
          <app-circle-progress [progress]="10"> 1m </app-circle-progress>
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
