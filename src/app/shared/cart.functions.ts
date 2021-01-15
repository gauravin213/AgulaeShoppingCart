import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartFunctions{

    constructor(){}

    cartItems = [];

    localStorageCartKey: string = "myCartItemKey";

    getDatappI(){
        return 'cart functions';
    }

    getCartItems_localStorageI(){
        const localStorage_cartItems = JSON.parse(localStorage.getItem(this.localStorageCartKey));
        return localStorage_cartItems;
    }

    setCartItems_localStorageI(cartItems: any){
        localStorage.setItem(this.localStorageCartKey, JSON.stringify(cartItems));
    }

    loadCartItemsI(){
        const storedItems = this.getCartItems_localStorageI();
        return storedItems;
    }

    removeCartItemI(i: number, index: number, cartItem: any){
        const storedItems = this.getCartItems_localStorageI();
        if(storedItems !=null){
            const new_items =  storedItems.filter(item => item.item_id != cartItem.item_id);
            this.setCartItems_localStorageI(new_items);
        }
        this.loadCartItemsI();
    }

    addtocartI(product: any){ 
        let productExist = false;
        const storedItems = this.getCartItems_localStorageI();
        if(storedItems !=null){
                for (let i of storedItems) {
                if(i.product_id == product.id){
                    i.qty++;
                    productExist = true;
                    this.setCartItems_localStorageI(storedItems);
                    this.loadCartItemsI();
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
    
        this.setCartItems_localStorageI(this.cartItems);
        this.loadCartItemsI();
    }

    getCartTotalAmountI(){
        let cartTotalAmount = 0;
        if(this.cartItems.length){
            for(let item of this.cartItems){
            cartTotalAmount += item.price * item.qty;
            }
        }
        return cartTotalAmount;
    }
}