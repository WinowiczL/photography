import {Routes} from '@angular/router';
import {LocationPageComponent} from '../pages/location-page/location-page.component';
import {WelcomePageComponent} from '../pages/welcome-page/welcome-page.component';

export const appRoutes: Routes = [
  {
    path: '', component:
    LocationPageComponent
  },
  {
    path: 'wroclaw', component: WelcomePageComponent
  },
  {
    path: 'tomaszow-boleslawiecki', component: WelcomePageComponent
  }
];
