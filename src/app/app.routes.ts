import { Routes } from '@angular/router';
import { RoutesPath } from './app.types';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: RoutesPath.main,
  },
  {
    path: RoutesPath.main,
    title: 'Main',
    loadComponent: () =>
      import('./app/pages/main/main.component').then((m) => m.MainComponent),
  },
  {
    path: RoutesPath.improve,
    title: 'Improve',
    loadComponent: () =>
      import('./app/pages/improve/improve.component').then(
        (m) => m.ImproveComponent
      ),
  },
  {
    path: RoutesPath.friend,
    title: 'Friends',
    loadComponent: () =>
      import('./app/pages/friends/friends.component').then(
        (m) => m.FriendsComponent
      ),
  },
];
