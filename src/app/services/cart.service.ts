import { Injectable } from '@angular/core';
import { Product } from "./fake-store.service";
import {BehaviorSubject} from "rxjs";

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>(this.loadCartItems());
  cartItems$ = this.cartItemsSubject.asObservable();

  private saveCartItems(cartItems: CartItem[]) {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  private loadCartItems(): CartItem[] {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  }

  addToCart(product: Product) {
    const items = this.cartItemsSubject.value;
    const itemIndex = items.findIndex(item => item.product.id === product.id);
    if (itemIndex >= 0) {
      items[itemIndex].quantity++;
    } else {
      items.push({ product, quantity: 1 });
    }
    this.cartItemsSubject.next(items);
    this.saveCartItems(items);
  }

  removeFromCart(product: Product) {
    let items = this.cartItemsSubject.value;
    const itemIndex = items.findIndex(item => item.product.id === product.id);
    if (itemIndex >= 0) {
      items[itemIndex].quantity--;
      if (items[itemIndex].quantity === 0) {
        items = items.filter(item => item.product.id !== product.id);
      }
      this.cartItemsSubject.next(items);
      this.saveCartItems(items);
    }
  }

  getCartTotal() {
    return this.cartItemsSubject.value.reduce(
      (total, item) => total + item.product.price * item.quantity, 0);
  }

  getCartQuantity() {
    return this.cartItemsSubject.value.reduce(
      (total, item) => total + item.quantity, 0);
  }

  getProductQuantity(productId: number): number {
    const item = this.cartItemsSubject.value.find(item => item.product.id === productId);
    return item ? item.quantity : 0;
  }

  getProductTotal(productId: number): number {
    const item = this.cartItemsSubject.value.find(item => item.product.id === productId);
    return item ? item.product.price * item.quantity : 0;
  }
}
