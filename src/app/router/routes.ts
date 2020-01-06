import {Routes} from '@angular/router';
import {WelcomePageComponent} from '../pages/welcome-page/welcome-page.component';
import {PortfolioPageComponent} from '../pages/portfolio-page/portfolio-page.component';
import {ContactPageComponent} from '../pages/contact-page/contact-page.component';

export const appRoutes: Routes = [
  {
    path: '', component:
    WelcomePageComponent
  },
  // {
  //   path: 'portfolio',
  //   loadChildren: () => import('../pages/portfolio-page/portfolio-page.module').then(m => m.PortfolioPageModule)
  // },
  {
    path: 'portfolio',
    component: PortfolioPageComponent
  },
  {
    path: 'kontakt',
    component: ContactPageComponent
  }
];
