import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RoutesPath } from './app.types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, RouterModule],
  template: `
    <main class="flex flex-col main-height">
      <router-outlet></router-outlet>
      <div class="mt-auto">
        <div
          class="flex justify-center gap-10 bg-[#26272C] py-4 border-main-theme border-t text-white"
        >
          <div class="relative w-[40px] h-[40px]">
            <img
              class="absolute-center h-34 !top-0 shadow-image"
              src="assets/person.png"
            />
          </div>
          <div
            *ngFor="let item of bottomNavItems"
            key="{item.label}"
            class="flex flex-col items-center"
            [routerLink]="item.to"
          >
            <img [src]="item.src" class="h-8 mb-1" />
            <span class="text-xs">{{ item.label }}</span>
          </div>
        </div>
      </div>
    </main>
  `,
})
export class AppComponent {
  title = 'hamster';

  bottomNavItems = [
    {
      icon: 'fa-solid fa-wand-magic-sparkles',
      src: 'assets/icons/improve.svg',
      label: 'Improve',
      to: RoutesPath.main,
    },
    {
      icon: 'fa-solid fa-user-group',
      src: 'assets/icons/people.svg',
      label: 'Friends',
      to: RoutesPath.main,
    },
    {
      icon: 'fa-solid fa-sack-dollar',
      src: 'assets/icons/earn.svg',
      label: 'Earn',
      to: RoutesPath.main,
    },
    {
      icon: 'fa-solid fa-share-from-square',
      src: 'assets/icons/airdrop.svg',
      label: 'AirDrop',
      to: RoutesPath.main,
    },
  ];
}
