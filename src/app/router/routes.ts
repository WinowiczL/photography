import {Routes} from '@angular/router';
import {WelcomePageComponent} from '../pages/welcome-page/welcome-page.component';
import {SessionContentComponent} from '../pages/welcome-page/session-content/session-content.component';
import {SessionNoworodkowaComponent} from '../pages/welcome-page/session-content/session-noworodkowa/session-noworodkowa.component';
import {SessionDzieciecaComponent} from '../pages/welcome-page/session-content/session-dziecieca/session-dziecieca.component';
import {SessionCiazowaComponent} from '../pages/welcome-page/session-content/session-ciazowa/session-ciazowa.component';
import {SessionRodzinnaComponent} from '../pages/welcome-page/session-content/session-rodzinna/session-rodzinna.component';
import {SessionPortretowaComponent} from '../pages/welcome-page/session-content/session-portretowa/session-portretowa.component';
import {SessionSlubnaComponent} from '../pages/welcome-page/session-content/session-slubna/session-slubna.component';
import {PriceOptionComponent} from '../pages/welcome-page/component/price-option/price-option.component';

export const appRoutes: Routes = [
  {
    path: '', component:
    WelcomePageComponent,
    children: [{
      path: '', component: SessionContentComponent
    }, {
      path: 'noworodkowa', component: SessionNoworodkowaComponent, children: []
    },
      {
        path: 'dziecieca', component: SessionDzieciecaComponent,
      },
      {
        path: 'ciazowa', component: SessionCiazowaComponent, children: [
          {
          path: 'cena', component: PriceOptionComponent
        },
        ]
      },
      {
        path: 'rodzinna', component: SessionRodzinnaComponent,
      },
      {
        path: 'portretowa', component: SessionPortretowaComponent,
      },
      {
        path: 'slubna', component: SessionSlubnaComponent,
      }]
  }
];
