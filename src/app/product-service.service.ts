import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class ProductServiceService {
  products = [];
  constructor(private _route: Router) { }
  addProduct(product) {
    this.products.push(product);
    console.log(this.products);
  }
  retrieveProducts() {
    return this.products;
  }
  editProductLink(index) {
    this._route.navigateByUrl(`edit/${index}`);
  }
  editProduct(update, i) {
    this.products[i] = update;
    this._route.navigateByUrl('products');
  }
  deleteProduct(index) {
    this.products.splice(index, 1);
  }

}
