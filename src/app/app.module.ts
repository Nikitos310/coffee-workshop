import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {CoffeeEffects} from "./store/coffee.effects";
import {extModules} from "../environments/environment";
import {metaReducers, reducers} from "./store/coffee.reducers";
import {CoffeeHttpsService} from "./services/coffee-https.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers}),
    EffectsModule.forRoot([CoffeeEffects]),
    extModules,
  ],
  providers: [CoffeeHttpsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
