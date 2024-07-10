import {Component, Input} from '@angular/core';
import { Product } from "../services/fake-store.service";
import {CurrencyPipe, NgStyle} from "@angular/common";
import {CartItem, CartService} from "../services/cart.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-goods-card',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgStyle,
    RouterLink
  ],
  templateUrl: './goods-card.component.html',
  styleUrl: './goods-card.component.css'
})
export class GoodsCardComponent {
  @Input() prod!: Product;
  prodQuantity: number = 0;

  constructor(private cartService: CartService) { }
  ngOnInit() {
    this.cartService.cartItems$.subscribe((data: CartItem[]) => {
      this.prodQuantity = this.cartService.getProductQuantity(this.prod.id);
    });
  }

  addToCart() {
    this.cartService.addToCart(this.prod);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.prod);
  }
}
