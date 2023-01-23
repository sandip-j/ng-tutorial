import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { isLoggedInAction } from 'src/app/app.action';
import { AppService } from 'src/app/app.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  public loginForm: FormGroup;

  constructor(private _fb: FormBuilder, private authService: AuthService, private _appService: AppService, private _route: Router, private store: Store) {
    this.loginForm = this._fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.maxLength(8)]]
    });
  }

  public getControl(key: string) {
    return this.loginForm.controls[key] as FormControl;
  }

  public onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(res => {
        this._appService.isLoggedIn$.next(true);
        this.store.dispatch(isLoggedInAction({ payload: true }));
        localStorage.setItem("user-data", JSON.stringify(res));
        this._route.navigateByUrl("");
      })
    } else {
      console.log("Invalid form!!");
    }
  }
}
