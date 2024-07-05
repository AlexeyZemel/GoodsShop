import { Component, OnInit } from '@angular/core';
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import { FakeStoreService, Product } from "../../services/fake-store.service";
import {GoodsCardComponent} from "../../goods-card/goods-card.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NgForOf,
    NgIf, CommonModule, GoodsCardComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  products: Product[] = [];
  categories: string[] = [];
  selectedProduct: Product | null = null;

  constructor(private fakeStoreService: FakeStoreService) {}

  ngOnInit() {
    this.fetchProducts();
    this.fetchCategories();
    console.log("Я ТУТААААА");
  }

  fetchProducts() {
    this.fakeStoreService.getAllProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
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

  fetchProductById(id: number) {
    this.fakeStoreService.getProductById(id).subscribe(
      (data) => {
        this.selectedProduct = data;
      },
      (error) => {
        console.error(`Error fetching product with ID ${id}:`, error);
      }
    );
  }

  fetchProductsByCategory(category: string) {
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
