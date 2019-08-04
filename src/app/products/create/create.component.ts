import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../domain/product';
import { PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  add(name: string, price: number): void {
    name = name.trim();
    if (!name) { return; }
    const id: number = this.genId();
    const createdDate: Date = new Date();

    this.productService.add({ id, name, price, createdDate } as Product)
      .subscribe((product: Product) => {
        alert(`Added product id=${product.id}`);
      }
      );
  }

  genId(): number {
    return PRODUCTS.length > 0 ? Math.max(...PRODUCTS.map(p => p.id)) + 1 : 11;
  }

}
