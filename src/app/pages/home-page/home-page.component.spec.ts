import {
  async,
  TestBed,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomePageComponent } from './home-page.component';

describe('LoginPageComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HomePageComponent
      ],
    }).compileComponents();
  }));

  it('should create the login page component', () => {
    const fixture = TestBed.createComponent(HomePageComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });
});
