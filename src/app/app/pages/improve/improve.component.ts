import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { CircleProgressComponent } from '../../components/circle-progress/circle-progress.component';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-improve',
  standalone: true,
  imports: [NgFor, CircleProgressComponent, CardComponent, NgStyle],
  templateUrl: './improve.component.html',
  styleUrl: './improve.component.css',
})
export class ImproveComponent {
  activeTab = 'Personal';
  activeIndex: number = 0;
  bodyItems = [
    { title: 'Food', image: 'assets/default.png', cost: 15, income: 320, balance: 45 },
    { title: 'Sport', image: 'assets/default.png', cost: 25, income: 320, balance: 80 },
    {
      title: 'Medicine',
      image: 'assets/default.png',
      cost: 75,
      income: 320,
      balance: 230,
    },
  ];
  skillItems = [
    { title: 'Mind', image: 'assets/default.png', cost: 110, income: 320, balance: 290 },
    {
      title: 'Ethics',
      image: 'assets/default.png',
      cost: 40,
      income: 320,
      balance: 110,
    },
    {
      title: 'Emotions',
      image: 'assets/default.png',
      cost: 150,
      income: 320,
      balance: 330,
    },
  ];

  tabs = ['Personal', 'Work', 'Realty'];

  getActiveTabClass(tab: string) {
    return this.activeTab === tab ? 'tab-button active' : 'tab-button';
  }

  getBackgroundPosition() {
    return `calc(${this.activeIndex} * 100% / ${this.tabs.length})`;
  }
}
