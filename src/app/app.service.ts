import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public isLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor() { }
}
