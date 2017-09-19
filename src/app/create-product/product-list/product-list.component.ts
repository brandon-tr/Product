import { Component, OnInit, Input } from '@angular/core';
import { CreateProductComponent } from '../create-product.component';
import { ProductServiceService } from '../../product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [];
  constructor(private _products: ProductServiceService) { }
  ngOnInit() {
    this.products = this._products.retrieveProducts();
    console.log(this.products);
  }
  Delete(i) {
    this._products.deleteProduct(i);
  }
  Edit(i) {
    this._products.editProductLink(i);
  }
}
