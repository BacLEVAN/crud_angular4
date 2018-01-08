import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Page3Service } from './page-3.service';
import { forbiddenNameValidator1 } from '../shared/forbidden-name-for-reactform.directive';

@Component({
  selector: 'app-page-3',
  templateUrl: './page-3.component.html',
  styleUrls: ['./page-3.component.css']
})

export class Page3Component implements OnInit {

  name = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      forbiddenNameValidator1(/baclv/i),
    ]
  );

  email = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    forbiddenNameValidator1(/email/i),
  ]
);


  constructor(private page3_service: Page3Service) { }

  ngOnInit() {
  }

  // fileChange(event) {
  //   let fileList: FileList = event.target.files;
  //   if(fileList.length > 0) {
  //       let file: File = fileList[0];
  //       let formData:FormData = new FormData();
  //       formData.append('uploadFile', file, file.name);
  //       let headers = new Headers();
  //       /** No need to include Content-Type in Angular 4 */
  //       headers.append('Content-Type', 'multipart/form-data');
  //       headers.append('Accept', 'application/json');
  //       let options = new RequestOptions({ headers: headers });
  //       this.http.post(`${this.apiEndPoint}`, formData, options)
  //           .map(res => res.json())
  //           .catch(error => Observable.throw(error))
  //           .subscribe(
  //               data => console.log('success'),
  //               error => console.log(error)
  //           )
  //     }
  // }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        this.page3_service.fileUp(formData).subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.log("Error occured upload file");
          });
      }
  }

}
