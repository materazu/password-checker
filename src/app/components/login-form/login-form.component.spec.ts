import {
  async,
  TestBed,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        LoginFormComponent
      ],
    }).compileComponents();
  }));

  it('should create the login form component', () => {
    const fixture = TestBed.createComponent(LoginFormComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });
});
