import { Component, Input } from '@angular/core';
import { CircleProgressComponent } from '../circle-progress/circle-progress.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CircleProgressComponent, NgIf],
  template: `
    <div
      class="relative bg-[#3F4248] rounded-xl flex items-center p-2 pl-0 relative h-[68px] border-main-theme border"
    >
        <div *ngIf="isUnActive" class="absolute bg-black inset-0 bg-opacity-20 rounded-xl z-50"></div>
      <!--  -->
      <div
        *ngIf="mode === 'base'"
        class="flex flex-col items-center justify-between h-full absolute-center p-2"
      >
        <span> Income </span>
        <span>
          {{ item.income }}
        </span>
      </div>
      <!--  -->
<!--      <img-->
<!--        [src]="item.image"-->
<!--        [alt]="item.title"-->
<!--        class="w-16 h-16 rounded-lg mr-4"-->
<!--      />-->
      <img
        src="assets/default.png"
        [alt]="item.title"
        class="w-16 h-16 rounded-lg mr-4"
      />
      <div class="flex flex-col flex-grow h-full justify-between">
        <span>{{ item.title }}</span>

        <div class="flex gap-1">
          <img src="assets/icons/coin-up.svg" alt="Star" class="w-6 h-6" />
          <span>{{ item.income }}</span>
        </div>
      </div>

      <div
        *ngIf="mode === 'additional'"
        class="flex flex-row items-center ml-4 gap-1 mr-2"
      >
        <img src="assets/icons/coin.svg" alt="Coin" class="w-6 h-6" />

        <span>{{ item.balance }}</span>
      </div>

      <div
        *ngIf="mode === 'base'"
        class="flex flex-row items-center ml-4 gap-3"
      >
        <span class="flex items-center">
          <img src="assets/icons/coin.svg" alt="Star" class="w-6 h-6" />
          {{ item.balance }}
        </span>
        <app-circle-progress [progress]="10"> 1m </app-circle-progress>
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
}
