import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './router/routes';
import {LocationPageComponent} from './pages/location-page/location-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { NavigationComponent } from './pages/welcome-page/navigation/navigation.component';
import { JumbotronComponent } from './pages/welcome-page/jumbotron/jumbotron.component';
import { CarouselComponent } from './pages/welcome-page/carousel/carousel.component';
import {CarouselModule} from 'ngx-bootstrap';
import { FirstContentComponent } from './pages/welcome-page/first-content/first-content.component';
import { CardComponent } from './pages/welcome-page/component/card/card.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SecondContentComponent } from './pages/welcome-page/second-content/second-content.component';
import { CardDetailComponent } from './pages/welcome-page/component/card-detail/card-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationPageComponent,
    WelcomePageComponent,
    NavigationComponent,
    JumbotronComponent,
    CarouselComponent,
    FirstContentComponent,
    CardComponent,
    SecondContentComponent,
    CardDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
