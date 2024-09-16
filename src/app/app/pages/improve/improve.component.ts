import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CircleProgressComponent } from '../../components/circle-progress/circle-progress.component';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-improve',
  standalone: true,
  imports: [NgFor, CircleProgressComponent, CardComponent],
  templateUrl: './improve.component.html',
  styles: `
    .linearGradient {
      background: linear-gradient(180deg, #11E7EE 0%, #3F4248 100%);
    }
  `,
})
export class ImproveComponent {
  activeTab = 'Personal';
  bodyItems = [
    { title: 'Food', image: '/food.jpg', cost: 15, income: 320, balance: 45 },
    { title: 'Sport', image: '/sport.jpg', cost: 25, income: 320, balance: 80 },
    {
      title: 'Medicine',
      image: '/medicine.jpg',
      cost: 75,
      income: 320,
      balance: 230,
    },
  ];
  skillItems = [
    { title: 'Mind', image: '/mind.jpg', cost: 110, income: 320, balance: 290 },
    {
      title: 'Ethics',
      image: '/ethics.jpg',
      cost: 40,
      income: 320,
      balance: 110,
    },
    {
      title: 'Emotions',
      image: '/emotions.jpg',
      cost: 150,
      income: 320,
      balance: 330,
    },
  ];

  tabs = ['Personal', 'Work', 'Realty'];

  getActiveTabClass(tab: string) {
    return this.activeTab === tab
      ? 'flex-1 py-2 px-4 rounded-[12px] text-white linearGradient scale-[1.05] transition-all text-shadow-letter'
      : 'flex-1 py-2 px-4 rounded-[12px] text-white transition-all';
  }
}
