import {
  Component,
  OnInit,
} from '@angular/core';

import { LoginManager } from '../../services/login-manager';

import { shuffledNumbers } from './../../../environments/global-config/shuffled-numbers';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  /** Shuffled numbers for the password selector */
  shuffledNumbers: number[] = shuffledNumbers;

  /** Password string */
  password: string[]|number[];

  /** Username model for data-binding on form input */
  username: string;

  /** Step for the password number on select */
  step: number;

  /** Status of authentication for animate */
  loginFailed: boolean;

  constructor(
    private readonly loginManager: LoginManager,
  ) {}

  /**
   * Init the component
   */
  ngOnInit(): void {
    this.clearPassword();
  }

  /**
   * Reset the password field
   */
  clearPassword(): void {
    this.step = 0;
    this.password = ['', '', '', '', '', ''];
  }

  /**
   * Each time a user click on a number, it is added to the final password
   *
   * @param number number to add on the password field
   */
  addNumberToPassword(number: number): void {
    if (this.step === 6) {
      return;
    }

    this.password[this.step] = number.toString();
    this.step++;
  }

  /**
   * Check account through LoginChecker and try to connect user
   */
  login(): void {
    const password = this.password.join('');

    const logged = this.loginManager.checkLogin(this.username, password);

    if (!logged) {
      this.loginFailed = true;

      setTimeout(_ => {
        this.loginFailed = false;
        this.clearPassword();
      }, 500);
    }
  }
}
