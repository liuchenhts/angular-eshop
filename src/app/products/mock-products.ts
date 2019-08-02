import { Product } from './domain/product';
import { RouteConfigLoadEnd } from '@angular/router';

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Apple', price: 5.85, createdDate: new Date(2019, 6, 24, 10, 33, 30) },
  { id: 2, name: 'Huawei', price: 59.23, createdDate: new Date() },
];
