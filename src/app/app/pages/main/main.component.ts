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
  onClickViral(event: any) {
    const target = event.target;
    const imgElement =
      target.tagName === 'IMG' ? target : target.querySelector('img');

    if (imgElement) {
      imgElement.classList.add('shake');
      setTimeout(() => {
        imgElement.classList.remove('shake');
      }, 2000); // 2 seconds
    }
  }
}
