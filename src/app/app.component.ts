import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { RoutesPath } from './app.types';
import { initBackButton } from '@telegram-apps/sdk';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, RouterModule],
  template: `
    <main class="flex flex-col main-height">
      <div class="scroll">
        <router-outlet></router-outlet>
      </div>

      @if (currentUrl !== '/lead') {
      <div
        class="flex justify-center h-[70px] gap-12 nav-background px-2 pt-3 py-2 border-main-theme border-t text-white pr-[20px]"
      >
        <div class="relative w-[40px] h-[40px]">
          <img
            routerLink="main"
            [class]="imageClasses"
            src="assets/person.png"
            class="h-[80px]"
          />
        </div>
        <div
          *ngFor="let item of bottomNavItems"
          class="flex flex-col items-center w-[30px]"
          [routerLink]="item.to"
          (click)="vibrate"
        >
          <object style="pointer-events:none" class="h-7 mb-1" type="image/svg+xml" [data]="isActive(item.to) ? item.activeSrc : item.src" alt="Icon"></object>
          <span class="text-[10px] text-[#7A7C82]">{{ item.label }}</span>
        </div>
      </div>
      }
    </main>
  `,
  styleUrl: './app.component.css'
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

  vibrate() {
    if (navigator.vibrate) {
      navigator.vibrate(200);
    } else {
      console.log('Вибрация не поддерживается на этом устройстве');
    }
  }

  isActive(path: string) {
    return this.currentUrl.includes(path);
  }

  ngOnInit() {
    const [backButton] = initBackButton();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;

        this.sections.forEach((item) => {
          if(this.currentUrl === `/${item.to}`){
            backButton.show();
          }
        })

        backButton.on('click', () => {
          window.location.href = '/';
        });

        if (this.currentUrl === '/main'){
          backButton.hide();
        }
      }
    });
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

  sections = [
    ...this.bottomNavItems,
    {
      to: RoutesPath.lead,
    }
  ]
}
