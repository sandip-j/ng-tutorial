import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public appService: AppService) {}

  public ngOnInit(): void {
    const userDataStr = localStorage.getItem("user-data");
    if (userDataStr) {
      this.appService.isLoggedIn$.next(true);
    }
  }
}
