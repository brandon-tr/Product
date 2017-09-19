import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product = {
    name: '',
    price: 1,
    image: null,
  };
  constructor(private _product: ProductServiceService, private _route: ActivatedRoute) { }
  ngOnInit() {
  }
  update() {
    this._route.paramMap.subscribe  ( params => {
      console.log(params.get('id'));
      return this._product.editProduct(this.product, params.get('id'));
    });
    this.product = {
      name: '',
      price: 1,
      image: null,
    };
  }

}
