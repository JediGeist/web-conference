import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private appService: AppService,
              private homeService: HomeService) { }

  public ngOnInit(): void {
    setTimeout(() => {
      this.appService.selectedNavItem = null;
    }, 0);
  }
}
