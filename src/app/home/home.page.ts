import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

interface User{
  email?: string;
  password?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user: User = {
    email: 'test2@test.com',
    password: 'test1234',

  };

  constructor(public afAuth: AngularFireAuth) {}

  async createAccount() {}

  async login() {}

  async logout() {}

}
