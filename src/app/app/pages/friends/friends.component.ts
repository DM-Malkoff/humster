import { Component } from '@angular/core';
import { DrawerComponent } from '../../components/drawer/drawer.component';

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [DrawerComponent],
  templateUrl: './friends.component.html',
})
export class FriendsComponent {
  drawerOpen = false;
}
