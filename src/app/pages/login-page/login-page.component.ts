import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

import { LoginManager } from '../../services/login-manager';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  private loginEventSubscribor;

  constructor(
    private readonly loginManager: LoginManager,
    private readonly router: Router,
  ) {}

  ngOnInit() {
    this.loginEventSubscribor = this.loginManager
      .loginEvent
      .subscribe(userIsAuthorized => {
        if (userIsAuthorized) {
          this.router.navigate(['home']);
        }
      })
    ;
  }

  ngOnDestroy() {
    this.loginEventSubscribor.unsubscribe();
  }
}
