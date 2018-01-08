import { Component, OnInit } from '@angular/core';
import { Page4Service } from './page-4.service';
import { Page4Data } from './page4-data';
// import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-4',
  templateUrl: './page-4.component.html',
  styleUrls: ['./page-4.component.css']
})
export class Page4Component implements OnInit {

  formData: FormData = new FormData();

  model_page_4 : Page4Data;
  // model_page_4 : any;

  page_4_datas : Page4Data[];

  path_image_page_4 = "../assets/user/";

  constructor(private page_4_service : Page4Service, private route : Router) { }

  ngOnInit() {

    this.getAllPage4();

    // cần khởi tạo trước khi sử dụng trong form với ngModel
    this.model_page_4 = new Page4Data();
  }


  // lấy thông tin file khi có sự kiện
  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        // let formData:FormData = new FormData();
        this.formData.append('uploadFile', file, file.name);
      }
  }

  // thực hiện upload file và submit form
  upload(page_4 : Page4Data) : void {
    console.log(page_4);
    this.formData.append('email', page_4.email);
    this.page_4_service.fileUp1(this.formData).subscribe(
      res => {
        console.log(res);
        this.route.navigate(['/page-4']);
      },
      err => {
        console.log("Error occured upload file");
      });
  }

  getAllPage4() {
    return this.page_4_service.getAllPage4().then(res => { this.page_4_datas = res; console.log(this.page_4_datas);});
  }

}
