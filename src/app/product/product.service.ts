import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
// import {Observable} from 'rxjs/Rx';
import {Observable} from "rxjs/Rx";

import { Product } from './product';

import 'rxjs/add/operator/map';

import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {

  constructor(private http : Http) { }

  // kiểu trả về json
  private headers = new Headers({ 'Content-Type': 'application/json' });

  // đường dẫn các api
  // private apiUrl = 'http://localhost:4200/assets/data/books.json';
  // private apiUrl = 'http://localhost.test/get_products.php';
  // private apiUrl = 'api/products/';
  private apiUrl = 'http://localhost.test/';
  private createProduct1 = 'create_product.php';
  private getProducts1 = 'get_products.php';
  private getProducts2 = 'get_one_product.php';
  private update_product1 = 'update_product_1.php';
  private delete_product1 = 'delete_one_product.php';

  // thực hiện lấy tất cả các product
  /*
  getProducts(): Promise<Product[]> {
    return this.http.get(this.apiUrl + this.getProducts1)
      .toPromise()
      .then(response => response.json().data as Product[])
      .catch(this.handleError);
  }
*/

  getProducts(): Promise<Product[]> {
    return this.http.get(this.apiUrl + this.getProducts1)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }


  /*
  getProducts() {
    return this.http.get(this.apiUrl + this.getProducts1).map((res:Response) => res.json())
  }
  */

  // lấy 1 product cụ thể
  /*
  getProduct(id: number): Promise<Product> {
    const url = `${this.apiUrl + this.getProducts2}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
*/

getProduct(productId: string): Observable<Product> {
  const url = `${this.apiUrl + this.getProducts2}`;
  let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
  let cpParams = new URLSearchParams();
  cpParams.set('id', productId);			
  let options = new RequestOptions({ headers: cpHeaders, params: cpParams });
  return this.http.get(url, options)
    .map(this.extractData)
    .catch(this.handleError);
}

  // thực hiện tạo mới 1 product
  createProduct2(product: Product): Promise<Product> {

    console.log(product);
    
    return this.http
      .post(this.apiUrl + this.createProduct1, JSON.stringify(product), { headers: this.headers })
      .toPromise()
      .then(this.extractData)
      // .then(res => res.json().data as Product)
      .catch(this.handleError);
    
    /*
    this.http.post(this.apiUrl + this.createProduct1, {email: 'email', password: 'password'}, { headers: this.headers })
    .toPromise()
    .then(this.extractData)
    ;
    */
  }

  createProduct(product: Product) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(product);
    return this.http.post(this.apiUrl + this.createProduct1, body, options ).map((res: Response) => res.json());
  }

  // thực hiện update lại product
  /*
  updateBike(product: Product): Promise<Product> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.http
      .put(url, JSON.stringify(product), { headers: this.headers })
      .toPromise()
      .then(() => product)
      .catch(this.handleError);
  }
*/
/*
  updateProduct(product:Product) {
    const url = `${this.apiUrl + this.update_product1}?id=${product.id}`;
    return this.http.put(url, JSON.stringify(product), { headers: this.headers })
    .map(res => res.json());
  }
*/

  //Update product
  updateProduct(product:Product):Observable<number> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    let body = JSON.stringify(product);
    console.log(body);
    /*
    return this.http.put(this.apiUrl + this.update_product1 +"/"+ product.id, body, options)
      .map(

        // success => {
        // console.log(success);
        // (res: Response) => res.json()
        this.extractData

      )
      .catch(this.handleError);
      */
    return this.http.put(this.apiUrl + this.update_product1, body, options)
      .map((res: Response) => res.json());
  }


  // thực hiện xóa 1 product
  /*
  deleteProduct(product: Product): Promise<void> {
    const url = `${this.apiUrl + this.delete_product1}/${product.id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  */

  deleteProduct(product: Product): Observable<number> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });

    /*
    thực hiện truyền tham số dạng get 
    let cpParams = new URLSearchParams();
    cpParams.set('id', `${product.id}`);			
    let options = new RequestOptions({ headers: cpHeaders, params: cpParams });
    */
    let options = new RequestOptions({ headers: cpHeaders });
    const url = `${this.apiUrl + this.delete_product1}/?id=${product.id}`;
    return this.http.delete(url, options)
      .map((res: Response) => res.json());
      // .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
      return body;
    }

  // bắt lỗi nếu xảy ra lỗi
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
