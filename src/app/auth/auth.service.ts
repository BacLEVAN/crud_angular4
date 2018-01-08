import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  get isLoggedIn() {
    return false;
    // return true;
  }

  get isSuperAdmin() {
    return true;
  }

}
