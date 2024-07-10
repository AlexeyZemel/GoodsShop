import { Component, OnInit } from '@angular/core';
import {Product} from "../../services/fake-store.service";
import {CartItem, CartService} from "../../services/cart.service";
import {CartCardComponent} from "./cart-card/cart-card.component";
import {CurrencyPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CartCardComponent, NgForOf, CurrencyPipe
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  products: CartItem[] = [];
  cartTotal: number = 0;
  cartQuantity: number = 0;

  constructor(private cartService: CartService) { }
  ngOnInit() {
    this.cartService.cartItems$.subscribe((data: CartItem[]) => {
      this.products = data;
      this.cartTotal = this.cartService.getCartTotal();
      this.cartQuantity = this.cartService.getCartQuantity();
    });
  }


}
