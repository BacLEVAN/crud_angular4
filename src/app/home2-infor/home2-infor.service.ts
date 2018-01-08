import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Home2 } from '../home2/home2';

@Injectable()
export class Home2InforService {
  private apiUrl = 'http://localhost.test/';
  private getUser2 = 'get_one_user.php';
  private editUser2 = 'update_user.php';

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http : Http) { }

  /**
   * tham số truyền vào hàm dạng number
   * dữ liệu trả về cho hàm là dang Promise với cấu trúc là Home2
   * 
   * @param userId 
   */
  getUser(userId : number) : Promise<Home2> {
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });

    return this.http
    // .get(this.apiUrl + this.getUser2+"?id="+userId, options)
    .get(this.apiUrl + this.getUser2+"?id="+userId, this.options)
    .toPromise()
    .then(this.extractData)
    .catch(this.handleError);
  }

  // thực hiện chỉnh sửa thông tin của user
  editUser(oneUser : Home2) : Promise<Home2> {
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    return this.http
    .put(this.apiUrl + this.editUser2, oneUser, this.options)
    // .put(this.apiUrl + this.editUser2, oneUser, options)
    .toPromise()
    .then(this.extractData)
    .catch(this.handleError);
  }

  // nhận dữ liệu trả về
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
