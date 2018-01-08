import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class Page4Service {

  // khởi tạo header
  private headers = new Headers();
  private options = new RequestOptions({ headers: this.headers });
  private apiUrl = 'http://localhost.test/';
  private new_upload_file_1 = 'new_upload_file_1.php';
  private get_all_page4 = 'get_all_page4.php';

  constructor(private http : Http) { }

  fileUp1(fileUpload: any) {
    console.log(fileUpload);
    return this.http.post(this.apiUrl + this.new_upload_file_1, fileUpload, this.options ).map((res: Response) => res.json());
  }

  // lấy toàn bộ dữ liệu của trang 4
  getAllPage4() : Promise <any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
        .get(this.apiUrl + this.get_all_page4, options)
        .toPromise()
        .then(this.extractData)
        .catch(this.handleError);
  }

  // nhận giá trị trả về sau khi thực hiện api
  private extractData(res: Response) {
    let body = res.json();
    // console.log(body);
    return body || {};
  }
  
  // bắt lỗi nếu xảy ra lỗi
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
