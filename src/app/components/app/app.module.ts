import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { SearchModule } from '../search/search.module'
import { SharedModule } from '../shared/shared.module';
import { CartModule } from '../cart/cart.module';
import { EquipmentModule } from '../equipment/components/equipment.module';
import { RentListModule } from '../rent-list/components/rent-list.module';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    SearchModule,
    CartModule,
    EquipmentModule,
    RentListModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
