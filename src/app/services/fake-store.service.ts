import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const BASE_URL = 'https://fakestoreapi.com';

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}


@Injectable({
  providedIn: 'root'
})
export class FakeStoreService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${BASE_URL}/products`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${BASE_URL}/products/${id}`);
  }

  getAllCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${BASE_URL}/products/categories`);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${BASE_URL}/products/category/${category}`);
  }

  getProductByCategory(category: string): Observable<Product> {
    return this.getProductsByCategory(category).pipe(map(products => products[0]));
  }

}
