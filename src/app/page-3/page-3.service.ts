import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class Page3Service {

  constructor(private http : Http) { }

  // khởi tạo header
  private headers = new Headers();
  private options = new RequestOptions({ headers: this.headers });
  private apiUrl = 'http://localhost.test/';
  private upload_file = 'upload_file.php';

  fileUp(fileUpload: any) {
    console.log(fileUpload);
    return this.http.post(this.apiUrl + this.upload_file, fileUpload, this.options ).map((res: Response) => res.json());
  }

}
