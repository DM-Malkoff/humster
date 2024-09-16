import { Component } from '@angular/core';
import { DrawerComponent } from '../../components/drawer/drawer.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [DrawerComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}
