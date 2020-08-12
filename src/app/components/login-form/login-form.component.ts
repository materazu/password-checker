import { LoginChecker } from './../../services/login-checker';
import { Component, OnInit } from '@angular/core';

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

  constructor(
    private readonly loginChecker: LoginChecker,
  ) {}

  /**
   * Init the component
   */
  ngOnInit() {
    this.clearPassword();
  }

  /**
   * Reset the password field
   */
  clearPassword() {
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
  login() {
    const password = this.password.join('');
    const userMatched = this.loginChecker.checkLogin(this.username, password);

    console.log(userMatched);
  }
}
