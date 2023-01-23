import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { UserData } from 'src/app/pages/auth/auth.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  public userData?: UserData;

  constructor(private _appService: AppService) {}

  public ngOnInit(): void {
      this._appService.isLoggedIn$.subscribe(status => {
        if (status) {
          const userDataStr = localStorage.getItem("user-data");
          if (!userDataStr) {
            return;
          }
          this.userData = JSON.parse(userDataStr);
        } else {
          this.userData = undefined;
        }
      })
  }
}
