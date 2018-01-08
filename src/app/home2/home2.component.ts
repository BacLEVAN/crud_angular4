import { Component, OnInit } from '@angular/core';
import { Home2Service } from './home2.service';
import { Home2 } from './home2';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  users: any;

  newUser: Home2;

  oneUser = new Home2();
  errorMessage: String;

  pathUrl = "assets/user/";

  constructor(private home2service: Home2Service) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    console.log('Baclv ...');
    this.newUser = new Home2();
    return this.home2service.getService().then(users1 => this.users = users1);
  }

  // saveUser (user: Home2) 
  saveUser(user1: Home2): void {
    this.home2service.saveUser(user1)
      .then(res => {

        // kết quả trả về từ service
        console.log(res);
        this.getAllUsers();
      },
      error => this.errorMessage = <any>error);
  }

  editUser1() {
  }

  // Thực hiện xóa 1 user cụ thể
  deleteUser(user1: Home2): void {
    this.home2service.deleteUser(user1)
      .then(res => {

        // kết quả trả về từ service
        console.log(res);
        this.getAllUsers();
      },
      error => this.errorMessage = <any>error);
  }
}
