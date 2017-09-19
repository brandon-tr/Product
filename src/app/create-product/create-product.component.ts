import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  product = {
    name: '',
    price: Number,
    image: '',
  };
  constructor(private _router: Router, private _productService: ProductServiceService) { }

  ngOnInit() {
  }
  CreateProduct() {
    this._productService.addProduct(this.product);
    this.product = {
      name: '',
      price: Number,
      image: '',
    };
    this._router.navigate(['/products']);
  }
}
