import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './router/routes';
import {LocationPageComponent} from './pages/location-page/location-page.component';
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
import {PortfolioPageComponent} from './pages/portfolio-page/portfolio-page.component';
import {FooterComponent} from './shared/footer/footer.component';
import {AboutMeComponent} from './pages/welcome-page/about-me/about-me.component';
import {ContactPageComponent} from './pages/contact-page/contact-page.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LocationPageComponent,
    WelcomePageComponent,
    PortfolioPageComponent,
    NavigationComponent,
    JumbotronComponent,
    CarouselComponent,
    SessionContentComponent,
    CardComponent,
    VoucherContentComponent,
    CardDetailComponent,
    FooterComponent,
    AboutMeComponent,
    ContactPageComponent,
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
