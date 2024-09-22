import { Component } from '@angular/core';
import { DrawerComponent } from '../../components/drawer/drawer.component';

@Component({
  selector: 'app-earn',
  standalone: true,
  imports: [DrawerComponent],
  templateUrl: './earn.component.html',
  styleUrl: './earn.component.css',
})
export class EarnComponent {
  selectedShare: null | 'dailyReward' | 'tg' | 'inst' | 'youtube' = null;
  activeTab: 'gaming' | 'partners' = 'gaming';

  drawerOpen = false;

  get drawerIconSrc() {
    if (this.selectedShare === 'inst') return 'assets/icons/inst.svg';
    if (this.selectedShare === 'tg') return 'assets/icons/tg.svg';
    if (this.selectedShare === 'youtube') return 'assets/icons/youtube.svg';
    return '';
  }

  openDrawer(share: 'dailyReward' | 'tg' | 'inst' | 'youtube') {
    this.drawerOpen = true;
    this.selectedShare = share;
  }

  closeDrawer() {
    this.drawerOpen = false;
    this.selectedShare = null;
  }

  isTabClass(tab: 'gaming' | 'partners') {
    return tab === this.activeTab
      ? 'font-semibold'
      : 'text-[#5C5E64] font-semibold';
  }

  getHeight() {
    if (this.selectedShare === 'youtube') {
      return '570px';
    } else if (this.selectedShare === 'dailyReward') {
      return '650px';
    } else {
      return '500px';
    }
  }
}
