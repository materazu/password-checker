import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

import { LoginManager } from '../../services/login-manager';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  /** Subscription for login event */
  private loginEventSubscribor: Subscription;

  constructor(
    private readonly loginManager: LoginManager,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.loginEventSubscribor = this.loginManager
      .loginEvent
      .subscribe(userIsAuthorized => {
        if (userIsAuthorized) {
          this.router.navigate(['home']);
        }
      })
    ;
  }

  ngOnDestroy(): void {
    this.loginEventSubscribor.unsubscribe();
  }
}
