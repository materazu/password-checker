import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';

import { LoginManager } from '../services/login-manager';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedUserGuard implements CanActivate {
  constructor(
    private readonly loginManager: LoginManager,
    private readonly router: Router,
  ) {}

  canActivate() {
    const authKey = localStorage.getItem('hashKey');

    const canActivate = this.loginManager.checkAuthentication(authKey);

    if (!canActivate) {
      this.router.navigate(['/']);
    }

    return canActivate;
  }
}
