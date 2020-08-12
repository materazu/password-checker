import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

import * as sha1 from 'crypto-js/sha1';
import * as bcrypt from 'bcryptjs';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginManager {
  /** Event for login try */
  loginEvent = new Subject<boolean>();

  /** Event for logout */
  logoutEvent = new Subject<boolean>();

  /**
   * Check a login
   */
  checkLogin(usernameTyped: string, passwordTyped: string) {
    const { username, password } = environment.user;
    const usernameMatched = bcrypt.compareSync(usernameTyped, username);
    const passwordMatched = bcrypt.compareSync(passwordTyped, password);
    const checked = usernameMatched && passwordMatched;

    if (checked) {
      const hashKey = sha1(`${usernameTyped}${passwordTyped}`);
      localStorage.setItem('hashKey', hashKey);
    }

    this.loginEvent.next(checked);
  }

  /**
   * Check the auth of user
   */
  checkAuthentication(authKey: string) {
    return authKey === environment.authBearer;
  }

  /**
   * Logout action emit event
   */
  logout() {
    localStorage.removeItem('authKey');
    this.logoutEvent.next();
  }
}
