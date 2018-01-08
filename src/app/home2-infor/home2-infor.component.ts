import { Component, OnInit } from '@angular/core';
import { Home2InforService } from './home2-infor.service';
import { Home2 } from '../home2/home2';
import 'rxjs/add/operator/switchMap';
import {Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home2-infor',
  templateUrl: './home2-infor.component.html',
  styleUrls: ['./home2-infor.component.css']
})
export class Home2InforComponent implements OnInit {

  oneUser: Home2;
  id: number;
  edit: boolean = false;
  selectableItems: any = [{inx: 1}, {inx: 2}, {inx: 3}, {inx:4}, {inx:5}, {inx:6}, {inx:7}];
  p: number = 1;
  
  constructor(
    private home2_infor_service : Home2InforService,
    private route: ActivatedRoute,
    private location: Location,
    private newRouter: Router,
    ) { }

  ngOnInit() {

    // this.route.params.switchMap((params: Params) => this.home2_infor_service.getUser(params['id'])).then(users1 => this.oneUser = users1);
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.edit = params['fg'];
      console.log(params);
      console.log(this.id);
      console.log(this.edit);
      // this.home2_infor_service.getUser(this.id).then(users1 => {this.oneUser = users1; console.log(this.oneUser);});
      /*
      if (this.edit) {

      } else {
        this.getUser(this.id);
      }
      */
      this.getUser(this.id);

   });
  }

// show user and edit
  getUser(userId: number) {
    // this.edit = true;
    this.home2_infor_service.getUser(userId).then(users1 => {this.oneUser = users1; console.log(this.oneUser);});
  }

/*
  // edit user
  editUser1(user : Home2) {
    this.oneUser = user;
    console.log(this.oneUser);
  }
  */

  // tham số chỉnh sửa biến user có cấu Home2
  editUser(user : Home2) {
    // console.log(user);
    this.home2_infor_service.editUser(user).then(res => {
      // console.log(res);
      this.newRouter.navigate(['/home2']);
    });
  }

  goBack() : void {
    this.location.back();
  }
}
