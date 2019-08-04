import { Product } from './../domain/product';
import { Observable } from 'rxjs';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products$: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.products$ = products;
    });
  }

  delete(id: number) {
    this.productService.delete(id).subscribe((product) => {
      // alert('deleted');
    });
  }

}
