import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './product';
import { ProductService } from './product.service';
import 'rxjs/add/operator/map';

import {
  FormGroup,
  // FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];
  selectedProduct: Product;
  newProduct: Product;
  promiseBooks: Promise<Product[]>;
  message: string;
  form: FormGroup;

  heroForm : any;

  constructor(
    private router: Router,
    private productService: ProductService,
    // private formBuilder: FormBuilder
    ) { }

  // thực hiện load dữ liệu cho component product
  ngOnInit() {

/*
    // validate form
    this.form = this.formBuilder.group({
      model: ['', Validators.required],
      manufacturer: ['', Validators.required],
      });
*/

/*
this.heroForm = new FormGroup({
  'name': new FormControl(this.newProduct.model, [
    Validators.required,
    Validators.minLength(4),
    // forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
  ]),
  // 'alterEgo': new FormControl(this.newProduct.alterEgo),
  // 'power': new FormControl(this.newProduct.power, Validators.required)
});
*/

    this.productService.getProducts().then(products1 => this.products = products1);
    // this.productService.getProducts().then(products => this.products = products);

    
    // this.promiseBooks = this.productService.getProducts(); 

    // tạo model product
    this.newProduct = new Product();
    // console.log(this.products);
    // console.log(this.promiseBooks);
  }

  // get name() { return this.heroForm.get('name'); }

  // trình bày thông tin của 1 product
  showInfo(product: Product): void {
    this.selectedProduct = product;
    this.router.navigate(['/information', this.selectedProduct.id]);
  }

  /*
  // tạo mới 1 product
  createProduct(product: Product): void {
    this.productService.createProduct(product)
      .then(product1 => {
        this.products.push(product1);
        this.selectedProduct = null;
      });
  }
  */

  // tạo mới 1 product sử dụng thư viện Observable
  createProduct(product: Product): void {

    // if (this.form.dirty && this.form.valid) {
    //   alert(`Model: ${this.form.value.model} Manufacturer: ${this.form.value.manufacturer}`);
    // }

    this.productService.createProduct(product)
    .subscribe(
      res => {
        console.log(res);
        this.message = res.msg;
        this.productService.getProducts().then(products1 => this.products = products1);
      },
      err => {
        console.log("Error occured");
      });
  }

/*
  // thực hiện update 1 product
  updateProduct(product: Product): void {
    this.productService.updateProduct(product).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      });
  }
  */

  // thực hiện xóa product

  /*
  deleteProduct(product: Product): void {
    this.productService
      .deleteProduct(product)
      .then(() => {
        this.products = this.products.filter(b => b !== product);
        if (this.selectedProduct === product) { this.selectedProduct = null; }
      });
  }
*/

deleteProduct(product: Product): void {
  this.productService
    .deleteProduct(product)
    .subscribe(
      res => {
        console.log(res);
        this.productService.getProducts().then(products1 => this.products = products1);
      },
      err => {
        console.log("Error occured");
      });
}

}
