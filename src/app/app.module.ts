import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TermandconditionComponent } from './termandcondition/termandcondition.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shoppingCart/shop/shop.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './shoppingCart/product/product.component';
import { CartComponent } from './shoppingCart/cart/cart.component';
import { CheckoutComponent } from './shoppingCart/checkout/checkout.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environment
import { counterReducer } from './storeRxjs/reducers/counter.reducer';
import rootReducer from "./storeRxjs/reducers";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    TermandconditionComponent,
    HomeComponent,
    ShopComponent,
    ProductComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ count: rootReducer }),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
