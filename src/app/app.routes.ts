import { Routes } from '@angular/router';
import { RoutesPath } from './app.types';
import { MainComponent } from './app/pages/main/main.component';
import { ImproveComponent } from './app/pages/improve/improve.component';
import { FriendsComponent } from './app/pages/friends/friends.component';
import { EarnComponent } from './app/pages/earn/earn.component';
import { LeadComponent } from './app/pages/lead/lead.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: RoutesPath.main,
  },
  {
    path: RoutesPath.main,
    title: 'Main',
    component: MainComponent,
  },
  {
    path: RoutesPath.improve,
    title: 'Improve',
    component: ImproveComponent,
  },
  {
    path: RoutesPath.friend,
    title: 'Friends',
    component: FriendsComponent,
  },
  {
    path: RoutesPath.earn,
    title: 'Earn',
    component: EarnComponent,
  },
  {
    path: RoutesPath.lead,
    title: 'Lead board',
    component: LeadComponent,
  },
];
