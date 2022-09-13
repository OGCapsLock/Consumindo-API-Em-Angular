import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Placement as PopperPlacement, Options } from '@popperjs/core';
import {FormsModule} from "@angular/forms";
import {MatStepperModule} from '@angular/material/stepper';

import { HttpClientModule} from '@angular/common/http'
import { HeaderComponent } from './components/header/header.component';
import { CurrencyExchangeComponent } from './components/currency-exchange/currency-exchange.component';
import { CurrencyExchangeService } from './services/currency-exchange.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CurrencyExchangeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatStepperModule
  ],
  providers: [CurrencyExchangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
