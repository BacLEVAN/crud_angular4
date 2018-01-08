import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Home2 } from './home2';

@Injectable()
export class Home2Service {

  private apiUrl = 'http://localhost.test/';
  private createUser1 = 'create_user.php';
  private getUsers1 = 'get_users.php';
  private getUser2 = 'get_one_user.php';
  private updateUser1 = 'update_user.php';
  private deleteUser1 = 'delete_one_user.php';

  constructor(private http: Http) { }

  getService(): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
        .get(this.apiUrl + this.getUsers1, options)
        .toPromise()
        .then(this.extractData)
        .catch(this.handleError);
  }


  saveUser(user1 : Home2): Promise<Home2> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(user1);
    return this.http.post(this.apiUrl + this.createUser1, user1, options).toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }


/*
  saveUser(user1 : any): Promise<any> {
    // console.log(user1);
    return this.http.post(this.apiUrl + this.createUser1, user1).toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
  */

  deleteUser(user2 : Home2) : Promise<Home2> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let cpParams = new URLSearchParams();
    cpParams.set('id', `${user2.id}`);			
    let options = new RequestOptions({ headers: headers, params: cpParams });
    console.log(user2);
    return this.http.delete(this.apiUrl + this.deleteUser1, options).toPromise()
    .then(this.extractData)
    .catch(this.handleError);
  }

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
