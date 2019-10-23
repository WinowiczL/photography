import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './router/routes';
import {LocationPageComponent} from './pages/location-page/location-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationPageComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
