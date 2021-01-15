import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './shoppingCart/cart/cart.component';
import { CheckoutComponent } from './shoppingCart/checkout/checkout.component';
import { ProductComponent } from './shoppingCart/product/product.component';
import { ShopComponent } from './shoppingCart/shop/shop.component';
import { TermandconditionComponent } from './termandcondition/termandcondition.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactComponent},
  {path: "term-and-condition", component: TermandconditionComponent},
  {path: "shop", component: ShopComponent},
  {path: "cart", component: CartComponent},
  {path: "checkout", component: CheckoutComponent},
  {path: "product/:id", component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
