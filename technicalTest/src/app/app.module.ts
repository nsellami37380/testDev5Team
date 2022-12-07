import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Exe1Component } from './exe1/exe1.component';
import { Exe2Component } from './exe2/exe2.component';
import { HeaderComponent } from './header/header.component';
import { Exe3Component } from './exe3/exe3.component';
import { FormReceiptComponent } from './form-receipt/form-receipt.component';
import { FormsModule } from '@angular/forms';
import { ListReceiptComponent } from './list-receipt/list-receipt.component';
import {DatePipe} from '@angular/common';
import { Exe4Component } from './exe4/exe4.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Exe1Component,
    Exe2Component,
    HeaderComponent,
    Exe3Component,
    FormReceiptComponent,
    ListReceiptComponent,
    Exe4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
