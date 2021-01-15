import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartFunctions } from 'src/app/shared/cart.functions';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products = [];

  cartItems = [];

  loaderCheck: boolean = true;

  localStorageCartKey: string = "myCartItemKey";

  constructor(private producrService: ProductService, private router: Router, private cartFunctionsObj: CartFunctions) { }

  ngOnInit(): void {
    this.producrService.all().subscribe(data => {
      this.products = data;
      this.loaderCheck = false;
    });
    this.loadCartItems();
    //this.cartFunctionsObj.loadCartItemsI();
    //console.log(this.cartFunctionsObj.getDatappI());
  }

  getCartItems_localStorage(){
    const localStorage_cartItems = JSON.parse(localStorage.getItem(this.localStorageCartKey));
    return localStorage_cartItems;
  }

  setCartItems_localStorage(cartItems: any){
    localStorage.setItem(this.localStorageCartKey, JSON.stringify(cartItems));
  }

  loadCartItems(){
    const storedItems = this.getCartItems_localStorage();
    if(storedItems !=null){
      this.cartItems = storedItems;
    }
  }

  removeCartItem(i: number, index: number, cartItem: any){
    const storedItems = this.getCartItems_localStorage();
    if(storedItems !=null){
      const new_items =  storedItems.filter(item => item.item_id != cartItem.item_id);
      this.setCartItems_localStorage(new_items);
    }
    this.loadCartItems();
  }

  addtocart(product: any){

    let productExist = false;
    const storedItems = this.getCartItems_localStorage();
    if(storedItems !=null){
      for (let i of storedItems) {
        if(i.product_id == product.id){
          i.qty++;
          productExist = true;
          this.setCartItems_localStorage(storedItems);
          this.loadCartItems();
          break;
        }
      }
    }

    if(!productExist){
      this.cartItems.push({
        "item_id": product.id, 
        "product_id": product.id, 
        "qty": 1, 
        "price": product.price, 
        "name": product.name
      });
    }
    
    this.setCartItems_localStorage(this.cartItems);
    this.loadCartItems();
  }

  getCartTotalAmount(){
    let cartTotalAmount = 0;
    if(this.cartItems.length){
      for(let item of this.cartItems){
        cartTotalAmount += item.price * item.qty;
      }
    }
    return cartTotalAmount;
  }

  singleProductView(product: any){
    this.router.navigate(['product', product.id]);
  }

}
