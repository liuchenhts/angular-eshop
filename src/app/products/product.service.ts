import { PRODUCTS } from './mock-products';
import { Product } from './domain/product';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  getProduct(id: number): Observable<Product> {
    return of(PRODUCTS.find(p => p.id === id));
  }

  add(product: Product): Observable<Product> {
    PRODUCTS.push(product);
    return of(product);
  }

  update(product: Product): Observable<Product> {
    const i: number = PRODUCTS.findIndex(p => p.id === product.id);
    PRODUCTS[i] = product;
    return of(product);
  }

  delete(id: number): Observable<Product> {
    const i: number = PRODUCTS.findIndex(p => p.id === id);
    const removed = PRODUCTS.splice(i, 1);
    return of(removed[0]);
  }

}
