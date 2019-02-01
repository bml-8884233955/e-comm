import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/signin.component';
import { SignUpComponent } from './sign-up/signup.component';
import { ListDisplayComponent } from './list-display/list-display.component';
import { ListComponent } from './list/list.component';
import {SearchComponent} from './search/search.component';
import { FormatDate } from './format-date/format-date.pipe';

import { MobileService } from './service/mobile.service';
import { SignUpService } from './service/signup.service';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ListDisplayComponent,
    ListComponent,
    SearchComponent,
    FormatDate
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [MobileService, SignUpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
