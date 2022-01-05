import { Component, OnInit } from "@angular/core";

import { ILoading } from "../../services/loading/loading.interface";
import { LoadingService } from "../../services/loading/loading.service";

@Component({
  selector: "app-loading",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.css"]
})
export class LoadingComponent implements OnInit, ILoading {
  
  show: Boolean = false;

  constructor(private loaderService: LoadingService) {
    loaderService.subscribeToAlerts(this);
  }

  ngOnInit() {
  }

  showLoading() {
    this.show = true;
  }
  
  hideLoading() {
    this.show = false;
  }
}
