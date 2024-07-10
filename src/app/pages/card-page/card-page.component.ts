import {Component} from '@angular/core';
import {FakeStoreService, Product} from '../../services/fake-store.service';
import {DataTransitionService} from "../../services/data-transition.service";
import {CurrencyPipe, NgForOf, NgStyle} from "@angular/common";
import {CartItem, CartService} from "../../services/cart.service";
import {RouterLink} from "@angular/router";
import {SimilarItemComponent} from "./similar-item/similar-item.component";
import {GoodsCardComponent} from "../../goods-card/goods-card.component";
import {OtherItemComponent} from "./other-item/other-item.component";
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-card-page',
  standalone: true,
  imports: [
    NgStyle,
    CurrencyPipe,
    RouterLink,
    SimilarItemComponent,
    GoodsCardComponent,
    NgForOf,
    OtherItemComponent
  ],
  templateUrl: './card-page.component.html',
  styleUrl: './card-page.component.css'
})
export class CardPageComponent {
  prod!: Product;
  products!: Product[];
  categories: string[] = [];
  prodQuantity: number = 0;

  constructor(private dataService: DataTransitionService, private cartService: CartService, private fakeStoreService: FakeStoreService,
              private stateService: StateService) {}

  ngOnInit(): void {
    this.dataService.selectedProduct$.subscribe(product => {
      this.prod = product;
    });
    this.cartService.cartItems$.subscribe((data: CartItem[]) => {
      this.prodQuantity = this.cartService.getProductQuantity(this.prod.id);
    });
    this.stateService.refresh$.subscribe(() => {
      this.prod = this.dataService.loadSelectedProduct();
      this.fetchProductsByCategory(this.prod.category);
    });
    this.fetchProductsByCategory(this.prod.category);
    this.fetchCategories();
  }

  ngAfterContentChecked() {
    this.cartService.cartItems$.subscribe((data: CartItem[]) => {
      this.prodQuantity = this.cartService.getProductQuantity(this.prod.id);
    });
  }

  trigger() {
    this.stateService.triggerRefresh();
  }

  addToCart() {
    this.cartService.addToCart(this.prod);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.prod);
  }

  fetchCategories() {
    this.fakeStoreService.getAllCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  fetchProductsByCategory(category: string) {
    if (category == '') {
      this.fakeStoreService.getAllProducts().subscribe(
        (data) => {
          this.products = data;
        },
        (error) => {
          console.error('Error fetching products:', error);
        }
      );
    }
    else {
      this.fakeStoreService.getProductsByCategory(category).subscribe(
        (data) => {
          this.products = data;
        },
        (error) => {
          console.error(`Error fetching products in category ${category}:`, error);
        }
      );
    }
  }


}
