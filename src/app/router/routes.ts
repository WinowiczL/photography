import {Routes} from '@angular/router';
import {WelcomePageComponent} from '../pages/welcome-page/welcome-page.component';

export const appRoutes: Routes = [
  {
    path: '', component:
    WelcomePageComponent
  },
  {
    path: 'portfolio',
    loadChildren: () => import('../pages/portfolio-page/portfolio-page.module').then(m => m.PortfolioPageModule)
  },
];
