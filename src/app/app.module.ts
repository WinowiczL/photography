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

@NgModule({
  declarations: [
    AppComponent,
    LocationPageComponent,
    WelcomePageComponent,
    NavigationComponent,
    JumbotronComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
