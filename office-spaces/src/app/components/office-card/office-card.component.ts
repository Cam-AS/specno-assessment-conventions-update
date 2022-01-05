import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Office } from 'src/app/models/office';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { OfficeService } from 'src/app/services/office.service';

@Component({
  selector: 'app-office-card',
  templateUrl: './office-card.component.html',
  styleUrls: ['./office-card.component.css'],
})
export class OfficeCardComponent implements OnInit {
  @Input() offices: Office[] = [];
  @Input() office: Office;

  status: boolean[] = [];
  open: boolean = false;

  colors: string[] = [
    'assets/icons/orange.svg',
    'assets/icons/peach.svg',
    'assets/icons/red.svg',
    'assets/icons/brown.svg',
    'assets/icons/light-pink.svg',
    'assets/icons/dark-pink.svg',
    'assets/icons/grey.svg',
    'assets/icons/green.svg',
    'assets/icons/violet.svg',
    'assets/icons/blue.svg',
    'assets/icons/purple.svg',
  ];

  constructor(private router: Router, private loadingService: LoadingService, private officeService: OfficeService) {}

  async ngOnInit() {
    for (let i = 0; i < this.offices.length; i++) {
      this.status.push(false);
    }
  }

  fetchColor(color: string) {
    switch (color) {
      case 'assets/icons/orange.svg':
        return 'linear-gradient(2deg,rgb(255, 190, 11) 33.3%,rgb(235, 170, 11) 33.3% 66.6%,rgb(205, 150, 11) 66.6% 100%)';
      case 'assets/icons/peach.svg':
        return 'linear-gradient(2deg,rgb(255, 155, 113) 33.3%,rgb(235, 135, 103) 33.3% 66.6%,rgb(215, 115, 93) 66.6% 100%)';
      case 'assets/icons/red.svg':
        return 'linear-gradient(2deg,rgb(251, 86, 7) 33.3%,rgb(231, 66, 7) 33.3% 66.6%,rgb(211, 66, 7) 66.6% 100%)';
      case 'assets/icons/brown.svg':
        return 'linear-gradient(2deg,rgb(151, 81, 44) 33.3%,rgb(131, 61, 24) 33.3% 66.6%,rgb(111, 41, 14) 66.6% 100%)';
      case 'assets/icons/light-pink.svg':
        return 'linear-gradient(2deg,rgb(219, 186, 221) 33.3%,rgb(199, 166, 201) 33.3% 66.6%,rgb(189, 146, 181) 66.6% 100%)';
      case 'assets/icons/dark-pink.svg':
        return 'linear-gradient(2deg,rgb(255, 0, 110) 33.3%,rgb(235, 0, 100) 33.3% 66.6%,rgb(215, 0, 90) 66.6% 100%)';
      case 'assets/icons/grey.svg':
        return 'linear-gradient(2deg,rgb(169, 240, 209) 33.3%,rgb(149, 220, 199) 33.3% 66.6%,rgb(129, 210, 189) 66.6% 100%)';
      case 'assets/icons/green.svg':
        return 'linear-gradient(2deg,rgb(0, 180, 2) 33.3%,rgb(0, 160, 2) 33.3% 66.6%,rgb(0, 140, 2) 66.6% 100%)';
      case 'assets/icons/violet.svg':
        return 'linear-gradient(2deg,rgb(72, 157, 218) 33.3%,rgb(62, 137, 198) 33.3% 66.6%,rgb(52, 127, 188) 66.6% 100%)';
      case 'assets/icons/blue.svg':
        return 'linear-gradient(2deg,rgb(0, 114, 232) 33.3%,rgb(0, 94, 212) 33.3% 66.6%,rgb(0, 84, 202) 66.6% 100%)';
      case 'assets/icons/purple.svg':
        return 'linear-gradient(2deg,rgb(131, 56, 236) 33.3%,rgb(111, 46, 216) 33.3% 66.6%,rgb(91, 36, 206) 66.6% 100%)';
      default:
        return '';
    }
  }

  toggleSingleDrawer() {
    this.open = !this.open;
  }

  toggleDrawer(i: number) {
    this.status[i] = !this.status[i];
  }

  officeCardClicked(officeId: string) {
    this.router.navigate(['/office/' + officeId]);
  }

  editOfficeClicked(officeId: string) {
    this.router.navigate(['/edit-office/' + officeId]);
  }
}
