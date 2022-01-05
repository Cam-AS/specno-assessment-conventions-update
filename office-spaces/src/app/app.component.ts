import { Component, OnInit } from '@angular/core';
import { database } from '@appstrax/database';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'office-spaces';

  ngOnInit() {
    database.init(environment.api);
  }
}
