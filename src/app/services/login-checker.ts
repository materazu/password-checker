import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root',
})
export class LoginChecker {
  /**
   * Check a login
   */
  checkLogin(usernameTyped: string, passwordTyped: string): boolean {
    const { username, password } = environment.user;
    const usernameMatched = bcrypt.compareSync(usernameTyped, username);
    const passwordMatched = bcrypt.compareSync(passwordTyped, password);

    return usernameMatched && passwordMatched;
  }
}
