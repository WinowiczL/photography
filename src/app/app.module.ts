import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './router/routes';
import {WelcomePageComponent} from './pages/welcome-page/welcome-page.component';
import {NavigationComponent} from './pages/welcome-page/navigation/navigation.component';
import {JumbotronComponent} from './pages/welcome-page/jumbotron/jumbotron.component';
import {CarouselComponent} from './pages/welcome-page/carousel/carousel.component';
import {CarouselModule} from 'ngx-bootstrap';
import {SessionContentComponent} from './pages/welcome-page/session-content/session-content.component';
import {CardComponent} from './pages/welcome-page/component/card/card.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {VoucherContentComponent} from './pages/welcome-page/voucher-content/voucher-content.component';
import {CardDetailComponent} from './pages/welcome-page/component/card-detail/card-detail.component';
import {FooterComponent} from './shared/footer/footer.component';
import {AboutMeComponent} from './pages/welcome-page/about-me/about-me.component';
import {ReactiveFormsModule} from '@angular/forms';
import {StudioContentComponent} from './pages/welcome-page/studio-content/studio-content.component';
import {SessionNoworodkowaComponent} from './pages/welcome-page/session-content/session-noworodkowa/session-noworodkowa.component';
import {SessionDzieciecaComponent} from './pages/welcome-page/session-content/session-dziecieca/session-dziecieca.component';
import {SessionCiazowaComponent} from './pages/welcome-page/session-content/session-ciazowa/session-ciazowa.component';
import {SessionRodzinnaComponent} from './pages/welcome-page/session-content/session-rodzinna/session-rodzinna.component';
import {SessionPortretowaComponent} from './pages/welcome-page/session-content/session-portretowa/session-portretowa.component';
import {SessionSlubnaComponent} from './pages/welcome-page/session-content/session-slubna/session-slubna.component';
import {ContactContentComponent} from './pages/welcome-page/contact-content/contact-content.component';
import {PriceOptionComponent} from './pages/welcome-page/component/price-option/price-option.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    NavigationComponent,
    JumbotronComponent,
    CarouselComponent,
    SessionContentComponent,
    CardComponent,
    VoucherContentComponent,
    CardDetailComponent,
    FooterComponent,
    AboutMeComponent,
    StudioContentComponent,
    SessionNoworodkowaComponent,
    SessionDzieciecaComponent,
    SessionCiazowaComponent,
    SessionRodzinnaComponent,
    SessionPortretowaComponent,
    SessionSlubnaComponent,
    ContactContentComponent,
    PriceOptionComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    }),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
