import { Router } from '@angular/router';
import {
  Component,
  OnInit,
} from '@angular/core';

import { LoginManager } from './services/login-manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private readonly loginManager: LoginManager,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.loginManager.logoutEvent.subscribe(_ => {
      this.router.navigate(['/']);
    });
  }
}
