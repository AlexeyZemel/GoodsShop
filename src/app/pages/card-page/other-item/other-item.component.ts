import {Component, Input} from '@angular/core';
import {FakeStoreService, Product} from "../../../services/fake-store.service";
import {Router, RouterLink} from "@angular/router";
import {DataTransitionService} from "../../../services/data-transition.service";
import {CurrencyPipe, NgStyle} from "@angular/common";
import {CartItem, CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-other-item',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgStyle,
    RouterLink
  ],
  templateUrl: './other-item.component.html',
  styleUrl: './other-item.component.css'
})
export class OtherItemComponent {
  @Input() category!: string;
  product!: Product;
  prodQuantity: number = 0;

  constructor(private router: Router, private dataService: DataTransitionService, private cartService: CartService, private fakeStoreService: FakeStoreService) {
  }
  ngOnInit() {
    this.cartService.cartItems$.subscribe((data: CartItem[]) => {
      this.prodQuantity = this.cartService.getProductQuantity(this.product.id);
    });
    this.getProductByCategory(this.category);
  }

  ngAfterContentChecked() {
    this.cartService.cartItems$.subscribe((data: CartItem[]) => {
      this.prodQuantity = this.cartService.getProductQuantity(this.product.id);
    });
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product);
  }

  selectProduct(product: Product) {
    this.dataService.selectProduct(product);
    this.router.navigate(['/card']);
  }

  getProductByCategory(category: string) {
    this.fakeStoreService.getProductByCategory(category).subscribe(
      (product) => {
        this.product = product;
      },
      (error) => {
        console.error(`Error fetching product in category ${category}:`, error);
      }
    );
  }
}
