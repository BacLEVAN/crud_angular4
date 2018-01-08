import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../product/product';
import { ProductService } from '../product/product.service';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-product-infor',
  templateUrl: './product-infor.component.html',
  styleUrls: ['./product-infor.component.css']
})
export class ProductInforComponent implements OnInit {

  // product : Product;
  product : Product;
  products1 : any;

  message : string;

  constructor(
    private productService1: ProductService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  // lấy thông tin 1 product
  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.productService1.getProduct(params['id']))
    // this.route.params.switchMap((params: Params) => this.productService1.getProduct(+params['id']))
    // .subscribe(product2 => this.product = product2);
    .subscribe(product2 => {
      this.products1 = product2;
      this.product = product2;
      console.log(product2);});
    // console.log(this.product);
      // this.products1 = 'kiem tra';
  }

  // thực hiện update giá trị
  /*
  updateBike(): void {
    this.productService1.updateBike(this.product);
    this.goBack();
  }
*/
    // thực hiện update 1 product
    updateProduct(product: Product): void {

      // console.log(product);

      this.productService1.updateProduct(product).subscribe(
        res1 => {
         // console.log(res);
        //  this.message = res1.msg;
        },
        err => {
          console.log("Error occured");
        });
    }
  

  // thực hiện quay trở lại
  goBack(): void {
    this.location.back();
  }

}
