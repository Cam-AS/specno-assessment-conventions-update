import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Office } from 'src/app/models/office';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { OfficeService } from 'src/app/services/office.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  offices: Office[] = [];

  constructor(
    private router: Router,
    private loadingService: LoadingService,
    private officeService: OfficeService
  ) {}

  ngOnInit(): void {
    this.fetchOffices();
  }

  async fetchOffices() {
    this.loadingService.show();

    try {
      this.offices = await this.officeService.find();
    } catch (err) {
      console.log(err);
    }
    this.loadingService.hide();
  }

  addOfficeClicked() {
    this.router.navigate(['/add-office']);
  }
}
