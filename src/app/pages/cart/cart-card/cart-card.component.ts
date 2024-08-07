import { Component, Input } from '@angular/core';
import {CartItem, CartService} from "../../../services/cart.service";
import {CurrencyPipe, NgStyle} from "@angular/common";
import {Product} from "../../../services/fake-store.service";
import {DataTransitionService} from "../../../services/data-transition.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-cart-card',
  standalone: true,
  imports: [
    NgStyle,
    CurrencyPipe
  ],
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.css'
})
export class CartCardComponent {
  constructor(private cartService: CartService, private dataService: DataTransitionService, private router: Router) { }
  @Input() product!: CartItem;
  count = 1;
  totalProd: number = 0;
  ngOnInit(): void {
    this.totalProd = this.cartService.getProductTotal(this.product.product.id);
    this.count = this.cartService.getProductQuantity(this.product.product.id);
  }

  ngDoCheck (): void {
    this.totalProd = this.cartService.getProductTotal(this.product.product.id);
    this.count = this.cartService.getProductQuantity(this.product.product.id);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
  }

  selectProduct(product: Product) {
    this.dataService.selectProduct(product);
    this.router.navigate(['/card']);
  }

}
