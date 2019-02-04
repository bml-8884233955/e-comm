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
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchComponent } from './search/search.component';
import { FormatDate } from './pipes/format-date.pipe';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductSearchComponent} from './product-search/product-search.component';

import { MobileService } from './service/mobile.service';
import { SignUpService } from './service/signup.service';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ProductsComponent,
    ProductListComponent,
    SearchComponent,
    ProductDetailComponent,
    ProductSearchComponent,
    FormatDate,
    AboutComponent,
    CartComponent
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
