import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ServicesComponent } from './components/services/services.component';
import { CardsViewComponent } from './components/cards-view/cards-view.component';
import { ApisComponent } from './components/apis/apis.component';
import { MonitoringComponent } from './components/monitoring/monitoring.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainContentComponent,
    ServicesComponent,
    CardsViewComponent,
    ApisComponent,
    MonitoringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
