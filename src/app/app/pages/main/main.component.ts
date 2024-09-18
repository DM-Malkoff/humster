import { Component } from '@angular/core';
import { DrawerComponent } from '../../components/drawer/drawer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [DrawerComponent, RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  onClickViral(e: any) {
    if (navigator.vibrate) {
      navigator.vibrate(200);
    }
  }
}
