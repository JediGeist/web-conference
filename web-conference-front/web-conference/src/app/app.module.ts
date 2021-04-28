import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { RoutingService } from './services/routing.service';
import { NotifyService } from './services/notify.service';
import { InputsModule } from '@progress/kendo-angular-inputs';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    InputsModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    AppService,
    RoutingService,
    NotifyService
  ]
})
export class AppModule { }
