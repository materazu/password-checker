import { Component } from '@angular/core';

import { LoginManager } from './../../services/login-manager';

@Component({
  selector: 'app-homr-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  constructor(
    private readonly loginManager: LoginManager,
  ) {}

  /**
   * Logout from app
   */
  logout() {
    this.loginManager.logout();
  }
}
