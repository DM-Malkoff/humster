import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { RoutesPath } from './app.types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, RouterModule],
  template: `
    <main class="flex flex-col main-height">
      <router-outlet></router-outlet>

      @if (currentUrl !== '/lead') {
      <div
        class="flex justify-center h-[85px] gap-9 nav-background px-2 py-4 border-main-theme border-t text-white"
      >
        <div class="relative w-[40px] h-[40px]">
          <img
            routerLink="main"
            [class]="imageClasses"
            src="assets/person.png"
          />
        </div>
        <div
          *ngFor="let item of bottomNavItems"
          class="flex flex-col items-center"
          [routerLink]="item.to"
        >
          <img
            [src]="isActive(item.to) ? item.activeSrc : item.src"
            class="h-8 mb-1"
          />
          <span class="text-xs text-[#7A7C82]">{{ item.label }}</span>
        </div>
      </div>
      }
    </main>
  `,
})
export class AppComponent implements OnInit {
  title = 'hamster';

  currentUrl = '';

  get imageClasses() {
    return this.currentUrl.includes('main')
      ? 'absolute-center h-34 !top-0 shadow-image'
      : 'absolute-center h-34 !top-0 ';
  }

  constructor(private router: Router) {}

  isActive(path: string) {
    return this.currentUrl.includes(path);
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event.urlAfterRedirects);
        this.currentUrl = event.urlAfterRedirects;
      }
    });

    if ('Telegram' in window) {
      const tg = window.Telegram;
      tg.WebApp.headerColor = '#212121';
      tg.WebApp.expand();
    }
  }
  bottomNavItems = [
    {
      icon: 'fa-solid fa-wand-magic-sparkles',
      src: 'assets/icons/improve.svg',
      activeSrc: 'assets/icons/improve-active.svg',
      label: 'Improve',
      to: RoutesPath.improve,
    },
    {
      icon: 'fa-solid fa-user-group',
      src: 'assets/icons/people.svg',
      activeSrc: 'assets/icons/people-active.svg',
      label: 'Friends',
      to: RoutesPath.friend,
    },
    {
      icon: 'fa-solid fa-sack-dollar',
      src: 'assets/icons/earn.svg',
      activeSrc: 'assets/icons/earn-active.svg',
      label: 'Earn',
      to: RoutesPath.earn,
    },
    {
      icon: 'fa-solid fa-share-from-square',
      src: 'assets/icons/airdrop.svg',
      activeSrc: 'assets/icons/airdrop-active.svg',
      label: 'AirDrop',
      to: RoutesPath.air_drop,
    },
  ];
}
