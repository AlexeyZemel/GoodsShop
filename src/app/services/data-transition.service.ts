import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { Product } from './fake-store.service';
import {StateService} from "./state.service";

@Injectable({
  providedIn: 'root'
})
export class DataTransitionService {
  private selectedProductSubject = new BehaviorSubject<Product>(this.loadSelectedProduct());
  selectedProduct$ = this.selectedProductSubject.asObservable();

  constructor(private stateService: StateService) {
    // Trigger refresh when the state changes
    this.stateService.refresh$.subscribe(() => {
      this.loadSelectedProduct();
    });
  }

  selectProduct(product: Product) {
    this.selectedProductSubject.next(product);
    this.saveSelectedProduct(product);
  }

  private saveSelectedProduct(product: Product) {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
  }

  loadSelectedProduct(): any {
    const productData = localStorage.getItem('selectedProduct');
    return JSON.parse(productData!);
  }
}
