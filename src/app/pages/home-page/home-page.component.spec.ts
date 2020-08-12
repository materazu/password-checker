import {
  async,
  TestBed,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
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

  it('should create the home page component', () => {
    const fixture = TestBed.createComponent(HomePageComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });
});
